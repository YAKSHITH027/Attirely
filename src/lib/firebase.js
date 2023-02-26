import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2UQFszbj04-8CdPxQzHSX1UDffJPhCqM",
  authDomain: "again-48f0e.firebaseapp.com",
  projectId: "again-48f0e",
  storageBucket: "again-48f0e.appspot.com",
  messagingSenderId: "1080854263866",
  appId: "1:1080854263866:web:ac5c792bde785dbde41d03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
