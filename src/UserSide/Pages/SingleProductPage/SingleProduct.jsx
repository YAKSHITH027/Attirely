import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import { BiStar } from 'react-icons/bi'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { addToCart, getCart } from '../../../Redux/Cart/cart.actions'
import Footer from '../../Components/Home/Footer'
import Navbar from '../../Components/Home/Navbar'
import SimilarProducts from '../../Components/Products/SimilarProducts'
import { addToWishlist } from '../../../Redux/Wishlist/wishlist.actions'

const SingleProduct = () => {
  let { products, id } = useParams()
  const dispatch = useDispatch()
  const toast = useToast()
  let allCartItems = useSelector((store) => {
    return store.cartReducer.cart
  })
  //firebase userid
  const userData = useSelector((store) => {
    return store.userAuthReducer.user
  })
  const allWishlistData = useSelector((store) => {
    return store.wishlistReducer.wishlist
  })

  const userid = userData?.uid

  const [singleProd, setSingleProd] = useState({})
  const [isLoading, setLoading] = useState(true)

  const getSingleProuduct = async () => {
    let res = await axios.get(
      `https://rc201-jsondata-serverapi.onrender.com/${products}/${id}`
    )
    setSingleProd(res.data)
    setLoading(false)
  }
  const handleAdd = (item) => {
    item.qtt = 1
    allCartItems = [...allCartItems, item]
    // get userid from authReducer
    dispatch(addToCart(userid, allCartItems))
  }
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(userid, singleProd, singleProd.id))
    toast({
      title: 'Product is Added to the Wishlist',
      description: 'Shop More ...',
      status: 'success',
      duration: 4000,
      position: 'top',
      isClosable: true,
    })
  }

  useEffect(() => {
    getSingleProuduct()
  }, [id])

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <Flex
          justify={'center'}
          flexDir={{ base: 'column', md: 'row' }}
          width='87vw'
          marginX='auto'
          my='2rem'
        >
          <Box
            width={{ base: '95%', lg: '30%' }}
            height={{ base: '60vh', lg: '80vh' }}
          >
            <Skeleton height={'100%'} width='100%' borderRadius={'xl'} />
          </Box>
          <Flex width='65%' px={'3rem'} flexDir='column' gap='2rem' py='2rem'>
            <Skeleton height='30px' width='150px' />
            <Skeleton height='18px' width='250px' />
            <Skeleton height='18px' width='150px' />
            <Skeleton height='20px' width='200px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Flex
              gap={{ base: '3px', md: '2rem' }}
              px={{ md: '2rem' }}
              width='full'
            >
              <Skeleton height='40px' width='160px' borderRadius={'xl'} />
              <Skeleton height='40px' width='160px' borderRadius={'xl'} />
            </Flex>
            <Skeleton height='17px' />
            <Skeleton height='17px' />
          </Flex>
        </Flex>
      ) : (
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          justify={'center'}
          width='87vw'
          marginX='auto'
          my='2rem'
        >
          <Flex
            marginX={'auto'}
            justify={'center'}
            width={{ base: '90%', lg: '30%' }}
            height={{ base: '60vh', lg: '80vh' }}
          >
            <Image
              src={singleProd.images[0]}
              width='100%'
              height={'100%'}
              borderRadius='xl'
            />
          </Flex>
          <Box
            width={{ base: '95%', md: '65%' }}
            px={{ base: '0.2rem', md: '3rem' }}
          >
            <Heading py='1rem'>{singleProd.brand}</Heading>
            <Text fontSize={'1.5rem'}>{singleProd.title}</Text>
            <Flex p={'1.1rem'} borderBottomWidth='2px' gap='1rem'>
              <Flex borderWidth={'2px'} p='4px' borderRadius='md'>
                <Flex align={'center'} borderRightWidth='2px' pr={'9px'}>
                  {singleProd.rating} <BiStar fontSize={'1.1rem'} />
                </Flex>
                <Text pl={'9px'}>{singleProd.ratingCount} Ratings</Text>
              </Flex>
            </Flex>
            <Flex fontSize={'1.5rem'} py='1rem' gap='1.5rem' align={'center'}>
              <Text>₹{singleProd.offerPrice}</Text>
              <Text textDecoration={'line-through'} fontSize='1.1rem'>
                MRP {singleProd.originalPrice}
              </Text>
              <Text color={'orange.500'} fontSize='1.1rem'>
                ({singleProd.discount}% OFF)
              </Text>
            </Flex>
            <Text color={'green.600'}>inclusive of all taxes</Text>
            <Text fontSize={'1.5rem'}>Select Size</Text>
            <Flex gap='2' my='1rem'>
              <Center
                border={'1px'}
                width='3rem'
                height={'3rem'}
                borderRadius={'50%'}
              >
                S
              </Center>
              <Center
                border={'1px'}
                width='3rem'
                height={'3rem'}
                borderRadius={'50%'}
              >
                M
              </Center>
              <Center
                border={'1px'}
                width='3rem'
                height={'3rem'}
                borderRadius={'50%'}
              >
                L
              </Center>
              <Center
                border={'1px'}
                width='3rem'
                height={'3rem'}
                borderRadius={'50%'}
              >
                XL
              </Center>
              <Center
                border={'1px'}
                width='3rem'
                height={'3rem'}
                borderRadius={'50%'}
              >
                XXL
              </Center>
            </Flex>
            <Flex p={{ base: '0.2rem', md: '2rem' }} gap='1rem'>
              <Button
                colorScheme={'pink'}
                py='0.5rem'
                px='4rem'
                isDisabled={allCartItems.find(
                  (item) => item.id == singleProd.id
                )}
                onClick={() => {
                  handleAdd(singleProd)
                  toast({
                    title: 'Product is Added to the cart',
                    description: 'Shop More ...',
                    status: 'success',
                    duration: 4000,
                    position: 'top',
                    isClosable: true,
                  })
                }}
              >
                ADD TO BAG
              </Button>
              <Button
                py='0.5rem'
                px='4rem'
                onClick={handleAddToWishlist}
                isDisabled={allWishlistData.find((item) => item.id === id)}
              >
                {' '}
                WISHLIST
              </Button>
            </Flex>
            <Text>100% Original Products</Text>
            <Text py='6px'>Pay on delivery might be available</Text>
            <Text>Easy 30 days returns and exchanges</Text>
          </Box>
        </Flex>
      )}
      {/* {!isLoading && <SimilarProducts />} */}

      <Footer />
    </div>
  )
}

export default SingleProduct

//  const dispatch = useDispatch();
//  let data = [
//    {
//      id: "W22222",
//      category: "Womens",
//      subCategory: "KurtaSet",
//      brand: "KALINI",
//      title: "Women Yoke Design Kurta Set",
//      offerPrice: "887",
//      originalPrice: "3699",
//      discount: "76%",
//      quantity: 34,
//      images: [
//        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//      ],
//      size: ["S", "M", "L", "XL", "XXL"],
//      rating: "4.1",
//      ratingCount: "1.9k",
//    },
//    {
//      id: "W1",
//      category: "Womens",
//      subCategory: "KurtaSet",
//      brand: "KALINI",
//      title: "Women Yoke Design Kurta Set",
//      offerPrice: "887",
//      originalPrice: "3699",
//      discount: "76%",
//      quantity: 34,
//      images: [
//        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
//      ],
//      size: ["S", "M", "L", "XL", "XXL"],
//      rating: "4.1",
//      ratingCount: "1.9k",
//    },
//  ];
//  const sett = async () => {
//    let res = await setDoc(doc(db, "cart", "hello world again"), {
//      id: 4,
//      cart: data,
//    });
//    console.log("res", res);
//  };
//  useEffect(() => {
//    // sett();
//    dispatch(getCart(4));
//  }, []);
//  console.log("check");
//  let carrtt = useSelector((store) => {
//    return store.cartReducer.cart;
//  });
//  console.log("done", carrtt);
