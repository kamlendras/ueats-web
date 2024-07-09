"use client";
import { useState, useCallback, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Bebas_Neue } from "next/font/google";
import Drawer from "@mui/material/Drawer";
import Image from 'next/image'
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "./cavatar";
import Notifications from "./cnotifications";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import styles from "../styles/navbar.module.css";
import Link from "@mui/material/Link";
import Menu from "./menucross";
import Cart from "./cart";
import Mavatar from "./avatar";
import Grid from "@mui/material/Grid";
import Mnotifications from "./notifications";
import CssBaseline from "@mui/material/CssBaseline";
import Dialog from "./language/dialog";
import Search from "./search"
import Location from "./location"
const bebas_Neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};
const AppBar1 = (props) => {
  const [open, setOpen] = useState(false);
  const isBreakpoint = useMediaQuery(768);
  return (
    <>
      <AppBar elevation={0} >
        <CssBaseline />
        <Toolbar>
          {isBreakpoint ? (
            <></>
          ) : (
            <>
            
              <IconButton
                size='small'
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setOpen(true)}
                color="inherit"
              >
                <MenuIcon id='black' 
                />
              </IconButton>
            </>
          )}

          <Typography component="div" sx={{ flexGrow: 1 }}>
            <h1
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                color: "black",
                marginTop: "0.4rem",
              }}
              className={bebas_Neue.className}
            >
                <Image
      src="/ueats.png"
      width={250}
      height={68}
      alt="Picture of the author"
    />
            </h1>
          </Typography>
        
       
         
          {isBreakpoint ? (
            <>
    
            
            {/* <Mnotifications />  */}
            <Dialog/><Mavatar />
            </>
          ) : (
           <>
           <Search/>
           <Location/>
           <Mavatar />
             <Dialog/>
              <Cart/> 
             
             
            </>
          )}
        
        </Toolbar>
      </AppBar>
   
    
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        <div style={{ width: "18rem" }}>
        
          <Menu />
        </div>
      </Drawer>
    </>
  );
};

export default AppBar1;
