import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhJ2upniUaTltbaKdBCd6_PXy0437pRc8",
  authDomain: "attirely-b72e6.firebaseapp.com",
  projectId: "attirely-b72e6",
  storageBucket: "attirely-b72e6.appspot.com",
  messagingSenderId: "312018619885",
  appId: "1:312018619885:web:2983e5656a228d21a32be4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
