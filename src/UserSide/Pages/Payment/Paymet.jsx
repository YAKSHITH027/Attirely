import { useCallback, useEffect, useState } from "react";
import useRazorpay from "react-razorpay";

import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
  Select,
  ModalBody,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";

import { addToCart, getCart } from "../../../Redux/Cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Home/Navbar";
import Footer from "../../Components/Home/Footer";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
export default function Payment() {
  const dispach = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [address, setaddres] = useState(
    JSON.parse(localStorage.getItem("userAddress")) || {
      name: "Yakshith kulal",
      city: "udupi",
      other: "4# 98 perdoor udupi pincode 576124",
    }
  );
  const toast = useToast();
  const Razorpay = useRazorpay();

  const dispatch = useDispatch();

  const userData = useSelector((store) => {
    return store.userAuthReducer.user;
  });

  const id = userData?.uid;
  // ---------------------------------------
  const data = useSelector((store) => {
    return store.cartReducer.cart;
  });

  // login of cart ********************************

  // handling all the payment amounts
  let value = 0;
  let offerValue = 0;
  data.map((el) => {
    offerValue += Number(el.offerPrice) * el.qtt;
    return (value = value + Number(el.originalPrice) * el.qtt);
  });
  const finalAmount = offerValue;
  offerValue = value - offerValue;

  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_test_JFihbnSsCtVIUH",
      amount: finalAmount * 100,
      currency: "INR",
      name: "Attirely",
      description: "Test Transaction",
      image: "https://i.ibb.co/7jfCzLZ/Attirely-removebg-preview.png",

      handler: (res) => {
       
        const addOrders = async (id, cartData, address) => {
          try {
            const sameId = Date.now() + id;
            let res = await setDoc(doc(db, "orders", sameId), {
              cart: cartData, // this should be array of objects cart
              userId: id, //"userId which you get from authreducer",
              address: address,
              timestamp: Date.now(), // this can be used for sorting
              orderId: sameId,
              status: "pending",
            });
           
          } catch (error) {
            console.log(error);
          }
        };
        addOrders(id, data, address);
        if (res) {
          let mydata = [];
          dispatch(addToCart(id, mydata));
        }
      },
      prefill: {
        name: "Sudhir Nandane",
        email: "nandanesudhir1@gmail.com",
        contact: "9657267157",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  const order = (id, data, address) => {
    // removed one function no need of parameters
    handlePayment();
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <Grid className="cart_grid" m="10" gap={5}>
          <GridItem width={"100%"} padding={5}>
            <h1 style={{ fontWeight: "bold", padding: "5px" }}>
              Select Delivery Address
            </h1>
            <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} padding={5}>
              <Flex>
                <Radio defaultChecked mr={"10px"} value="1"></Radio>
                <Box>
                  <Text>{address.name} </Text>
                  <Text fontSize={"12px"}>{address.other}</Text>
                  <Text fontSize={"12px"}>{address.city}</Text>
                  <Text fontSize={"12px"}>{address.number}</Text>
                </Box>
              </Flex>
            </Box>
            <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} padding={5}>
              <Button
                borderRadius={"0%"}
                color={"#ef506a"}
                backgroundColor={"white"}
              >
                ADD NEW ADDRESS
              </Button>
            </Box>
          </GridItem>
          <GridItem width={"100%"}>
            <h1
              style={{ fontWeight: "bold", fontSize: "12px", padding: "10px" }}
            >
              DELIVERY ESTIMATES
            </h1>
            {data.map((item) => {
              return (
                <Flex gap={5} padding={3} key={item.id}>
                  <Image src={item.images} w={"50px"} h={"50px"} />
                  <Text fontSize={"12px"}>Estimated Delivery By 4 march</Text>
                </Flex>
              );
            })}
            <Box padding={5}>
              <h1 style={{ fontSize: "12px", fontWeight: "bold" }}>
                Price Details ({data.length}-items)
              </h1>
              <Flex justifyContent={"space-between"} mt={2}>
                <p style={{ fontSize: "12px" }}>ToTal MRP</p>
                <p
                  style={{
                    fontSize: "12px",
                    padding: "10px",
                    marginLeft: "150px",
                  }}
                >
                  Rs. {value}
                </p>
                <hr />
              </Flex>
              <hr style={{ marginRight: "100px" }} />
              <Flex justifyContent={"space-between"} mt={2}>
                <p style={{ fontSize: "12px" }}>Discount on MRP</p>
                <p
                  style={{
                    fontSize: "12px",
                    padding: "10px",
                    marginLeft: "120px",
                  }}
                >
                  Rs. {offerValue}
                </p>
                <hr />
              </Flex>
              <hr style={{ marginRight: "100px" }} />
              <Flex justifyContent={"space-between"} mt={2}>
                <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Total Ammount
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    padding: "10px",
                    marginLeft: "120px",
                    fontWeight: "bold",
                  }}
                >
                  Rs. {finalAmount}
                </p>
                <hr />
              </Flex>
              <Button
                onClick={() => order(id, data, address)}
                isDisabled={data.length === 0}
                width={["100%", "80%"]}
                borderRadius={"0%"}
                color={"white"}
                backgroundColor={"#ef506a"}
              >
                Pay Now
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
