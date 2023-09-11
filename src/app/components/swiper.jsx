"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Tooltip from "@mui/material/Tooltip";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/swiper.module.css";
import { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";
import Toolbar from "@mui/material/Toolbar";
export default function SwiperApp() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [imageSize, setSmageSize] = useState({
    width: 150,
    height: 150
   });
  return (
    <>
      <Toolbar />
      <div className={styles.s1}>
        {/* <h1>Discover</h1> */}
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 10,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 10,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiperRef}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Tooltip title="Pizza">
              <Image
                src="/pizza.avif"
                alt="Pizza"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Burger">
              <Image
                src="/burger.avif"
                alt="Burger"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Rolls">
              <Image
                src="/rolls.avif"
                alt="Rolls"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
            
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Biryani">
              <Image
                src="/biryani.avif"
                alt="Biryani"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Chicken">
              <Image
                src="/chicken.webp"
                alt="Chicken"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Thali">
              <Image
                src="/thali.avif"
                alt="Thali"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Cake">
              <Image
                src="/cake.avif"
                alt="Cake"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Paneer">
              <Image
                src="/paneer.avif"
                alt="Paneer"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Noodles">
              <Image
                src="/noodles.avif"
                alt="Noodles"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Idli">
              <Image
                src="/idli.avif"
                alt="Idli"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Fried Rice">
              <Image
                src="/fried-rice.avif"
                alt="Fried Rice"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              
              />
            </Tooltip>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.s2}>
        <Swiper
          onSwiper={setSwiperRef}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 1,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Tooltip title="Deals">
              <Image
                src="/deals.png"
                alt="Deals"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Grocery">
              <Image
                src="/grocery.png"
                alt="Grocery"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Convenience">
              <Image
                src="/convenience.png"
                alt="Convenience"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Pharmacy">
              <Image
                src="/pharmacy.png"
                alt="Pharmacy"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Baby">
              <Image
                src="/baby.png"
                alt="Baby"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Pet Supplies">
              <Image
                src="/pet_supplies.png"
                alt="vPet Supplies"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Flowers">
              <Image
                src="/flowers.png"
                alt="Flowers"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Retail">
              <Image
                src="/retail.png"
                alt="Retail"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Best Overall">
              <Image
                src="/best_overall.png"
                alt="Best Overall"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Fast Food">
              <Image
                src="/fast_food.png"
                alt="Fast Food"
                className={styles.i}
          
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
          <SwiperSlide>
            <Tooltip title="Healthy">
              <Image
                src="/healthy.png"
                alt="Healthy"
                className={styles.i}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
              />
            </Tooltip>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
