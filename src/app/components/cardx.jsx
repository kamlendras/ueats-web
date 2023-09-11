"use client";
import * as React from "react";
import Cardcross from "./cardcross";
import { useRef, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import styles from "../styles/cardcross.module.css";
function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  // Array.from(new Array(40))
  return messageExamples.map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

export default function Icourses() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <>
      {messages.map(({ img, h1, p, rate, mins, rs, offer, gift }) => (
        <>
          <div className={styles.cardcross}>
            <Cardcross
              img={img}
              h1={h1}
              p={p}
              rate={rate}
              mins={mins}
              rs={rs}
              offer={offer}
              gift={gift}
            />
          </div>
        </>
      ))}
    </>
  );
}

const messageExamples = [
  {
    img: "/food1.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food2.jpg",
    h1: "Pizza",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food3.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },

  {
    img: "/food3.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food5.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food6.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food7.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food8.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food9.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
  {
    img: "/food10.jpg",
    h1: "ROYAL MUTTON CHICKEN",
    p: "North Indian",
    rate: "3.6",
    mins: "14",
    rs: "₹200 FOR TWO",
    offer: "60% off on all orders",
    gift: "Free Ice Tea on orders above ₹799",
  },
];
