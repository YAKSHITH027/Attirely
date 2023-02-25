import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3GAHhE21VAbZ4vtcG7Rkn1j7Ar5mCMuY",
  authDomain: "attierly.firebaseapp.com",
  projectId: "attierly",
  storageBucket: "attierly.appspot.com",
  messagingSenderId: "33803488889",
  appId: "1:33803488889:web:f76378498dd84f7ba08ea8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
