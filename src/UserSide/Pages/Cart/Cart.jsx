import { Button, Center, Grid, GridItem, Input, Text } from '@chakra-ui/react'
import React from 'react'
import css from "./cart.css"
const Cart = () => {
  return (
    <Center w="100vw">
          <Grid className="cart_grid" m="10">
              <GridItem w={"60%"} >
                <div style={{border:"1px solid grey",padding:"15px",display:"flex"}}>
                   <p>Deliver to: <h1>SUDHIR MANOHARRAo NANDANE at post Bharaswda TA Ashti Dist Wardha </h1></p>
                   <Button  colorScheme='pink'>Change Address</Button>
                </div>
              </GridItem>
               <GridItem w={"30%"} >
               
               
               
               
              </GridItem>
             
          </Grid>
        </Center>
  )
}

export default Cart