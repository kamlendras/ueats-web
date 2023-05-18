import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "../styles/Cart.module.css"
import Image from 'next/image';
import Button from '@mui/material/Button';
const Cart = () => {
  return ( 
   <div style={{whiteSpace:'nowrap', overflow:'hidden'}}>
    
    <Button fullWidth  autoFocus variant="contained" style={{boderRadius:'10rem'}}>
    <Image
      src="/Baskets.svg"
      width={26}
      height={26}
      alt="Cart"
      style={{marginRight:'1rem'}}
    />    O carts
          </Button>
          </div>
   );
}
 
export default Cart;
