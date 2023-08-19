import { collection, getDocs, doc, getDoc, query, orderBy } from "firebase/firestore";
import { database } from "../firebase";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const TYPE = Object.freeze({
  POST: 'md',
  AVATAR: 'jpeg',
  IMG: 'jpg'
});

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

export async function getBucketContent(id) {
  const storage = getStorage();
  const preBody = [];

  await getDownloadURL(ref(storage, `${id}.md`))
    .then((url) => fetch(url))
    .then((res => res.text()))
    .then((res) => {
      preBody.push(res);
  });
  
  return preBody[0];
}

export async function getBucketURL(path, id, type) {
  const storage = getStorage();
  const object = path + id + "." + TYPE[type];
  const url = await getDownloadURL(ref(storage, object));
  return url;
}
