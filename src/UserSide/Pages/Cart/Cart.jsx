import { Box, Button, Center, Flex, Grid, GridItem, Image, Input, Text,Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsTag } from "react-icons/bs";
import { CiPercent} from "react-icons/ci";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { TbTruckDelivery} from "react-icons/tb";
import { MdMoreTime} from "react-icons/md";
import gift from "./gift.png"
import css from "./cart.css"
const Cart = () => {
  const [data,setdata]=useState([
    {
    "id": "M6",
    "category": "Mens",
    "subCategory": "Jeans",
    "brand": "Roadster",
    "title": "Men Slim Fit Jeans",
    "offerPrice": "719",
    "originalPrice": "1499",
    "discount": "52%",
    "quantity": 32,
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg"
    ],
    "size": ["28", "30", "32", "34", "36", "38", "40"],
    "cartQuantity": ["1", "2", "3", "4", "5", "6", "7","8","9"],
    "rating": "3.8",
    "ratingCount": "6.6k"
  },
  {
    "id": "M7",
    "category": "Mens",
    "subCategory": "Jeans",
    "brand": "HIGHLANDER",
    "title": "Men Slim Fit Jeans",
    "offerPrice": "558",
    "originalPrice": "1299",
    "discount": "57%",
    "quantity": 40,
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg"
    ],
    "size": ["30", "32", "34", "36", "38"],
    "cartQuantity": ["1", "2", "3", "4", "5", "6", "7","8","9"],
    "rating": "3.8",
    "ratingCount": "9k"
  }])


  const handledelet=(el)=>{
    setdata(data.filter((t)=>t.id===el.id))
  }
  return (
    <Center w={"100vw"} >
          <Grid className="cart_grid" m="10"  paddingLeft={"60px"}  >
              <GridItem  >
                <div style={{padding:"15px",display:"flex",
                boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"}}>
                   <Text fontSize={['xs', 'xs', 'xs', 'xs']} >Deliver To: SUDHIR  NANDANE at post Bharaswda 
                   TA Ashti Dist Wardha</Text>
                   <Button fontSize={['xxs', 'xs', 'sm', 'sm']} style={{fontSize:"12px"}}width={{ base: '100%', sm: '50%', md: '25%' }} borderRadius={"0%"} border={"1px solid #ef506a"} colorScheme='white' 
                   color={"#ef506a"} w={"auto"} h={"35px"}>Change Address</Button>
                </div>
                <div style={{marginTop:"10px",padding:"15px",
                 boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"}}>
                 <Flex gap={3}> <CiPercent/>
                 <h1 style={{fontSize:"12px"}}>Avilable Offers</h1>
                 </Flex>
                 <div >
                  <p style={{fontSize:"12px"}}> 
                   10% Instant Discount on YES Bank Credit Cards on a min spend of Rs 3,000. TCA</p>
                  <p style={{fontSize:"12px"}}>
                      Get up to Rs 500 Cashback on CRED Pay UPI (Android Devices only) on a min spend of Rs 500. TCA</p>
                      <p style={{fontSize:"12px"}}>Get up to Rs 500 Cashback on CRED Pay UPI (Android Devices only) on a min spend of Rs 500. TCA</p>
                 <p style={{fontSize:"12px"}}>5% Cashback up to Rs 1000 on Paytm Postpaid Transactions on a min spend of Rs 1,500. TCA</p>
                 <p style={{fontSize:"12px"}}><span>5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</span></p>
                 </div>
                </div>
                <div style={{marginTop:"10px",padding:"15px",
                boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"}}>
                <Flex><TbTruckDelivery/>
                <p style={{fontSize:"12px"}}>Yeh ! No Convinience fee for this Order</p></Flex>
                </div>
                <Grid gap={2} mt={"10px"}>
                  {data.map((el)=>{
                    return <Flex key={el.id} justifyContent={"space-between"}  boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"} padding={2}>
                      <Flex gap={2}>
                      <Image h={"100px"} src={el.images[0]}  />
                      
                      <Box  >
                        <Text>{el.brand}</Text>
                        <p style={{fontSize:"12px"}}>{el.title}</p>
                        <Flex gap={2}>
                        <Select w={"80px"} style={{fontSize:"12px"}} h={"20px"} borderRadius={"0%"} placeholder='size'>
                            {el.size.map((el)=>{
                              return <option value={+el}>{+el}</option>
                            })}   
                         </Select>
                         <Select w={"80px"} h={"20px"}  style={{fontSize:"12px"}} borderRadius={"0%"} placeholder='Quantity'>
                         {el.cartQuantity.map((el)=>{
                              return <option value={+el}>{+el}</option>
                            })}
                         </Select>

                        </Flex>
                        <h1 style={{fontSize:"12px"}}>{el.originalPrice}</h1>
                        <p style={{fontSize:"10px",color:"green"}}>coupon discount : Rs {el.offerPrice}</p>
                        <Flex><MdMoreTime/> <p style={{fontSize:"10px"}}> 14 Days return Avilalble</p></Flex>
                      </Box>
                    </Flex><Button backgroundColor={"#ffffff"} onClick={()=>handledelet(el)}>x</Button>
                    </Flex>
                  })}
                </Grid>
              </GridItem>
               <GridItem pr={"200px"} >
               <div style={{padding:"15px",display:"flex",gap:"2%",
               boxShadow:" rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}}>
               <p>Coupons</p>
               <div><BsTag/></div>
               <div>
                <h1 style={{fontSize:"10px"}}>1 Coupon Applied</h1>
                <p style={{fontSize:"10px"}}>You save Addiotiona 200</p>
               </div>
               <div><Button style={{fontSize:"12px"}} borderRadius={"0%"} border={"1px solid #ef506a"} 
               colorScheme='white' color={"#ef506a"} >Edit</Button></div>
               </div>    
               <div style={{paddingTop:"10px"}}>
                <p style={{fontSize:"10px",padding:"2px"}}>GIFTING AND PERSONILAZATION</p>
                <img src={gift} alt="ytyr" height={"150px"} />
                </div>
                <Checkbox mt={2} defaultChecked>Support Up</Checkbox> 
                <Flex mt={2} gap={2} >
                <Button borderRadius={"100px"} fontSize={"12px"}   variant='outline'> Rs 10 </Button>
                <Button borderRadius={"100px"} fontSize={"12px"}  variant='outline'> Rs 20 </Button>
                <Button borderRadius={"100px"} fontSize={"12px"}  variant='outline'> Rs 30 </Button>
                <Button borderRadius={"100px"}  fontSize={"12px"} variant='outline'> other </Button>
                </Flex>   
              
                
              </GridItem>
             
          </Grid>
        </Center>
  )
}

export default Cart