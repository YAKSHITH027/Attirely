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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsTag } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdMoreTime } from "react-icons/md";
import gift from "./gift.png";
import css from "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addcart, getCart } from "../../../Redux/Cart/cart.actions";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Home/Navbar";
import Footer from "../../Components/Home/Footer";
import Payment from "../Payment/Paymet";
const Cart = () => {
  const [qty, setqty] = useState(1);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [address, setaddres] = useState({
    name: "",
    city: "",
    other: "",
    number: "",
  });

  const userData = useSelector((store) => {
    return store.userAuthReducer.user;
  });

  const id = userData?.uid;

  const data = useSelector((store) => {
    return store.cartReducer.cart;
  });

  useEffect(() => {
    if (id) {
      dispatch(getCart(id));
    }
  }, []);
  console.log("my", data);

  // delet logic ***************************

  const handledelet = (el) => {
    const filterdata = data.filter((t) => t.id != el.id);
    console.log("gdfgdg", filterdata);
    dispatch(addToCart(id, filterdata));
  };
  // login of cart ********************************
  let value = 1;
  let total = data.map((el) => {
    return (value = value + Number(el.originalPrice) * qty);
  });
  let valueafterdicount = 0;
  let total1 = data.map((el) => {
    return (valueafterdicount =
      valueafterdicount +
      (Number(el.originalPrice) - Number(el.offerPrice)) * qty);
  });
  let dicount = 0;
  let total2 = data.map((el) => {
    return (dicount =
      dicount +
      Math.floor(
        Number((valueafterdicount / el.discount.replace("%", "")) * 10).toFixed(
          2
        )
      ));
  });

  const handleaddres = (e) => {
    setaddres({ ...address, name: e.target.value });
  };
  const handleaddres1 = (e) => {
    setaddres({ ...address, other: e.target.value });
  };
  const handleaddres2 = (e) => {
    setaddres({ ...address, city: e.target.value });
  };
  const handleaddres3 = (e) => {
    setaddres({ ...address, number: e.target.value });
  };
  // *****************************************
  let cartQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Navbar />
      <Center w={"105vw"}>
        <Grid className="cart_grid" m="5" gap={4}>
          <GridItem width={"100%"}>
            <Flex
              style={{
                padding: "15px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
              justifyContent={"space-between"}
            >
              <Box>
                <p>{address.name}</p>
                <p style={{ fontSize: "14px" }}>{address.other}</p>
                <p style={{ fontSize: "14px" }}>{address.city}</p>
                <p style={{ fontSize: "14px" }}>{address.number}</p>
              </Box>

              <Button
                onClick={onOpen}
                fontSize="10px"
                ml={"3%"}
                width={{ base: "50%", sm: "50%", md: "25%" }}
                borderRadius={"0%"}
                border={"1px solid #ef506a"}
                colorScheme="white"
                color={"#ef506a"}
                w={"auto"}
                h={"35px"}
              >
                Change Address
              </Button>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Change Delivey Address</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box>
                      <Input
                        placeholder="Name"
                        value={address.name}
                        onChange={handleaddres}
                      />
                      <Input
                        mt={5}
                        placeholder="Address"
                        value={address.other}
                        onChange={handleaddres1}
                      />
                      <Input
                        mt={5}
                        placeholder="city"
                        value={address.city}
                        onChange={handleaddres2}
                      />
                      <Input
                        mt={5}
                        placeholder="Mob No"
                        value={address.number}
                        onChange={handleaddres3}
                      />
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      width={"full"}
                      backgroundColor={"#ef506a"}
                      mr={3}
                      onClick={onClose}
                    >
                      ADD ADDRESS
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
            <div
              style={{
                marginTop: "10px",
                padding: "15px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            >
              <Flex gap={3}>
                {" "}
                <CiPercent />
                <h1 style={{ fontSize: "14px" }}>Avilable Offers</h1>
              </Flex>
              <div>
                <p style={{ fontSize: "14px" }}>
                  10% Instant Discount on YES Bank Credit Cards on a min spend
                  of Rs 3,000. TCA
                </p>
                <p style={{ fontSize: "14px" }}>
                  Get up to Rs 500 Cashback on CRED Pay UPI (Android Devices
                  only) on a min spend of Rs 500. TCA
                </p>
                <p style={{ fontSize: "14px" }}>
                  Get up to Rs 500 Cashback on CRED Pay UPI (Android Devices
                  only) on a min spend of Rs 500. TCA
                </p>
                <p style={{ fontSize: "14px" }}>
                  5% Cashback up to Rs 1000 on Paytm Postpaid Transactions on a
                  min spend of Rs 1,500. TCA
                </p>
                <p style={{ fontSize: "14px" }}>
                  <span>
                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                  </span>
                </p>
              </div>
            </div>
            <div
              style={{
                marginTop: "10px",
                padding: "15px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            >
              <Flex>
                <TbTruckDelivery />
                <p style={{ fontSize: "12px" }}>
                  Yeh ! No Convinience fee for this Order
                </p>
              </Flex>
            </div>
            <Grid gap={2} mt={"10px"}>
              {data.map((el) => {
                return (
                  <Flex
                    key={el.id}
                    justifyContent={"space-between"}
                    boxShadow={
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    }
                    padding={2}
                  >
                    <Flex gap={2}>
                      <Image h={"100px"} src={el.images[0]} />

                      <Box>
                        <Text>{el.brand}</Text>
                        <p style={{ fontSize: "12px" }}>{el.title}</p>
                        <Flex gap={2}>
                          <Select
                            w={"80px"}
                            style={{ fontSize: "12px" }}
                            h={"20px"}
                            borderRadius={"0%"}
                            placeholder="size"
                          >
                            {el.size.map((el) => {
                              return <option value={el}>{el}</option>;
                            })}
                          </Select>
                          <Select
                            w={"80px"}
                            h={"20px"}
                            style={{ fontSize: "12px" }}
                            onChange={(e) => setqty(e.target.value)}
                            borderRadius={"0%"}
                            placeholder="Quantity"
                          >
                            {cartQuantity.map((el) => {
                              return <option value={el}>{el}</option>;
                            })}
                          </Select>
                        </Flex>
                        <h1 style={{ fontSize: "12px" }}>{el.originalPrice}</h1>
                        <p style={{ fontSize: "10px", color: "green" }}>
                          coupon discount : Rs {el.offerPrice}
                        </p>
                        <Flex>
                          <MdMoreTime />{" "}
                          <p style={{ fontSize: "10px" }}>
                            {" "}
                            14 Days return Avilalble
                          </p>
                        </Flex>
                      </Box>
                    </Flex>
                    <Button
                      backgroundColor={"#ffffff"}
                      onClick={() => handledelet(el)}
                    >
                      x
                    </Button>
                  </Flex>
                );
              })}
            </Grid>
          </GridItem>
          <GridItem width={"100%"}>
            <div
              style={{
                padding: "15px",
                display: "flex",
                gap: "2%",
                boxShadow: " rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
              }}
            >
              <p>Coupons</p>
              <div>
                <BsTag />
              </div>
              <div>
                <h1 style={{ fontSize: "10px" }}>1 Coupon Applied</h1>
                <p style={{ fontSize: "10px" }}>You save Addiotiona 200</p>
              </div>
              <div>
                <Button
                  style={{ fontSize: "12px" }}
                  borderRadius={"0%"}
                  border={"1px solid #ef506a"}
                  colorScheme="white"
                  color={"#ef506a"}
                  w={"80px"}
                  h={"35px"}
                >
                  Edit
                </Button>
              </div>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <p style={{ fontSize: "10px", padding: "2px" }}>
                GIFTING AND PERSONILAZATION
              </p>
              <img src={gift} alt="ytyr" height={"150px"} />
            </div>
            <Checkbox mt={2} defaultChecked>
              Support Us
            </Checkbox>
            <Flex mt={2} gap={2}>
              <Button
                borderRadius={"100px"}
                fontSize={"12px"}
                variant="outline"
              >
                {" "}
                Rs 10{" "}
              </Button>
              <Button
                borderRadius={"100px"}
                fontSize={"12px"}
                variant="outline"
              >
                {" "}
                Rs 20{" "}
              </Button>
              <Button
                borderRadius={"100px"}
                fontSize={"12px"}
                variant="outline"
              >
                {" "}
                Rs 30{" "}
              </Button>
              <Button
                borderRadius={"100px"}
                fontSize={"12px"}
                variant="outline"
              >
                {" "}
                other{" "}
              </Button>
            </Flex>

            <Box padding={15}>
              <hr style={{ padding: "10px", marginRight: "100px" }} />
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
                  Rs. {dicount}
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
                  Rs. {valueafterdicount}
                </p>
                <hr />
              </Flex>
              <Link to={"/payment"}>
                <Button
                  width={["100%", "80%"]}
                  borderRadius={"0%"}
                  color={"white"}
                  backgroundColor={"#ef506a"}
                >
                  Place Order
                </Button>
              </Link>
            </Box>
          </GridItem>
        </Grid>
      </Center>
      <Footer />
    </div>
  );
};

export default Cart;
