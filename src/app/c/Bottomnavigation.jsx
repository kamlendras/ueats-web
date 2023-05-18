'use client';
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from '@mui/icons-material/Menu';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useRouter } from 'next/navigation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { black } from '@mui/material/colors';
const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});



export default function LabelBottomNavigation() {
    const router = useRouter()
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Mnavbar">
        <ThemeProvider theme={outerTheme}>
      <BottomNavigation   showLabels value={value} onChange={handleChange}>
   
        <BottomNavigationAction 
          label="Home"
          value="Home"
          onClick={() => router.push('/')}
          icon={ <HomeRoundedIcon/>}
        />
         
        <BottomNavigationAction 
       
          label="Browse"
          value="Search"
          onClick={() => router.push('/search')}
          icon={ <ManageSearchRoundedIcon/>}
      />
      
      <BottomNavigationAction 
          label="Safe"
          value="Safe"
          onClick={() => router.push('/safe')}
          icon={ <HealthAndSafetyRoundedIcon/>}
      />
        <BottomNavigationAction
          label="Cart"
          value="Cart"
          onClick={() => router.push('/cart')}
          icon={<ShoppingCartRoundedIcon
          
          />}

        />
      
        
        <BottomNavigationAction  
          label="Menu"
          value="folder"
          onClick={() => router.push('/menu')}
          icon={<MenuRoundedIcon/>}
        />
     
      </BottomNavigation>
      </ThemeProvider>
    </div>
  );
}