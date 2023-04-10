import React from 'react'
import Navbar from '../../Components/Home/Navbar'
import {
  Box,
  Button,
  Flex,
  Grid,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react'
import Footer from '../../Components/Home/Footer'
import SingleWishlist from '../../Components/Products/SingleWishlist'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Wishlist = () => {
  const userData = useSelector((store) => {
    return store.userAuthReducer.user
  })
  const navigate = useNavigate()
  //userId
  const id = userData?.uid

  const { wishlist: data, isLoading } = useSelector((store) => {
    return store.wishlistReducer
  })
  console.log(data, isLoading)

  return (
    <>
      <Navbar />
      <Box minH={'70vh'} pos={'relative'}>
        <Grid
          borderBottomWidth={'1px'}
          templateColumns={{
            base: 'repeat(2,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)',
            xl: 'repeat(4,1fr)',
            '1xl': 'repeat(5,1fr)',
          }}
          p={{ base: '5px', md: '1.5rem' }}
          minHeight={'80vh'}
          rowGap={{ base: '0.8rem', md: '2rem' }}
          justifyItems={'center'}
        >
          {isLoading ? (
            [...Array(5).keys()].map((item) => {
              return (
                <Stack key={item}>
                  <Skeleton
                    height={{ base: '210px', md: '280px' }}
                    width={{ base: '150px', md: '210px' }}
                    borderRadius={'sm'}
                  />
                  <Skeleton height='16px' borderRadius={'sm'} />
                  <Skeleton height='16px' borderRadius={'sm'} />
                  <Skeleton height='16px' borderRadius={'sm'} />

                  <Flex justifyContent={'space-between'}>
                    <Skeleton height='30px' width='5rem' borderRadius={'sm'} />
                    <Skeleton height='30px' width='5rem' borderRadius={'sm'} />
                  </Flex>
                </Stack>
              )
            })
          ) : data.length ? (
            data?.map((item) => {
              return <SingleWishlist key={item.id} {...item} />
            })
          ) : (
            <Flex
              width={'full'}
              flexDir={'column'}
              pos={'absolute'}
              paddingTop={'3rem'}
              color={'gray.500'}
              justify={'center'}
              align={'center'}
            >
              <Text textAlign={'center'} fontSize={'1.5rem'}>
                There are no products in your wishlist
              </Text>
              <Button
                mt={'2rem'}
                px='2rem'
                colorScheme='pink'
                onClick={() => {
                  navigate('/product/MensData')
                }}
              >
                Browse Products
              </Button>
            </Flex>
          )}
          {}
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default Wishlist
