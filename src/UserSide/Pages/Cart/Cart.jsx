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
  useToast,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsTag } from 'react-icons/bs'
import { CiPercent } from 'react-icons/ci'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdMoreTime } from 'react-icons/md'
import gift from './gift.png'
import css from './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  addcart,
  getCart,
  cartQttChange,
} from '../../../Redux/Cart/cart.actions'
import { json, Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Home/Navbar'
import Footer from '../../Components/Home/Footer'
import Payment from '../Payment/Paymet'
const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [address, setaddres] = useState(
    JSON.parse(localStorage.getItem('userAddress')) || {
      name: '',
      city: '',
      other: '',
      number: '',
    }
  )
  const toast = useToast()
  const navigate = useNavigate()
  const userData = useSelector((store) => {
    return store.userAuthReducer.user
  })

  const id = userData?.uid

  const data = useSelector((store) => {
    return store.cartReducer.cart
  })
  console.log(data)
  useEffect(() => {
    if (id) {
      dispatch(getCart(id))
    }
  }, [])

  // delet logic ***************************

  const handledelet = (el) => {
    const filterdata = data.filter((t) => t.id != el.id)

    dispatch(addToCart(id, filterdata))
  }
  // login of cart ********************************
  let value = 0
  let offerValue = 0
  data.map((el) => {
    offerValue += Number(el.offerPrice) * el.qtt
    return (value = value + Number(el.originalPrice) * el.qtt)
  })
  const finalAmount = offerValue
  offerValue = value - offerValue

  const handleAddress = (e) => {
    let x = e.target.name
    setaddres({ ...address, [x]: e.target.value })
  }
  // handling address
  const handlePlace = () => {
    const { name, number, other, city } = address
    if (
      name.length > 2 &&
      number.length > 9 &&
      other.length > 3 &&
      city.length > 2
    ) {
      navigate('/payment')
    } else {
      onOpen()
      toast({
        title: 'Please Enter Valid Address',
        description: 'check your details',
        status: 'error',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
    }
  }

  const handleChangeQtt = (prodId, qtt) => {
    let newData = data.map((item) => {
      if (item.id == prodId) {
        return { ...item, qtt: qtt }
      }
      return item
    })
    dispatch(addToCart(id, newData))
  }

  // *****************************************
  let cartQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div>
      <Navbar />
      <Center w={'100%'}>
        <Grid className='cart_grid' m='5' gap={4}>
          <GridItem width={'100%'}>
            <Flex
              style={{
                padding: '15px',
                boxShadow:
                  'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
              }}
              justifyContent={'space-between'}
            >
              <Box>
                <p>{address.name}</p>
                <p style={{ fontSize: '14px' }}>{address.other}</p>
                <p style={{ fontSize: '14px' }}>{address.city}</p>
                <p style={{ fontSize: '14px' }}>{address.number}</p>
              </Box>

              <Button
                onClick={onOpen}
                fontSize='10px'
                ml={'3%'}
                width={{ base: '50%', sm: '50%', md: '25%' }}
                borderRadius={'0%'}
                border={'1px solid #ef506a'}
                colorScheme='white'
                color={'#ef506a'}
                w={'auto'}
                h={'35px'}
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
                      <FormControl isRequired>
                        <Input
                          placeholder='Name'
                          name='name'
                          value={address.name}
                          onChange={handleAddress}
                        />
                        <Input
                          mt={5}
                          placeholder='Address'
                          name='other'
                          value={address.other}
                          onChange={handleAddress}
                        />
                        <Input
                          mt={5}
                          placeholder='city'
                          name='city'
                          value={address.city}
                          onChange={handleAddress}
                        />
                        <Input
                          mt={5}
                          placeholder='Mob No'
                          type={'number'}
                          name='number'
                          value={address.number}
                          onChange={handleAddress}
                        />
                      </FormControl>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      width={'full'}
                      backgroundColor={'#ef506a'}
                      mr={3}
                      onClick={() => {
                        onClose()
                        localStorage.setItem(
                          'userAddress',
                          JSON.stringify(address)
                        )
                      }}
                    >
                      ADD ADDRESS
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
            <div
              style={{
                marginTop: '10px',
                padding: '15px',
                boxShadow:
                  'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
              }}
            >
              <Flex gap={3}>
                {' '}
                <CiPercent />
                <h1 style={{ fontSize: '14px' }}>Avilable Offers</h1>
              </Flex>
              <div>
                <p style={{ fontSize: '14px' }}>
                  10% Instant Discount on YES Bank Credit Cards on a min spend
                  of Rs 3,000. TCA
                </p>
                <p style={{ fontSize: '14px' }}>
                  Get up to Rs 500 Cashback on CRED Pay UPI (Android Devices
                  only) on a min spend of Rs 500. TCA
                </p>
                <p style={{ fontSize: '14px' }}>
                  Get up to Rs 500 Cashback on CRED Pay UPI (Android Devices
                  only) on a min spend of Rs 500. TCA
                </p>
                <p style={{ fontSize: '14px' }}>
                  5% Cashback up to Rs 1000 on Paytm Postpaid Transactions on a
                  min spend of Rs 1,500. TCA
                </p>
                <p style={{ fontSize: '14px' }}>
                  <span>
                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                  </span>
                </p>
              </div>
            </div>
            <div
              style={{
                marginTop: '10px',
                padding: '15px',
                boxShadow:
                  'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
              }}
            >
              <Flex>
                <TbTruckDelivery />
                <p style={{ fontSize: '12px' }}>
                  Yeh ! No Convinience fee for this Order
                </p>
              </Flex>
            </div>
            <Grid gap={2} mt={'10px'}>
              {data?.map((el) => {
                return (
                  <Flex
                    key={el.id}
                    justifyContent={'space-between'}
                    boxShadow={
                      'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                    }
                    padding={2}
                  >
                    <Flex gap={2}>
                      <Image h={'100px'} src={el.images[0]} />

                      <Box>
                        <Text>{el.brand}</Text>
                        <p style={{ fontSize: '12px' }}>{el.title}</p>
                        <Flex gap={2}>
                          <Select
                            w={'80px'}
                            style={{ fontSize: '12px' }}
                            h={'20px'}
                            borderRadius={'0%'}
                            placeholder='size'
                          >
                            {el?.size?.map((el) => {
                              return <option value={el}>{el}</option>
                            })}
                          </Select>
                          <Select
                            w={'80px'}
                            h={'20px'}
                            style={{ fontSize: '12px' }}
                            onChange={(e) =>
                              handleChangeQtt(el.id, +e.target.value)
                            }
                            borderRadius={'0%'}
                            placeholder='Quantity'
                          >
                            {cartQuantity?.map((el) => {
                              return <option value={el}>{el}</option>
                            })}
                          </Select>
                        </Flex>
                        <Flex py='0.4rem'>
                          <Text fontSize={'0.9rem'} pr={'0.5rem'}>
                            ₹{el.offerPrice}
                          </Text>
                          <Text
                            textDecoration={'line-through'}
                            fontSize={'0.9rem'}
                            color='gray.400'
                          >
                            ₹{el.originalPrice}
                          </Text>
                        </Flex>

                        <Flex>
                          <MdMoreTime />{' '}
                          <p style={{ fontSize: '10px' }}>
                            {' '}
                            14 Days return Avilalble
                          </p>
                        </Flex>
                      </Box>
                    </Flex>
                    <Button
                      backgroundColor={'#ffffff'}
                      onClick={() => handledelet(el)}
                    >
                      x
                    </Button>
                  </Flex>
                )
              })}
            </Grid>
          </GridItem>
          <GridItem width={'100%'}>
            <div
              style={{
                padding: '15px',
                display: 'flex',
                gap: '2%',
                boxShadow: ' rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
              }}
            >
              <p>Coupons</p>
              <div>
                <BsTag />
              </div>
              <div>
                <h1 style={{ fontSize: '10px' }}>1 Coupon Applied</h1>
                <p style={{ fontSize: '10px' }}>You save Addiotiona 200</p>
              </div>
              <div>
                <Button
                  style={{ fontSize: '12px' }}
                  borderRadius={'0%'}
                  border={'1px solid #ef506a'}
                  colorScheme='white'
                  color={'#ef506a'}
                  w={'80px'}
                  h={'35px'}
                >
                  Edit
                </Button>
              </div>
            </div>
            <div style={{ paddingTop: '10px' }}>
              <p style={{ fontSize: '10px', padding: '2px' }}>
                GIFTING AND PERSONILAZATION
              </p>
              <img src={gift} alt='ytyr' height={'150px'} />
            </div>
            <Checkbox mt={2} defaultChecked>
              Support Us
            </Checkbox>
            <Flex mt={2} gap={2}>
              <Button
                borderRadius={'100px'}
                fontSize={'12px'}
                variant='outline'
              >
                {' '}
                Rs 10{' '}
              </Button>
              <Button
                borderRadius={'100px'}
                fontSize={'12px'}
                variant='outline'
              >
                {' '}
                Rs 20{' '}
              </Button>
              <Button
                borderRadius={'100px'}
                fontSize={'12px'}
                variant='outline'
              >
                {' '}
                Rs 30{' '}
              </Button>
              <Button
                borderRadius={'100px'}
                fontSize={'12px'}
                variant='outline'
              >
                {' '}
                other{' '}
              </Button>
            </Flex>

            <Box padding={15}>
              <hr style={{ padding: '10px', marginRight: '100px' }} />
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
                width={['100%', '80%']}
                borderRadius={'0%'}
                color={'white'}
                isDisabled={data.length == 0 ? true : false}
                backgroundColor={'#ef506a'}
                onClick={handlePlace}
              >
                Place Order
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Center>
      <Footer />
    </div>
  )
}

export default Cart
