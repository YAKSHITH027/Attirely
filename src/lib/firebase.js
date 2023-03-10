import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "mynew34-2aaa0.firebaseapp.com",
  projectId: "mynew34-2aaa0",
  storageBucket: "mynew34-2aaa0.appspot.com",
  messagingSenderId: "491457844453",
  appId: "1:491457844453:web:81ac2eebfbd9661da9700c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
