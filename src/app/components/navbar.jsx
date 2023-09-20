'use client';
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
export default function LabelBottomNavigation() {
    const router = useRouter()
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Mnavbar">
      <BottomNavigation value={value} onChange={handleChange}>
   
        <BottomNavigationAction  style={{marginLeft:'1rem'}}
          label="Home"
          value="Home"
          onClick={() => router.push('/')}
          icon={ <img src="./home.svg" width={26} height={26} alt="Home" />}
        />
         
        <BottomNavigationAction id="color"
          label="Search"
          value="Search"
          onClick={() => router.push('/search')}
          icon={ <SearchIcon />}
      />
      
      <BottomNavigationAction id="color"
          label="Safe"
          value="Safe"
          onClick={() => router.push('/safe')}
          icon={ <img  src="./safe.svg" width={26} height={26} alt="Home" />}
      />
        <BottomNavigationAction id="color"
          label="Cart"
          value="Cart"
          onClick={() => router.push('/cart')}
          icon={<LocalMallIcon
          
          />}

        />
      
        
        <BottomNavigationAction id="color" style={{marginRight:'1rem'}}
          label="Menu"
          value="folder"
          onClick={() => router.push('/menu')}
          icon={<MenuIcon />}
        />
     
      </BottomNavigation>
    </div>
  );
}
