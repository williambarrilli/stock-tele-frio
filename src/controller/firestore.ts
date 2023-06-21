import { initializeApp } from 'firebase/app';
import {
  getDocs,
  getFirestore,
  query,
  where,
  collection,
  addDoc,
  orderBy,
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
    retorno.push(doc.data());
  });

  return retorno as iProduct[];
};

export const getProductByFilter = async (type: string, search: string) => {
  const retorno: any[] = [];

  const productsRef = collection(db, 'products');
  console.log('productsRef', productsRef);

  const queryType = type.toLowerCase() === 'nome' ? 'name' : 'id';

  const searchQuery = query(
    productsRef,
    where(queryType, '>=', search),
    where(queryType, '<=', search + '\uf8ff'),
  );
  console.log('searchQuery', searchQuery);

  const querySnapshot = await getDocs(searchQuery);
  console.log('querySnapshot', querySnapshot);
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

// export const updateSolicitationReserve = async (
//   shopId: string,
//   reserved: Reserved,
//   index: number
// ) => {
//   try {
//     const documentRef = doc(db, "shops", shopId);
//     const docSnapshot = await getDoc(documentRef);
//     if (docSnapshot.exists()) {
//       const documentData = docSnapshot.data();

//       documentData.solicitationList[index] = reserved;

//       if (reserved.status === EnumStatus.APROVED) {
//         documentData?.reservedList.push(reserved);
//       }
//       await updateDoc(documentRef, {
//         solicitationList: documentData.solicitationList,
//         reservedList: documentData.reservedList,
//       });
//     } else {
//       console.log("Document not found");
//     }
//   } catch (error) {
//     console.log("Error getting document:", error);
//   }
// };
