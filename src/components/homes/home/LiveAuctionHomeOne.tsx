'use client'

import AppImage from "@/components/common/AppImage";
import Link from 'next/link';
import React, { useState } from 'react';
import live_actions from '@/data/live-auction';
import dynamic from 'next/dynamic';
import { BsThreeDotsVertical, BsShare, BsFlag, BsBookmark, BsBag, BsCheck } from 'react-icons/bs';

const MyTimer = dynamic(() => import('../../common/Timer'), { ssr: false });

const LiveAuctionHomeOne = ({ style_2 }: any) => {
  const [active, setActive] = useState(null);

  const handleActive = (id: any) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <>
      <div className={`live-bidding-wrapper ${style_2 ? '' : 'bg-gray-200 pt-30 pb-30'}`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="spinner-grow text-red-500" role="status"><span className="sr-only">Loading...</span></div>
              <h2 className="mb-0 ml-2">Live {style_2 ? 'Bid' : 'Auctions'}</h2>
            </div>
            <div className="text-right">
              <Link className="btn rounded-full border-2 border-primary text-primary py-1 px-3 mb-5" href="/live-bidding">View All Auctions</Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
            {live_actions.slice(0, 4).map((item, i) => (
              <div key={i} className="col-span-1">
                <div className="nft-card card border-0">
                  <div className="card-body">
                    <div className="relative">
                      <AppImage src={item.image} alt="" />
                      <div className={`badge bg-${item.badgeInfo[0].color} absolute`}>
                        <AppImage src={item.badgeInfo[0].icon} alt="" />{item.badgeInfo[0].text}
                      </div>
                      <div className="dropdown">
                        <button
                          onClick={() => handleActive(item.id)}
                          className={`btn dropdown-toggle rounded-full shadow-sm ${active === item.id ? 'show' : ''}`} id="dropdownfx22" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <BsThreeDotsVertical />
                        </button>
                        <ul className={`dropdown-menu dropdown-menu-end ${active === item.id ? 'show' : ''}`}
                          style={{
                            position: 'absolute',
                            inset: '0px 0px auto auto',
                            margin: '0px',
                            transform: 'translate(0px, 34px)',
                          }}
                          aria-labelledby="dropdownfx22">
                          <li><a className="dropdown-item" href="#"><BsShare className="mr-1" />Share</a></li>
                          <li><a className="dropdown-item" href="#"><BsFlag className="mr-1" />Report</a></li>
                          <li><a className="dropdown-item" href="#"><BsBookmark className="mr-1" />Bookmark</a></li>
                        </ul>
                      </div>
                      <MyTimer />
                    </div>
                    <div className="flex items-center mt-3 text-gray-500">
                      <div className="flex-1">
                        <span className="block text-xs">
                          <BsBag className="inline mr-1" />{item.topLevelInfo[0].text}
                        </span>
                      </div>
                      <div className="text-right">
                        <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <div className="relative">
                            <AppImage className="shadow" src={item.authorAvater} alt="" />
                            <BsCheck className="absolute bg-green-500" />
                          </div>
                          <div className="ml-2">
                            <Link className="block hover:text-primary font-bold truncate" href="/item-details" data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">{item.title}</Link>
                            <Link className="block text-xs hover:text-primary truncate" href="/author">@ {item.authorName}</Link>
                          </div>
                        </div>
                      </div>
                      <div className="text-right text-gray-500">
                        <div className="price">
                          <span className="text-xs block">{item.priceText}</span>
                          <h6 className="mb-0">{item.currentPrice}</h6>
                        </div>
                      </div>
                      <div className="col-12"><a className="btn btn-primary rounded-full text-sm mt-3 w-full" href="#">Place Bid</a></div>
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
