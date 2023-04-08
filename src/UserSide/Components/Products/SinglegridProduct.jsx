import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Grid, Text } from '@chakra-ui/layout'

import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import SingleProductImageSlider from './SingleProductImageSlider'

const SinglegridProduct = ({
  id,
  brand,
  images,
  title,
  offerPrice,
  originalPrice,
  discount,
  rating,
  ratingCount,
  products,
}) => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const handleClick = (e) => {
    if (e.target.closest('.wishlistBtn')) {
      console.log('button clicked')
      return
    }
    navigate(`/product/${products}/${id}`)
  }
  return (
    <Box
      onClick={handleClick}
      className='shadow'
      transition={'all 0.3s'}
      height={{ base: '300px', md: '350px' }}
      width={{ base: '150px', md: '210px' }}
      onMouseEnter={() => {
        setShow(true)
      }}
      onMouseLeave={() => {
        setShow(false)
      }}
    >
      <Box>
        <SingleProductImageSlider
          images={images}
          rating={rating}
          ratingCount={ratingCount}
        />
      </Box>
      <Box px='0px' py='9px' bg='white'>
        <Text
          fontWeight={'600'}
          fontSize='0.94rem'
          pl='10px'
          width='100%'
          overflow={'hidden'}
          whiteSpace='nowrap'
          textOverflow={'ellipsis'}
        >
          {brand}
        </Text>
        <Box position={'relative'} bg='white'>
          <Text
            fontSize={'0.9rem'}
            color='gray.700'
            pl='10px'
            width='100%'
            overflow={'hidden'}
            whiteSpace='nowrap'
            textOverflow={'ellipsis'}
          >
            {title.substring(0, 30)}
          </Text>
          <Flex
            height={!show && '0'}
            className='wishlistlayer'
            flexDir={'column'}
            align='center'
            position={'absolute'}
            py={'1rem'}
            pb='0'
            bottom={'0'}
            bg='white'
            width={'full'}
            zIndex={show ? '1' : '-100'}
          >
            <Flex justify={'center'} align='center' display={!show && 'none'}>
              <Button
                variant={'unstyled'}
                className='wishlistBtn'
                width={{ base: '9rem', md: '11.5rem' }}
                outline={'1px solid grey'}
              >
                {' '}
                <Flex align={'center'} justify='center'>
                  <AiOutlineHeart fontSize={'1.5rem'} color='grey' />
                  <Text pl={'0.5rem'} color='gray.600'>
                    Wishlist
                  </Text>
                </Flex>
              </Button>
            </Flex>
            <Text
              width={'100%'}
              fontSize='0.9rem'
              my={'6px'}
              pl='1rem'
              display={!show && 'none'}
            >
              Sizes L
            </Text>
          </Flex>
        </Box>
        <Text fontWeight={'bold'} fontSize='0.84rem' my='0.1rem' pl='10px'>
          Rs. {offerPrice || 456}{' '}
          <Text
            as='span'
            textDecoration={'line-through'}
            fontWeight='300'
            fontSize='0.8rem'
          >
            Rs.{originalPrice}
          </Text>
          <Text as='span' color={'pink.400'} fontSize='0.7rem' px='4px'>
            ({discount || '54%'}off)
          </Text>
        </Text>
      </Box>
    </Box>
  )
}

export default SinglegridProduct
