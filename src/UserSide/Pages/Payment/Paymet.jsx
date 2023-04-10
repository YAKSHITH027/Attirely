import { useCallback, useEffect, useState } from 'react'
import useRazorpay from 'react-razorpay'

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
} from '@chakra-ui/react'

import { addToCart, getCart } from '../../../Redux/Cart/cart.actions'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../Components/Home/Navbar'
import Footer from '../../Components/Home/Footer'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../lib/firebase'
import { GiTruce } from 'react-icons/gi'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Payment() {
  const dispach = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const [address, setaddres] = useState(
    JSON.parse(localStorage.getItem('userAddress')) || {
      name: 'Yakshith kulal',
      city: 'udupi',
      other: '4# 98 perdoor udupi pincode 576124',
    }
  )
  const [count, setCount] = useState(5)
  const [showModal, setShowModal] = useState(false)
  const toast = useToast()
  const Razorpay = useRazorpay()

  const dispatch = useDispatch()

  const userData = useSelector((store) => {
    return store.userAuthReducer.user
  })

  const id = userData?.uid
  // ---------------------------------------
  const data = useSelector((store) => {
    return store.cartReducer.cart
  })

  // login of cart ********************************

  // handling all the payment amounts
  let value = 0
  let offerValue = 0
  data.map((el) => {
    offerValue += Number(el.offerPrice) * el.qtt
    return (value = value + Number(el.originalPrice) * el.qtt)
  })
  const finalAmount = offerValue
  offerValue = value - offerValue

  const handlePayment = useCallback(() => {
    const options = {
      key: 'rzp_test_Q6qLBPFz8pzc23',
      amount: finalAmount * 100,
      currency: 'INR',
      name: 'Attirely',
      description: 'Test Transaction',
      image: 'https://i.ibb.co/7jfCzLZ/Attirely-removebg-preview.png',

      handler: (res) => {
        console.log(res)
        const addOrders = async (id, cartData, address) => {
          try {
            const sameId = Date.now() + id
            let res = await setDoc(doc(db, 'orders', sameId), {
              cart: cartData, // this should be array of objects cart
              userId: id, //"userId which you get from authreducer",
              address: address,
              timestamp: Date.now(), // this can be used for sorting
              orderId: sameId,
              status: 'pending',
            })
          } catch (error) {
            console.log(error)
          }
        }
        addOrders(id, data, address)
        if (res) {
          let mydata = []
          dispatch(addToCart(id, mydata))
        }
      },
      prefill: {
        name: 'userName',
        email: userData?.email,
        contact: '8496080933',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    }
    const rzpay = new Razorpay(options)
    rzpay.open()
  }, [Razorpay])

  const order = (id, data, address) => {
    // removed one function no need of parameters
    handlePayment()
  }

  //handling cash on delivery modal
  let timeoutId
  const handleCashOn = () => {
    setShowModal(true)
    //adding to the orders
    const addOrders = async (id, cartData, address) => {
      try {
        const sameId = Date.now() + id
        let res = await setDoc(doc(db, 'orders', sameId), {
          cart: cartData, // this should be array of objects cart
          userId: id, //"userId which you get from authreducer",
          address: address,
          timestamp: Date.now(), // this can be used for sorting
          orderId: sameId,
          status: 'pending',
        })
      } catch (error) {
        console.log(error)
      }
    }
    addOrders(id, data, address)
    let mydata = []
    dispatch(addToCart(id, mydata))
    timeoutId = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          setShowModal(false)
          navigate('/')
          clearInterval(timeoutId)
        }
        console.log(prev)
        return prev - 1
      })
    }, 1000)
  }

  return (
    <div>
      <Navbar />
      <div className='App'>
        <Grid className='cart_grid' m='10' gap={5}>
          <GridItem width={'100%'} padding={5}>
            <h1 style={{ fontWeight: 'bold', padding: '5px' }}>
              Select Delivery Address
            </h1>
            <Box boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} padding={5}>
              <Flex>
                <Radio defaultChecked mr={'10px'} value='1'></Radio>
                <Box>
                  <Text>{address.name} </Text>
                  <Text fontSize={'12px'}>{address.other}</Text>
                  <Text fontSize={'12px'}>{address.city}</Text>
                  <Text fontSize={'12px'}>{address.number}</Text>
                </Box>
              </Flex>
            </Box>
            <Box boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} padding={5}>
              <Button
                borderRadius={'0%'}
                color={'#ef506a'}
                backgroundColor={'white'}
              >
                ADD NEW ADDRESS
              </Button>
            </Box>
          </GridItem>
          <GridItem width={'100%'}>
            <h1
              style={{ fontWeight: 'bold', fontSize: '12px', padding: '10px' }}
            >
              DELIVERY ESTIMATES
            </h1>
            {data.map((item) => {
              return (
                <Flex gap={5} padding={3} key={item.id}>
                  <Image src={item.images} w={'50px'} h={'50px'} />
                  <Text fontSize={'12px'}>Estimated Delivery By 4 march</Text>
                </Flex>
              )
            })}
            <Box padding={5}>
              <h1 style={{ fontSize: '12px', fontWeight: 'bold' }}>
                Price Details ({data.length}-items)
              </h1>
              <Flex justifyContent={'space-between'} mt={2}>
                <p style={{ fontSize: '12px' }}>ToTal MRP</p>
                <p
                  style={{
                    fontSize: '12px',
                    padding: '10px',
                    marginLeft: '150px',
                  }}
                >
                  Rs. {value}
                </p>
                <hr />
              </Flex>
              <hr style={{ marginRight: '100px' }} />
              <Flex justifyContent={'space-between'} mt={2}>
                <p style={{ fontSize: '12px' }}>Discount on MRP</p>
                <p
                  style={{
                    fontSize: '12px',
                    padding: '10px',
                    marginLeft: '120px',
                  }}
                >
                  Rs. {offerValue}
                </p>
                <hr />
              </Flex>
              <hr style={{ marginRight: '100px' }} />
              <Flex justifyContent={'space-between'} mt={2}>
                <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  Total Ammount
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    padding: '10px',
                    marginLeft: '120px',
                    fontWeight: 'bold',
                  }}
                >
                  Rs. {finalAmount}
                </p>
                <hr />
              </Flex>
              <Button
                onClick={() => order(id, data, address)}
                isDisabled={data.length === 0}
                width={['100%', '80%']}
                colorScheme='pink'
              >
                Pay Now
              </Button>
              <Text textAlign={'center'} my={'1rem'} width={['100%', '80%']}>
                Or
              </Text>
              <Button
                isDisabled={data.length === 0}
                onClick={handleCashOn}
                width={['100%', '80%']}
                colorScheme='pink'
              >
                Cash on Delivery
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </div>
      <Flex
        pos={'fixed'}
        display={showModal ? 'Flex' : 'none'}
        top='0'
        width='100vw'
        height={'100vh'}
        bg={'gray.300'}
        zIndex={'2'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Flex
          justify={'center'}
          width={{ base: '320px', md: '500px' }}
          pos={'relative'}
        >
          <Image
            src='https://assets.materialup.com/uploads/9ba2d687-d7d3-4361-8aee-7b2a3c074761/preview.gif'
            borderRadius={'xl'}
            width={'100%'}
          />
          <Box position={'absolute'} top='0' zIndex={'3'}>
            <Text
              textAlign={'center'}
              fontSize={'1.4rem'}
              color={'white'}
              fontWeight={'700'}
              mt={{ base: '5px', md: '1rem' }}
            >
              Order Placed
            </Text>
          </Box>
          <Text
            textAlign={'center'}
            color={'white'}
            pos={'absolute'}
            bottom={'0'}
          >
            Redirecting you back home in {count}
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </div>
  )
}
