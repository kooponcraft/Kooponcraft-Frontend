
'use client'
import Image from "next/image";

import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonial_data from '@/data/testimonial-data';

const ClientFeedback = () => {
  return (
    <>
      <div className="client-feedback-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-9 col-md-8 col-lg-7">
              <div className="section-heading">
                <h2>Read some reviews from our beloved clients about our work.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="client-feedback-content">
            <Swiper
              loop={true}
              slidesPerView={4}
              spaceBetween={30}
              modules={[Autoplay]}
              speed={3000}
              breakpoints={{
                "1400": {
                  slidesPerView: 4,
                },
                "1200": {
                  slidesPerView: 3,
                },
                "992": {
                  slidesPerView: 3,
                },
                "768": {
                  slidesPerView: 3,
                },
                "480": {
                  slidesPerView: 1,
                },
                "320": {
                  slidesPerView: 1,
                },
                "0": {
                  slidesPerView: 1,
                },
              }}
              className="client-feedback-slides">
              {testimonial_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="card feedback-card p-2">
                    <div className="card-body p-4">
                      <div className="client-info d-flex align-items-center">
                        <div className="client-thumb rounded-circle me-1 position-relative">
                          <Image layout="fill" className="rounded-circle" src={item.image} alt="" />
                        </div>
                        <div className="client-name" style={{color: '#8084AE'}}>
                          <h6 className="fz-16 mb-0">{item.name}</h6>
                          <p className="mb-0 fz-14">@ {item.username}</p>
                        </div>
                      </div>
                      <div className="ratings text-warning mt-4 mb-3 fz-14">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <p className="text-dark mb-0 fw-bold">{item.testimonial}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientFeedback;