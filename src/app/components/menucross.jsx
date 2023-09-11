"use client"
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
 
  import styles from "../styles/menucross.module.css";
  import { Roboto } from "next/font/google";
  const  roboto =  Roboto({
    weight: "400",
    subsets: ["latin"],
  });
  import Toolbar from "@mui/material/Toolbar";
const Menucross = (props) => {
    return (  
        <div style={{color:'black'}}>
          <ListItem button>
            <ListItemIcon>
              <Image
                src="/trackorder.svg"
                width={26}
                height={26}
                alt="Track Real-Time Order"
              />
            </ListItemIcon>
            <ListItemText>Track Real-Time Order</ListItemText>
          </ListItem>
         <ListItem button>
            <ListItemIcon>
              <Image src="/favoriteblue.svg" width={26} height={26} alt="Home" />
            </ListItemIcon>
            <ListItemText>Favorites</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Image src="./box.svg" width={26} height={26} alt="Your Orders" />
            </ListItemIcon>
            <ListItemText>Your Orders </ListItemText>
          </ListItem>
        
          <ListItem button>
            <ListItemIcon>
              <Image src="./orderhistory.svg" width={26} height={26} alt="Order History" />
            </ListItemIcon>
            <ListItemText>Order History</ListItemText>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemIcon>
              <Image src="./coupon.svg" width={26} height={26} alt="Coupon" />
            </ListItemIcon>
            <ListItemText>Coupon</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Image src="./gift.svg" width={26} height={26} alt="Gifts" />
            </ListItemIcon>
            <ListItemText>Gifts</ListItemText>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemIcon>
              <Image
                src="./freed.svg"
                width={26}
                height={26}
                alt="Share and Get Free Delivery"
              />
            </ListItemIcon>
            <ListItemText>Share and Get Free Delivery</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Image
                src="./shareearn.svg"
                width={26}
                height={26}
                alt="Share and Earn"
              />
            </ListItemIcon>
            <ListItemText>Share and Earn</ListItemText>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemIcon>
              <Image src="./call.svg" width={26} height={26} alt="Call Us" />
            </ListItemIcon>
            <ListItemText>Call Us</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Image
                src="./chat2.svg"
                width={26}
                height={26}
                alt="Chat with Us"
              />
            </ListItemIcon>
            <ListItemText>Chat with Us</ListItemText>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemIcon>
              <Image
                src="./settings.svg"
                width={26}
                height={26}
                alt="Settings"
              />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemIcon>
              <Image
                src="./help.svg"
                width={26}
                height={26}
                alt="Help"
              />
            </ListItemIcon>
            <ListItemText>Help</ListItemText>
          </ListItem>
       
          {/* <div className={roboto.className}>
          <div className={styles.enddrawer}>
          <a className={styles.anchor}>About</a>
          <a className={styles.anchors}>Contact Us</a>
          <a className={styles.anchor}>Advertise</a>
          </div>

          <div className={styles.enddrawer}>
          <a className={styles.anchor}>Terms</a>
          <a className={styles.anchor}>Privacy</a>
          <a className={styles.anchors}>Policy & Safety</a>
          <br/>
          <a className={styles.anchor}>How Streets Foods works</a>
          </div>
          <a className={styles.anchorc} {...props}>
        {'©  '}
        {new Date().getFullYear()}
        {'      '}
        <a className={styles.anchor}  href="https://streetsfoods.in">STREETS FOODS</a>
       {' '}
      </a> */}
    
        {/* </div> */}
        <Toolbar/>
        </div>
    );
}
 
export default Menucross;