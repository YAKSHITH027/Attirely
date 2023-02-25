import React, { useState,useEffect } from 'react';
// import axios from "axios";
import { grid, Select } from '@chakra-ui/react';
import SingleAdminProd from "./SingleAdminProd";



const ProductsAdmin = () => {
  const [option, setOption]= useState("MensData");
  const [ProdData, setProdData] = useState([]);


  
    const getAdminProductsData= async() =>{
        try {
          let res = await fetch(`https://rc201-jsondata-serverapi.onrender.com/${option}`);
          let data = await res.json(); 
          console.log(data, "data fetched");
          setProdData(data);
          
        } catch (error) {
          console.log(error);
        }
    }

      
    useEffect(()=>{
      getAdminProductsData();
    },[option]);

    
    
    console.log(ProdData,"proddata");
    return (
    <div>
   
   
    <div>
    <Select value={option} placeholder='Select option' onChange={e=>setOption(e.target.value)}>
  <option   value='MensData'>Mens Products</option>
  <option value='WomensData '>Womens Products</option>
  <option value='ChildrensData '>Childrens Products</option>
  <option value='orders '>Orders</option>
      </Select>
    </div>
  
    <br/>
   
   
    <div>
    {ProdData.map((el)=>(
  
      
  <SingleAdminProd  key={el.id} props={el}/>


))}
    </div>
   
    
    </div>
  )
}

export default ProductsAdmin
