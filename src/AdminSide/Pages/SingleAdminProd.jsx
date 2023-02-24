import {
    Box,
    chakra,
    Center,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  
  export default function SingleAdminProd({props}) {
    
    // let arr = new Array(props.size.length).fill(props.size);
    // console.log(arr); 
    
    
    
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                    props.images[0]
            }
            //   fit={'30%'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {props.brand}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                Offer Price - ₹{props.offerPrice}/-
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                    {props.title}
                </Text>
                <Text fontSize={'lg'}>
                  {props.discount} Off || 
                  Original Price - ₹{props.originalPrice}/- 
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  textAlign={'center'}
                  mb={'4'}>
                  Statistics 
                </Text>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue("black")}
                  fontWeight={'500'}
                  
                  textAlign={'center'}
                  mb={'4'}>
                  Quantity - {props.quantity}
                </Text>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue("black")}
                  fontWeight={'500'}
                  
                  textAlign={'center'}
                  mb={'4'}>
                  Rating - {props.rating}
                </Text>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue("black")}
                  fontWeight={'500'}
                  
                  textAlign={'center'}
                  mb={'4'}>
                  Rating Count - {props.ratingCount}
                </Text>
  
                
              </Box>
              <Center>

              
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  textAlign={'center'}
                  mb={'4'}>
                  Product Details
                </Text>
              <Center>

              
                <List  spacing={2}>
                  <ListItem>
                    <Text textAlign={'center'} as={'span'} fontWeight={'bold'}>
                      Category - 
                    </Text>{' '}
                    {props.category}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Sub Category - 
                    </Text>{' '}
                    {props.subCategory}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Size - 
                    </Text>{' '}
                   {props.size}
                  </ListItem>
                </List>
                </Center>
              </Box>
              </Center>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text> {Math.floor(Math.random()*10)} business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }