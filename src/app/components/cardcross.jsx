import * as React from "react";
import Image from 'next/image';
import IconButton from "@mui/material/IconButton";
import styles from "../styles/card.module.css";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { Roboto } from "next/font/google";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { Divider } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Mcard = (props) => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };

  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };

  const action1 = (
    <React.Fragment>
      <Button color="success" size="small" onClick={handleClose1}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose1}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const action2 = (
    <React.Fragment>
      <Button color="success" size="small" onClick={handleClose2}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose2}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className={roboto.className}>
      <div className={styles.card}>
        <Grid container>
          <Image className={styles.image} src={props.img} alt={props.h1} width={300} height={200} />
          <div className={styles.fav}>
          <Checkbox
                onClick={handleClick1}
                {...label}
                icon={
                  <Image
                    src="/favorite.svg"
                    width={26}
                    height={26}
                    alt="Card"
                  />
                }
                checkedIcon={
                  <Image
                    src='/favoritefilled.svg'
                    width={26}
                    height={26}
                    alt="Card"
                  />
                }
              /></div>
          <h1 className={styles.h1}>{props.h1}</h1>
               
          <p className={styles.p}>{props.p}</p>

          <Grid container columnSpacing={7}>
            <Grid item xs={3}>
              <button className={styles.star}>
                <Image
                  src="./starsharp.svg"
                  alt="star"
                  height={15}
                  width={15}
                  style={{ marginRight: "0.2rem" }}
                />
                <p>{props.rate}</p>
              </button>
            </Grid>
            <Grid item xs={4}>
            <p className={styles.p}>{props.mins} MINS</p>
            </Grid>
            {/* <Grid
              item
              xs={5}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
           
            </Grid> */}
            <Grid item xs={5}>
              <p className={styles.p}>{props.rs}</p>
            </Grid>
          </Grid>

          <Divider style={{ width: "100%" }} />

          <Grid container style={{ margin: "0.1rem" }}>
            <Grid item xs={1}>
              <Image src="./percent.svg" alt="star" height={20} width={20} />
            </Grid>
            <Grid item xs={10}>
              <p>{props.offer}</p>
            </Grid>
          </Grid>
          <Divider style={{ width: "100%" }} />
          <Grid container>
            <Grid item xs={1}>
              <Image src="./gift.svg" alt="star" height={20} width={20} />
            </Grid>
            <Grid item xs={11}>
              <p>{props.gift}</p>
            </Grid>
          </Grid>

          <Grid
            container
            rowSpacing={0}
            columnSpacing={1}
            sx={{ margin: "0.2rem" }}
          >
            <Grid item xs={2}>
            
            </Grid>
            <Grid item xs={6}>
              <button
                onClick={handleClick2}
                className={styles.button}
                role="button"
              >
                {" "}
                Add to Cart
               
              </button>
            </Grid>
            <Grid item xs={4}>
              <button
                onClick={handleClick2}
                className={styles.button}
                role="button"
              >
                Order
                
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Snackbar
          open={open1}
          autoHideDuration={6000}
          onClose={handleClose1}
          message="Added To Favorites"
          action={action1}
        />
        <Snackbar
          open={open2}
          autoHideDuration={6000}
          onClose={handleClose2}
          message="Added To Card"
          action={action2}
        />
      </div>
    </div>
  );
};

export default Mcard;
