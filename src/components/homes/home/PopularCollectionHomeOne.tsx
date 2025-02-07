'use client'

import AppImage from "@/components/common/AppImage";
import React from 'react';
import popular_data from '@/data/popular-nft'; 
import Link from 'next/link';
import NiceSelect from '@/ui/NiceSelect';
import { BsCheck, BsFire } from 'react-icons/bs';

const PopularCollectionHomeOne = () => {

  const selectHandler = (e: any) => { };

  return (
    <>
      <div className="popular-collection-wrapper">
        <div className="container mx-auto">
          <div className="section-heading relative z-10 flex items-center justify-center">
            <h2 className="mb-0">Popular items in last</h2>

            <NiceSelect
              className="filter-select popular-collection-select popularSelectItems"
              options={[
                { value: "All", text: "1 day" },
                { value: "01", text: "7 days" },
                { value: "02", text: "15 days" },     
                { value: "03", text: "1 month" },     
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              placeholder="Select an option"
              name="myNiceSelect"
            />
          </div>
        </div>
        <div className="container mx-auto">
          <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">

            {popular_data.map((item, i) => (
              <div key={i} className="col">
                <div className="nft-card card shadow-sm">
                  <div className="card-body p-4">
                    <div className="row flex items-center gap-3">
                      <div className="col-4">
                        <div className="img-wrap relative">
                          <AppImage src={item.image} alt="" />
                          <div className="badge bg-red-500 absolute px-2 py-1"># {item.id}</div>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="meta-info">
                          <div className="name-info flex items-center mb-3">
                            <div className="author-img relative">
                              <AppImage className="shadow" src={item.authorAvater} alt="" />
                              <BsCheck className="absolute bg-green-500" />
                            </div>
                            <div className="name-author ml-2">
                              <Link className="name block hover:text-primary font-bold truncate" href="/item-details" title="Trees Growing Seedlings">{item.title}</Link>
                              <Link className="author block text-xs hover:text-primary truncate" href="/author">@ {item.authorName}</Link>
                            </div>
                          </div>
                          <div className="price-bid flex items-center">
                            <div className="price mr-2 sm:mr-3">
                              <h6 className="mb-0 inline-block text-xs border-2 border-info rounded py-1 px-2 text-info">{item.currentPrice}</h6>
                            </div>
                            <a className="btn btn-minimal btn-sm hover:text-primary flex items-center" href="#">
                              <AppImage className="mr-1" src="/assets/img/core-img/fire.png" alt="" />
                              {item.buttonInfo[0].text}
                            </a>
                          </div>
                        </div>
                      </div>
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

export default PopularCollectionHomeOne;
