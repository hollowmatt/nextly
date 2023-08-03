const Firestore = require('@google-cloud/firestore');
const KEYFILE = process.env.KEY || '../key_file.json';

//Firestore
const db = new Firestore({
  projectId: 'threadly-386216',
  keyFilename: KEYFILE,
});
const COLLECTIONS = {
  POSTS: 'posts',
  META: 'meta',
  MGRS: 'managers',
};

export async function getPeeps() {
  const mgrs = [];
  await db.collection(COLLECTIONS.MGRS).get().then((querySnapshot) => {
    querySnapshot.forEach((mgr) => {
      mgrs.push({
        ldap: mgr.data().ldap, 
        name: mgr.data().name, 
        email: mgr.data().email, 
        title: mgr.data().title, 
        region: mgr.data().region
      });
    });
  });
  return mgrs;
}

