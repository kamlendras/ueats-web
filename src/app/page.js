
import React, { useContext } from "react";
import Image from 'next/image'
import styles from './page.module.css'
import Cardx from './c/Cardx'
import {  Suspense, lazy } from 'react';
import Loading from './c/Loading'
// const Swiper = React.lazy(() => {
//   return new Promise(resolve => setTimeout(resolve, 10000)).then(
//     () => import("./c/Swiper")
//   );
// });
function Home() {
 
  return (
 
  <>
  
    {/* <Suspense fallback={<Loading />}>
<Swiper/>
</Suspense> */}
<Cardx/>

</>
  );
}
export default Home;