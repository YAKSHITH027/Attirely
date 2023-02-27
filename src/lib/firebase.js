import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmceEuqBIY_jFDMk8V7IqvBGp88ORLays",
  authDomain: "anothernew-4aa5c.firebaseapp.com",
  projectId: "anothernew-4aa5c",
  storageBucket: "anothernew-4aa5c.appspot.com",
  messagingSenderId: "437613395134",
  appId: "1:437613395134:web:3422510b698e72932672ef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
