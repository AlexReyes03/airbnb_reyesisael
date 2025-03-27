import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRch_8S9UlVSQB8AHBGykZUfn24Rh-ICA",
  authDomain: "airbnb-7c5f7.firebaseapp.com",
  projectId: "airbnb-7c5f7",
  storageBucket: "airbnb-7c5f7.firebasestorage.app",
  messagingSenderId: "958148452380",
  appId: "1:958148452380:web:0b9220c9cf6483664bffd9"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };