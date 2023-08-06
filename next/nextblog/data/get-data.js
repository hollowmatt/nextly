import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase";
const dbInstance = collection(database, 'managers');

export async function getData() {
  const snapshot = await getDocs(dbInstance)
  const data = snapshot.docs.map((item) => {
    return { ...item.data(), id: item.id }
  });
  return data;
}