import {
  doc,
  getDoc,
  updateDoc,
  where,
  collection,
  query,
  getDocs,
  setDoc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore'
import { db } from '../../lib/firebase'

// get wishlist
export const wishlistAPI = async (id) => {
  try {
    const wishlistRef = collection(db, 'wishlist')
    const q = query(wishlistRef, where('userId', '==', id))
    const querySnapshot = await getDocs(q)
    let result = []
    querySnapshot.forEach((doc) => {
      result.push(doc.data().item)
    })

    return result
  } catch (error) {
    console.log(error)
  }
}

// add to cart
export const addToWishlistAPI = async (id, product, productId) => {
  try {
    await await addDoc(collection(db, 'wishlist'), {
      item: product,
      productId: productId,
      userId: id, //"userId which you get from authreducer",
    })
  } catch (error) {
    console.log(error)
  }
}
// delete wishlist
export const removeFromWishlistAPI = async (id, productid) => {
  try {
    const q = query(
      collection(db, 'wishlist'),
      where('userId', '==', id),
      where('productId', '==', productid)
    )
    const querySnapshot = await getDocs(q)
    const docSnapshot = querySnapshot.docs[0]
    await deleteDoc(docSnapshot.ref)
  } catch (error) {
    console.log(error)
  }
}
