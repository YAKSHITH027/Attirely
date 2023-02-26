import {
  doc,
  getDoc,
  updateDoc,
  where,
  collection,
  query,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
// import { collection, query, where } from "firebase/firestore";
// import { db } from "../../lib/firebase";
export const cartAPI = async (id) => {
  try {
    // console.log(id);
    const citiesRef = collection(db, "cart");
    const q = query(citiesRef, where("userId", "==", id));
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


export  const  addToCartApi = async (id, cartData) => {
  try {
    let res = await setDoc(doc(db, "cart", id), {
      cart: cartData, // this should be array of objects cart
      userId: id, //"userId which you get from authreducer",
    });
  } catch (error) {
    console.log(error);
  }
};

