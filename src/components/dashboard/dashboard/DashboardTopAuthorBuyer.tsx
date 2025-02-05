
'use client'
import AppImage from "@/components/common/AppImage";

import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slideData = [
  "/assets/img/bg-img/u1.jpg",
  "/assets/img/bg-img/u2.jpg",
  "/assets/img/bg-img/u3.jpg",
  "/assets/img/bg-img/u4.jpg",
  "/assets/img/bg-img/u1.jpg",
  "/assets/img/bg-img/u2.jpg",
  "/assets/img/bg-img/u3.jpg",
  "/assets/img/bg-img/u4.jpg",
]



const DashboardTopAuthorBuyer = () => {
  return (
    <>
      <div className="col-12 col-md-6">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <h5 className="mb-3">Top Authors</h5>
            <div className="top-author-slide-wrap">
              <Swiper 
              loop={true}
              slidesPerView={4}
              spaceBetween={30}
              modules={[Autoplay]}
              speed={3000}
              breakpoints={{
                "1400": {
                  slidesPerView: 6,
                },
                "1200": {
                  slidesPerView: 6,
                },
                "992": {
                  slidesPerView: 5,
                },
                "768": {
                  slidesPerView: 4,
                },
                "480": {
                  slidesPerView: 3,
                },
                "320": {
                  slidesPerView: 2,
                },
                "0": {
                  slidesPerView: 1,
                },
              }}
              className="top-authors-slide">
                {slideData.map((item, i) => (
                  <SwiperSlide key={i}>
                    <a href="#"><AppImage src={item} alt="rk_theme" /></a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <h5 className="mb-3">Top Buyers</h5>
            <div className="top-buyer-slide-wrap">
              <Swiper
              loop={true}
              slidesPerView={4}
              spaceBetween={30}
              modules={[Autoplay]}
              speed={3000}
              breakpoints={{
                "1400": {
                  slidesPerView: 6,
                },
                "1200": {
                  slidesPerView: 6,
                },
                "992": {
                  slidesPerView: 5,
                },
                "768": {
                  slidesPerView: 4,
                },
                "480": {
                  slidesPerView: 3,
                },
                "320": {
                  slidesPerView: 2,
                },
                "0": {
                  slidesPerView: 1,
                },
              }}
               className="top-buyer-slide">
                {slideData.map((item, i) => (
                  <SwiperSlide key={i}>
                    <a href="#"><AppImage src={item} alt="rk_theme" /></a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTopAuthorBuyer;