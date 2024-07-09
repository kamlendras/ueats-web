import React from "react";
import Lottie from "react-lottie";
import animationData from "./cart3.json";
import Typography from '@mui/material/Typography';
function Cartcross() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <>
  <div className="Container">
        <div className="Content">
          <div className="CTA"></div>
          <span className="bookmark">
  <Lottie options={defaultOptions} height={400} width={400} />
  </span>
  <Typography variant="h6" gutterBottom>
  Add items from a restaurant or store to start a new cart.
      </Typography>
    

          
        </div>
      </div>
  </>;
}

export default Cartcross;
