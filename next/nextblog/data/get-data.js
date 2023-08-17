import { collection, getDocs, doc, getDoc, query, orderBy } from "firebase/firestore";
import { database } from "../firebase";
//const dbInstance = collection(database, 'managers');

export async function getData(coll) {
  const snapshot = await getDocs(collection(database, coll));
  const data = snapshot.docs.map((item) => {
    return { ...item.data(), id: item.id }
  });
  return data;
}

export async function getSortedData(coll) {
  const q = query(collection(database, coll), orderBy("date", "desc"));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((item) => {
    return { ...item.data(), id: item.id }
  });
  return data;
}

export async function getRow(coll, id) {
  const docRef = await doc(database, coll, id);
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()) {
    return docSnap.data();
  } else {
    return {'error_msg': "record does not exist",};
  }
}