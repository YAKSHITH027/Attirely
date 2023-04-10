import { Image } from '@chakra-ui/image'
import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'
import { collection, getDocs, query, where } from '@firebase/firestore'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../../../lib/firebase'
import Navbar from '../../Components/Home/Navbar'

const Profile = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setLoading] = useState(false)
  const userData = useSelector((store) => {
    return store.userAuthReducer.user
  })

  const id = userData?.uid
  const orderAPI = async (id) => {
    try {
      setLoading(true)
      const orderRef = collection(db, 'orders')
      const q = query(orderRef, where('userId', '==', id))
      const querySnapshot = await getDocs(q)
      let result = []
      querySnapshot.forEach((doc) => {
        result.push(doc.data())
      })

      setLoading(false)
      setOrders(result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    orderAPI(id)
  }, [])

  return (
    <div>
      <Navbar />
      <Flex
        width='95vw'
        mx='auto'
        mt='2rem'
        gap='3'
        height={'80vh'}
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Box
          borderWidth={'1px'}
          width={{ base: '95%', md: '20%' }}
          mx='auto'
          height={'full'}
          textAlign='center'
        >
          <Badge
            variant='solid'
            fontSize={'1.5rem'}
            colorScheme='green'
            my='1rem'
          >
            USER INFO
          </Badge>
          <Badge> UserId: {userData.uid}</Badge>
          <Text py='1rem'>Email : {userData.email}</Text>
        </Box>
        <Box
          borderWidth={'1px'}
          p={{ base: '4px', md: '2rem' }}
          width={{ base: '100%', md: '76%' }}
          height={'100%'}
          overflow='auto'
          mb={'5rem'}
        >
          <Heading textAlign={'center'}>Your orders</Heading>
          {/* <Flex flexDir={"column"} py="1rem" gap="3">
            <Skeleton height="4rem"></Skeleton>
            <Skeleton height="4rem"></Skeleton>
            <Skeleton height="4rem"></Skeleton>
            <Skeleton height="4rem"></Skeleton>
          </Flex> */}
          <Flex flexDir={'column'} gap='7'>
            {isLoading ? (
              <Flex flexDir={'column'} py='1rem' gap='3'>
                <Skeleton height='4rem'></Skeleton>
                <Skeleton height='4rem'></Skeleton>
                <Skeleton height='4rem'></Skeleton>
                <Skeleton height='4rem'></Skeleton>
              </Flex>
            ) : orders.length == 0 ? (
              <Flex flexDir={'column'} justify={'center'} align='center'>
                <Text textTransform={'capitalize'} fontSize='1.4rem' py='2rem'>
                  You haven't made any orders till now
                </Text>
                <Image
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vxcXbyvy5JHHV_7wMO_HQv-j6aZxX0I5MA&usqp=CAU'
                  width={{ base: '300px', md: '500px' }}
                />
              </Flex>
            ) : (
              orders
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((item) => {
                  return (
                    <Box
                      key={item.timestamp}
                      borderWidth='2px'
                      p={{ base: '0', md: '1rem' }}
                      overflow={'auto'}
                    >
                      <Badge fontSize={'1rem'}> orderId: {item.orderId}</Badge>
                      <Flex
                        gap='9'
                        justify={'space-between'}
                        py='1rem'
                        minW={'1000px'}
                      >
                        <Text width='50%'>Name : {item.address.name}</Text>
                        <Text>City: {item.address.city}</Text>
                        {item.status == 'pending' ? (
                          <Badge fontSize={'0.9rem'} colorScheme={'yellow'}>
                            Order Status: {item.status}
                          </Badge>
                        ) : (
                          <Badge colorScheme={'green'}>
                            Order Status: {item.status}
                          </Badge>
                        )}
                      </Flex>
                      <Flex flexDir={'column'} gap='5'>
                        {item.cart.map((item22, i) => {
                          var date = item.timestamp
                          var d = new Date(date)
                          var ds = d.toLocaleString()
                          return (
                            <Flex
                              key={item22.id}
                              gap='9'
                              align={'center'}
                              borderWidth='1px'
                              px='1rem'
                              py='0.2rem'
                              minW={'1000px'}
                            >
                              <Box> item: {i + 1}</Box>
                              <Box>
                                <Image src={item22.images[0]} width='40px' />
                              </Box>
                              <Box width='10rem'>
                                {item22.brand.substring(0, 15)}
                              </Box>
                              <Flex gap='3'>
                                <Text>Price: ₹{item22.offerPrice}</Text>
                                <Text>Quantity: {item22.qtt}</Text>
                              </Flex>
                              <Box ml='5rem'>ordered on : {ds}</Box>
                            </Flex>
                          )
                        })}
                      </Flex>
                    </Box>
                  )
                })
            )}
          </Flex>
        </Box>
      </Flex>
    </div>
  )
}

export default Profile
