import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { BsPerson } from 'react-icons/bs';
  import { HiShoppingBag } from 'react-icons/hi';
  import { TfiShoppingCartFull } from 'react-icons/tfi';
  
  
  function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('white', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
        <>
        <Box fontFamily={"Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"} maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        
        <SimpleGrid columns={{ base: 1, md: 1 ,lg:3}}  spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Users'}
            stat={'1,000'}    //MAPED USER NUMBER
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Total Orders'}
            stat={'500'}   
            icon={<HiShoppingBag size={'3em'} />}
          />
          <StatsCard
            title={'Total Products'}
            stat={'3,000'} //MAPED TOTAL INVENTORY PRODUCTS NUMBER 
            icon={<TfiShoppingCartFull size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
        </>
      
    );
  }