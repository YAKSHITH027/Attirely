import {
  doc,
  getDoc,
  updateDoc,
  where,
  collection,
  query,
  getDocs,
  setDoc,
} from 'firebase/firestore'
import { db } from '../../lib/firebase'

// get wishlist
export const wishlistAPI = async (id) => {
  try {
    const wishlistRef = collection(db, 'wishlist')
    const q = query(wishlistRef, where('userId', '==', id))
    const querySnapshot = await getDocs(q)
    let result
    querySnapshot.forEach((doc) => {
      result = doc.data()
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

// add to cart
export const addToWishlistAPI = async (id, wishlistData) => {
  try {
    await setDoc(doc(db, 'wishlist', id), {
      wishList: wishlistData, // this should be array of objects cart
      userId: id, //"userId which you get from authreducer",
    })
  } catch (error) {
    console.log(error)
  }
}
