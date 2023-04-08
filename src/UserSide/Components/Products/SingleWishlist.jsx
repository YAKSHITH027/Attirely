import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SingleProductImageSlider from './SingleProductImageSlider'

const SingleWishlist = ({
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
  return (
    <Box
      className='shadow'
      transition={'all 0.3s'}
      height={{ base: '350px', md: '400px' }}
      width={{ base: '150px', md: '210px' }}
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
      <Flex justify={'space-between'}>
        <Button colorScheme='pink' size={'sm'}>
          Add to Cart
        </Button>
        <Button variant={'outline'} colorScheme='red' size='sm'>
          Remove
        </Button>
      </Flex>
    </Box>
  )
}

export default SingleWishlist
