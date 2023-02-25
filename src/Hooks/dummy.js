import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
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
} from "firebase/firestore";
import { async } from "q";
import React, { useEffect } from "react";
import { auth, db } from "../lib/firebase";

const Dummy = () => {
  console.log("hello");
  const cart = [
    {
      id: "M1",
      category: "Mens",
      subCategory: "Joggers",
      brand: "HRX by Hrithik Roshan",
      title: "Men Rapid Dry Running Joggers",
      offerPrice: 664,
      originalPrice: 1899,
      discount: "65%",
      quantity: 34,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      ],
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      rating: 3.7,
      ratingCount: "13.8k",
    },
    {
      id: "M2",
      category: "Mens",
      subCategory: "Shirt",
      brand: "Roadster",
      title: "Printed Casual Shirt",
      offerPrice: 599,
      originalPrice: 1499,
      discount: "60%",
      quantity: 25,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
      ],
      size: ["S", "M", "L", "XL", "XXL", "3XL", "XXXL"],
      rating: 4.1,
      ratingCount: "25.9k",
    },
  ];
  const userid = "userIddfsfdsjfdsjf";
  const address = { name: "something", id: "thsi", pin: 453333 };
  // getting cart data from firebase
  // send userId as parameter it will return array of objects
  const cartAPI = async (id) => {
    try {
      console.log(id);
      const citiesRef = collection(db, "cart");
      const q = query(citiesRef, where("id", "==", id));
      const querySnapshot = await getDocs(q);
      let result;
      querySnapshot.forEach((doc) => {
        result = doc.data();
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //   add to cart API
  const addToCart = async (id, cartData) => {
    try {
      let res = await setDoc(doc(db, "cart", id), {
        cart: cartData, // this should be array of objects cart
        userId: id, //"userId which you get from authreducer",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // delete from cart//////////////////------------------

  // same above function just send the filterd array here and change the cart in redux as well because this doesn't return anyting

  //orders related api from here

  //adding order to the firebase
  const addOrders = async (id, cartData, address) => {
    try {
      let res = await addDoc(collection(db, "orders"), {
        cart: cartData, // this should be array of objects cart
        userId: id, //"userId which you get from authreducer",
        address: address,
        timestamp: Date.now(), // this can be used for sorting
        status: "pending",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // get all orders
  const getOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));
    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push(doc.data());
    });
    console.log(orders);
    return orders;
  };

  //get all users
  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    console.log(users);
    return users;
  };

  // signIN
  const signIN = async (data) => {
    let res = await signInWithEmailAndPassword(auth, data.email, data.password);
  };

  //signUp
  const singUP = async (data) => {
    const res = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
  };

  //setUp users
  const setUser = async (userid, data) => {
    // you get userid from res after signUP i.e res.user.uid=userid
    await setDoc(doc(db, "users", userid), {
      id: userid,
      ...data, // it's the object of email ,password,name that you get from the user
      avatar: "",
      date: Date.now(),
    });
  };

  useEffect(() => {
    // addOrders(userid, cart, address);
    // getOrders();
    // setUser("userid2", {
    //   email: "dfyakshti@gmail.com",
    //   password: "22dfdfdfd",
    //   name: "22yakshith",
    // });
    // getUsers();
  }, []);
  //end
  return <div>dummy</div>;
};
export default Dummy;
