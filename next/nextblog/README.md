## Blogly
 
### About
This is a 'from scratch' blog, justing next.js, Google FireStore (non-relational database), and FireBase storage (files).  I'm running the app on Vercel, with environment variables in that environment to connect to the data and storage.

I also am using Tailwind for styling, because... why not?

### Env Vars:
You'll find in the firebase.js file, references to the required environment variables:

```
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
```