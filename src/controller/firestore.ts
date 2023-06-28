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
  QuerySnapshot,
} from 'firebase/firestore';
import { firebaseConfig } from '../init-firebase';
import { iProduct } from '../types/product';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getCollection = (nameCollection: string) => {
  return collection(db, nameCollection);
};

const productsRef = getCollection('products');

const getDocsSnapshot = (querySnapshot: QuerySnapshot) => {
  const list: any[] = [];
  querySnapshot.forEach((doc) => {
    list.push({ ...doc.data(), _id: doc.id });
  });
  return list;
};

export const getProductsList = async () => {
  const searchQuery = query(productsRef, orderBy('id'));
  const querySnapshot = await getDocs(searchQuery);
  const retorno: iProduct[] = getDocsSnapshot(querySnapshot);
  return retorno;
};

// TODO finalizar
export const getProductsListPaginated = async (
  currentPage: number,
  itemsPerPage: number = 1,
) => {
  const q = query(
    productsRef,
    orderBy('id'),
    limit(itemsPerPage),
    startAt(currentPage * itemsPerPage),
  );

  const querySnapshot = await getDocs(q);
  const totalItems = querySnapshot.size;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const data: iProduct[] = getDocsSnapshot(querySnapshot);

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
  let searchQuery;
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

  const retorno: iProduct[] = getDocsSnapshot(querySnapshot);

  return retorno;
};

export const createProduct = async (product: iProduct) => {
  try {
    await updateIdProduct(Number(product.id) + 1);
    return await addDoc(productsRef, product);
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
    const idRef = getCollection('idProducts');
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
  const idRef = getCollection('idProducts');
  const querySnapshot = await getDocs(query(idRef));
  if (querySnapshot.docs.length) {
    const doc = querySnapshot.docs[0];
    sequence = doc.data().sequence;
  }
  return sequence;
};
