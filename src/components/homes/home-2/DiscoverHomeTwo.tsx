
'use client'
import Image from "next/image";
import Link from 'next/link';
import React, { useState } from 'react';
import discover_data from '@/data/discover-nft';
import NiceSelect from '@/ui/NiceSelect';

const DiscoverHomeTwo = () => {

  const [active, setActive] = useState(null)
  // handleActive function 
  const handleActive = (id: any) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  }
  const selectHandler = (e: any) => { };



  return (
    <>
      <div className="discover-nft-wrapper bg-gray pt-120 pb-120">
        <div className="container">
          <div className="section-heading">
            <h2 className="mb-0">Discover Items</h2>
          </div>
        </div>

        <div className="discover-filter-options mb-5">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-12 col-sm-6 col-lg-3">
                <h5>Status</h5>

                <NiceSelect
                  className="filter-select w-100 d-flex align-items-center"
                  options={[
                    { value: "Buy Now", text: "Buy Now" },
                    { value: "01", text: "On Auction" },
                    { value: "02", text: "New" },
                    { value: "04", text: "Featured" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  placeholder="Select an option"
                  name="myNiceSelect"
                />


              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <h5>Categories</h5>


                <NiceSelect
                  className="filter-select w-100 d-flex align-items-center"
                  options={[
                    { value: "Art", text: "Art" },
                    { value: "01", text: "Cards" },
                    { value: "02", text: "Collectibles" },
                    { value: "03", text: "Domain" },
                    { value: "04", text: "Music" },
                    { value: "05", text: "Memes" },
                    { value: "06", text: "Photos" },
                    { value: "07", text: "Sports" },
                    { value: "08", text: "Videos" },
                    { value: "09", text: "Vitual Worlds" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  placeholder="Select an option"
                  name="myNiceSelect"
                />


              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <h5>Items</h5>

                <NiceSelect
                  className="filter-select w-100 d-flex align-items-center"
                  options={[
                    { value: "All", text: "All" },
                    { value: "01", text: "Single" },
                    { value: "02", text: "Bundle" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  placeholder="Select an option"
                  name="myNiceSelect"
                />

              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <h5>Sort By</h5>

                <NiceSelect
                  className="filter-select w-100 d-flex align-items-center"
                  options={[
                    { value: "All", text: "Recently Added" },
                    { value: "01", text: "Recently Sold" },
                    { value: "02", text: "Ending Soon" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  placeholder="Select an option"
                  name="myNiceSelect"
                />

              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">

            {discover_data.slice(0, 8).map((item, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="nft-card card border-0">
                  <div className="card-body">
                    <div className="img-wrap"><Image layout="fill" src={item.image} alt="" />


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
                      <div className="col-8"><span className="d-block fz-12" style={{ color: '#8480AE' }}>
                        <i className="bi bi-arrow-up"></i>{item.topLevelInfo[0].text}</span></div>
                      <div className="col-4 text-end">
                        <button className={`wishlist-btn ${i % 2 === 0 ? 'active' : ''}`} type="button"><i className="bi"></i></button>
                      </div>
                    </div>

                    <div className="row gx-2 align-items-center mt-2">
                      <div className="col-8">
                        <div className="name-info d-flex align-items-center">
                          <div className="author-img position-relative">
                            <Image layout="fill" className="shadow" src={item.authorAvater} alt="" />
                            <i className="bi bi-check position-absolute bg-success"></i></div>
                          <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" href="/item-details" data-bs-toggle="tooltip" data-bs-placement="top" title="Monkey Arts #114">{item.title}</Link>
                            <Link className="author d-block fz-12 hover-primary text-truncate" href="/author">@ {item.authorName}</Link></div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="price text-end" style={{ color: '#8480AE' }}><span className="fz-12 d-block">Current Bid</span>
                          <h6 className="mb-0">{item.currentPrice}</h6>
                        </div>
                      </div>
                    </div>

                    <div className="row gx-2 align-items-center mt-3">
                      <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                      <div className="col-6 text-end">
                        <Link className="btn btn-minimal btn-sm hover-primary" href="/activity"> <i className="bi bi-activity me-1"></i>Activity</Link></div>
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

export default DiscoverHomeTwo;