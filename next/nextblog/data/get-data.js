import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase";
//const dbInstance = collection(database, 'managers');

export async function getData(coll) {
  const snapshot = await getDocs(collection(database, coll));
  const data = snapshot.docs.map((item) => {
    return { ...item.data(), id: item.id }
  });
  return data;
}