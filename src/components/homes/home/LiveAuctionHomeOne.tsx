'use client'

import Image from "next/image";
import Link from 'next/link';
import React, { useState } from 'react';
import live_actions from '@/data/live-auction';


import dynamic from 'next/dynamic';
const MyTimer = dynamic(() => import('../../common/Timer'), { ssr: false });
 


const LiveAuctionHomeOne = ({ style_2 }: any) => {

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
 

      <div className={`live-bidding-wrapper ${style_2 ? '' : 'bg-gray pt-120 pb-120'}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-7">
              <div className="section-heading d-flex align-items-center">
                <div className="spinner-grow text-danger" role="status"><span className="visually-hidden">Loading...</span></div>
                <h2 className="mb-0 ms-2">Live {style_2 ? 'Bid' : 'Auctions'}</h2>
              </div>
            </div>
            <div className="col-5 text-end">
              <Link className="btn rounded-pill btn-outline-primary btn-sm border-2 mb-5" href="/live-bidding">View All Auctions</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {live_actions.slice(0, 4).map((item, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="nft-card card border-0">
                  <div className="card-body">
                    <div className="img-wrap"><Image layout="fill" src={item.image} alt="" />
                      <div className={`badge bg-${item.badgeInfo[0].color} position-absolute`}>
                        <Image layout="fill" src={item.badgeInfo[0].icon} alt="" />{item.badgeInfo[0].text}</div>
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

                      <MyTimer />


                    </div>

                    <div className="row gx-2 align-items-center mt-3" style={{ color: '#8084AE' }}>
                      <div className="col-8">
                        <span className="d-block fz-12">
                          <i className="bi bi-bag me-1"></i>{item.topLevelInfo[0].text}</span>
                      </div>
                      <div className="col-4 text-end">
                        <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                      </div>
                    </div>

                    <div className="row gx-2 align-items-center mt-2">
                      <div className="col-8">
                        <div className="name-info d-flex align-items-center">
                          <div className="author-img position-relative">
                            <Image layout="fill" className="shadow" src={item.authorAvater} alt="" />
                            <i className="bi bi-check position-absolute bg-success"></i></div>
                          <div className="name-author">
                            <Link className="name d-block hover-primary fw-bold text-truncate" href="/item-details" data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">{item.title}</Link>
                            <Link className="author d-block fz-12 hover-primary text-truncate" href="/author">@ {item.authorName}</Link></div>
                        </div>
                      </div>
                      <div className="col-4" style={{ color: '#8084AE' }}>
                        <div className="price text-end">
                          <span className="fz-12 d-block">{item.priceText}</span>
                          <h6 className="mb-0">{item.currentPrice}</h6>
                        </div>
                      </div>
                      <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                    </div>
                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>
      </div>



    </>
  );
};

export default LiveAuctionHomeOne;