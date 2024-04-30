import React, { useContext } from "react";
import Image from 'next/image'
import styles from './page.module.css'
import Cardx from './components/cardx'
import {  Suspense, lazy } from 'react';
import Loading from './components/loading'
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
// const Swiper = React.lazy(() => {
//   return new Promise(resolve => setTimeout(resolve, 10000)).then(
//     () => import("./c/Swiper")
//   );
// });
function Home() {
 
  return (
 
  <>
  <Toolbar/>
    {/* <Suspense fallback={<Loading />}>
<Swiper/>
</Suspense> */}
<Grid container sx={{ mt: 10, ml: 5 , mr: 5}}>

<Cardx/>
</Grid>

</>
  );
}
export default Home;