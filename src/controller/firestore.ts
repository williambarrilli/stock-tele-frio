import { initializeApp } from 'firebase/app';
import {
  getDocs,
  getFirestore,
  query,
  where,
  collection,
  addDoc,
  orderBy,
  updateDoc,
  getDoc,
  doc,
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

export const getProductByFilter = async (
  type: string,
  search: string | number,
) => {
  const retorno: any[] = [];
  let searchQuery;

  const productsRef = collection(db, 'products');

  if (type === 'id') {
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
    const documentRef = collection(db, 'products');
    return await addDoc(documentRef, product);
  } catch (error) {
    console.log('Error add document:', error);
  }
};

export const updateProduct = async (product: iProduct) => {
  try {
    const documentRef = doc(db, 'shops', product._id || '');
    const docSnapshot = await getDoc(documentRef);
    if (docSnapshot.exists()) {
      const documentData = docSnapshot.data();
      await updateDoc(documentRef, { ...documentData, product });
    } else {
      console.log('Document not found');
    }
  } catch (error) {
    console.log('Error update document:', error);
  }
};
