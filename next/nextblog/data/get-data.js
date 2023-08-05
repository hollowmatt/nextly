import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase";
const dbInstance = collection(database, 'BLOG');

export async function getData(req, res) {
  const snapshot = await getDocs(dbInstance);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.status(200).json(data);
}