
'use client'

import AppImage from "@/components/common/AppImage";
import discover_data from '@/data/discover-nft';
import Link from 'next/link';
import React, { useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const RelatedProjects = () => {

  const [active, setActive] = useState(null)
  // handleActive function 
  const handleActive = (id: any) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  }


  return (
    <>
      <div className="related-project-area">
        <div className="container">
          <div className="section-heading">
            <h2 className="mb-0">Related Projects</h2>
          </div>

          <div className="tns-outer" id="tns1-ow">

            <div
              className="tns-controls"
              aria-label="Carousel Navigation"
              tabIndex={0}
            >
              <button
                className="slide-prev"
                type="button"
                data-controls="prev"
                tabIndex={-1}
                aria-controls="tns1"
              >
                <i className="bi bi-arrow-left"></i>
              </button>
              <button
                className="slide-next"
                type="button"
                data-controls="next"
                tabIndex={-1}
                aria-controls="tns1"
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            <Swiper
              loop={true}
              slidesPerView={4}
              spaceBetween={30}
              modules={[Autoplay, Navigation]}
              speed={3000}
              navigation={{
                nextEl: ".slide-next",
                prevEl: ".slide-prev",
              }}
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
              className="related-project-slide">
              {discover_data.map((item, i) => (
                <SwiperSlide key={i}>

                  <div className="nft-card card shadow-sm">
                    <div className="card-body">
                      <div className="img-wrap"><AppImage src={item.image} alt="" />
                        {item.badgeInfo[0].icon &&
                          <div className="badge bg-primary position-absolute"><AppImage src={item.badgeInfo[0].icon} alt="" />{item.badgeInfo[0].text}</div>
                        }

                        <div className="dropdown">
                          <button
                            onClick={() => handleActive(item.id)}
                            className={`btn dropdown-toggle rounded-pill shadow-sm ${active === item.id ? 'show' : ''}`} id="dropdownfx22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                          <ul className={`dropdown-menu dropdown-menu-end ${active === item.id ? 'show' : ''}`}
                            style={{
                              position: 'absolute',
                              inset: '0px 0px auto auto',
                              margin: '0px',
                              transform: 'translate(0px, 34px)',
                            }}
                            aria-labelledby="dropdownfx22">
                            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                            <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                          </ul>
                        </div>

                      </div>

                      <div className="row gx-2 align-items-center mt-3">
                        <div className="col-8" style={{color: '#8480AE'}}><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>{item.topLevelInfo[0].text}</span></div>
                        <div className="col-4 text-end">
                          <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                        </div>
                      </div>

                      <div className="row gx-2 align-items-center mt-2">
                        <div className="col-8">
                          <div className="name-info d-flex align-items-center">
                            <div className="author-img position-relative"><AppImage className="shadow" src={item.authorAvater} alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                            <div className="name-author">
                              <Link className="name d-block hover-primary fw-bold text-truncate" href="/item-details" data-bs-toggle="tooltip" data-bs-placement="top" title="Monkey Arts #114">{item.title}</Link>
                              <Link className="author d-block fz-12 hover-primary text-truncate" href="/author">@ {item.authorName}</Link></div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="price text-end" style={{color: '#8480AE'}}><span className="fz-12 d-block">{item.priceText}</span>
                            <h6 className="mb-0">{item.currentPrice}</h6>
                          </div>
                        </div>
                      </div>

                      <div className="row gx-2 align-items-center mt-3">
                        <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                        <div className="col-6 text-end"><Link className="btn btn-minimal btn-sm hover-primary" href="/activity"> <i className="bi bi-activity me-1"></i>Activity</Link></div>
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

export default RelatedProjects;