import { initializeApp } from 'firebase/app';
import {
  getDocs,
  getFirestore,
  query,
  where,
  collection,
  addDoc,
  orderBy,
  doc,
  setDoc,
  limit,
  startAt,
} from 'firebase/firestore';
import { firebaseConfig } from '../init-firebase';
import { iProduct } from '../types/product';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProductsList = async () => {
  const retorno: any[] = [];

  const productsRef = collection(db, 'products');

  const q = query(productsRef, orderBy('id'));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    retorno.push({ ...doc.data(), _id: doc.id });
  });

  return retorno as iProduct[];
};

// TODO finalizar
export const getProductsListPaginated = async (
  currentPage: number,
  itemsPerPage: number = 1,
) => {
  const productsRef = collection(db, 'products');

  const q = query(
    productsRef,
    orderBy('id'),
    limit(itemsPerPage),
    startAt(currentPage * itemsPerPage),
  );

  const querySnapshot = await getDocs(q);
  const totalItems = querySnapshot.size;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const data: iProduct[] = [];

  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), _id: doc.id } as iProduct);
  });

  return {
    data,
    itemsPerPage,
    totalPages,
  };
};

export const getProductByFilter = async (
  type: string,
  search: string | number,
) => {
  const retorno: any[] = [];
  let searchQuery;

  const productsRef = collection(db, 'products');
  if (type === 'alert') {
    searchQuery = query(productsRef, where('activeAlertQuantity', '==', true));
  } else if (type === 'id') {
    searchQuery = query(productsRef, where(type, '==', Number(search)));
  } else {
    searchQuery = query(
      productsRef,
      where(type, '>=', search),
      where(type, '<=', search + '\uf8ff'),
    );
  }
  const querySnapshot = await getDocs(searchQuery);

  querySnapshot.forEach((doc) => {
    if (doc.data()) retorno.push(doc.data());
  });

  return retorno as iProduct[];
};

export const createProduct = async (product: iProduct) => {
  try {
    await updateIdProduct(Number(product.id) + 1);
    const documentRef = collection(db, 'products');
    return await addDoc(documentRef, product);
  } catch (error) {
    console.log('Error add document:', error);
  }
};

export const updateProduct = async (product: iProduct) => {
  try {
    if (product._id) {
      const documentRef = doc(db, 'products', product._id);
      return await setDoc(documentRef, product, { merge: true });
    }
  } catch (error) {
    console.log('Error update document:', error);
  }
};

export const updateIdProduct = async (id: number) => {
  try {
    const idRef = collection(db, 'idProducts');
    const querySnapshot = await getDocs(query(idRef));
    if (querySnapshot.docs.length) {
      const doc = querySnapshot.docs[0];
      await setDoc(doc.ref, { sequence: id });
    }
  } catch (error) {
    console.log('Error update document:', error);
  }
};

export const getIdProducts = async () => {
  let sequence = 0;
  const idRef = collection(db, 'idProducts');
  const querySnapshot = await getDocs(query(idRef));
  if (querySnapshot.docs.length) {
    const doc = querySnapshot.docs[0];
    sequence = doc.data().sequence;
  }
  return sequence;
};
