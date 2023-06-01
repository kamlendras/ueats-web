import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "../styles/Cart.module.css"
import Image from 'next/image';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useState, useCallback, useEffect } from "react";
import Box from '@mui/material/Box';
import CartCross from './CartCross';
const Cart = () => {
  const [open, setOpen] = useState(false);
  return ( 

    <>
   <div style={{whiteSpace:'nowrap', overflow:'hidden'}}>
  

    <Button fullWidth  autoFocus variant="contained" style={{boderRadius:'10rem'}}  onClick={() => setOpen(true)}>
    <Image
      src="/Baskets.svg"
      width={26}
      height={26}
      alt="Cart"
      style={{marginRight:'1rem'}}
    />    O carts
          </Button>
         
   
          </div>
          <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        <div style={{ width: "20rem" }}>
        
     <CartCross/>
        </div>
      </Drawer>
          </>
   );
}
 
export default Cart;
