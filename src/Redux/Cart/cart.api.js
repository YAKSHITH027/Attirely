import {
  doc,
  getDoc,
  updateDoc,
  where,
  collection,
  query,
  getDocs,
} from "firebase/firestore";
// import { collection, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";
export const cartAPI = async (id) => {
  try {
    console.log(id);
    const citiesRef = collection(db, "cart");
    const q = query(citiesRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    let result;
    querySnapshot.forEach((doc) => {
      result = doc.data();
    });
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
