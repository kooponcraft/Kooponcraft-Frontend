
'use client'

import React from 'react';
import live_actions from '@/data/live-auction';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';


import dynamic from 'next/dynamic';
const MyTimer = dynamic(() => import('../../common/Timer'), { ssr: false });
 

const DashboardTrendingAuction = () => {
  return (
    <>
      <div className="col-12 col-xxl-6">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <div className="d-flex align-items-center mb-3">
              <img className="me-1" src="/assets/img/core-img/fire2.png" alt="" />
              <h5 className="mb-0">Trending Auctions</h5>
            </div>
            <Swiper
              loop={true}
              slidesPerView={4}
              spaceBetween={20}
              modules={[Autoplay]}
              speed={3000}
              breakpoints={{
                "1400": {
                  slidesPerView: 1.8,
                },
                "1200": {
                  slidesPerView: 1.8,
                },
                "992": {
                  slidesPerView: 1.5,
                },
                "768": {
                  slidesPerView: 1.5,
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
              className="trending-auction-slide">
              {live_actions.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="nft-card card border-0 bg-gray">
                    <div className="card-body">
                      <div className="img-wrap">
                        <img src={item.image} alt="" />
                        <div className={`badge bg-${item.badgeInfo[0].color} position-absolute`}>
                          <img src={item.badgeInfo[0].icon} alt="" />{item.badgeInfo[0].text}</div>
                        
                        <div className="dropdown">
                          <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownqc22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownqc22">
                            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                          </ul>
                        </div> 

                        <MyTimer />

                      </div>

                      <div className="row gx-2 align-items-center mt-3">
                        <div className="col-8" style={{color: '#8084AE'}}><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>{item.topLevelInfo[0].text}</span></div>
                        <div className="col-4 text-end">
                          <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                        </div>
                      </div>

                      <div className="row gx-2 align-items-center mt-2">
                        <div className="col-8">
                          <div className="name-info d-flex align-items-center">
                            <div className="author-img position-relative">
                              <img className="shadow" src={item.authorAvater} alt="" />
                              <i className="bi bi-check position-absolute bg-success"></i>
                              </div>
                            <div className="name-author">
                              <Link className="name d-block hover-primary fw-bold text-truncate" href="/item-details" data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">{item.title}</Link>
                              <Link className="author d-block fz-12 hover-primary text-truncate" href="/author">@ {item.authorName}</Link></div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="price text-end" style={{color: '#8084AE'}}><span className="fz-12 d-block">{item.priceText}</span>
                            <h6 className="mb-0">{item.currentPrice}</h6>
                          </div>
                        </div>
                        <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                      </div>
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

export default DashboardTrendingAuction;