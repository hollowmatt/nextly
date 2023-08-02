const Firestore = require('@google-cloud/firestore');
const KEYFILE = process.env.KEY || '../key_file.json';

//Firestore
export const db = new Firestore({
  projectId: 'threadly-386216',
  keyFilename: KEYFILE,
});
export const COLLECTIONS = {
  POSTS: 'posts',
  META: 'meta',
};

