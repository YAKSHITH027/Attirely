import React, { useState,useEffect } from 'react';
// import axios from "axios";
import { Grid, GridItem, Select, Box } from '@chakra-ui/react';
import SingleAdminProd from "./SingleAdminProd";
import axios from "axios";



const ProductsAdmin = () => {
  const [option, setOption]= useState("MensData");
  const [ProdData, setProdData] = useState([]);
  // const [postsPerPage, setPostPerPage] = useState(15);
  // const [currPage, setCurrPage]= useState(1);



  // const indexOfLastPost = currPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currProdData= ProdData.slice(indexOfFirstPost, indexOfLastPost); 
  
    const getAdminProductsData= async() =>{
        try {
          let res = await axios.get(`https://rc201-jsondata-serverapi.onrender.com/${option}`);
          console.log(res);
          console.log(res.data, "data fetched");
          setProdData(res.data);
          
        } catch (error) {
          console.log(error);
        }
    }

      
    useEffect(()=>{
      getAdminProductsData();
    },[option]);

    
    
    console.log(ProdData,"proddata");
    return (
    <>
    
   
  <Box border='1px' borderColor='black'>
    <Select value={option} placeholder='Select option' onChange={e=>setOption(e.target.value)}>
         <option   value='MensData'>Mens Products</option>
         <option value='WomensData '>Womens Products</option>
         <option value='ChildrensData '>Childrens Products</option>
          <option value='orders '>Orders</option>
     </Select>

    </Box>
    
   
    
  
    <br/>
   
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {ProdData.map((item)=>{
                return(
                    <GridItem key={item.id}>
                <SingleAdminProd props={item}/>
            </GridItem>
                )  
        })}
       </Grid>
    
    

    </>
  )
}

export default ProductsAdmin
