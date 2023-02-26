import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4fpdhpoQZGxkJyb-5tBg-V8Qfstujk4E",
  authDomain: "new-one-e6639.firebaseapp.com",
  projectId: "new-one-e6639",
  storageBucket: "new-one-e6639.appspot.com",
  messagingSenderId: "576007040563",
  appId: "1:576007040563:web:a9d8ede4e1c4d7109ebd46",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
