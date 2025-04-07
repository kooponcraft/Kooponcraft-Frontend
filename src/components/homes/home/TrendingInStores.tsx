import AppImage from "@/components/common/AppImage";
import Link from 'next/link';
import React from 'react';
import { getAllCoupons } from "@/lib/getAllCoupons";

const TrendingInStores = async () => {

  const coupons = await getAllCoupons({ item: true })

  return (
    <>
      <div className={`live-bidding-wrapper`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-7">
              <div className="section-heading d-flex align-items-center">
                <div className="spinner-grow text-danger" role="status"><span className="visually-hidden">Loading...</span></div>
                <h2 className="mb-0 ms-2">Trending In Stores</h2>
              </div>
            </div>
            <div className="col-5 text-end">
              <Link className="btn rounded-pill btn-outline-primary btn-sm border-2 mb-5" href="/">View All Items</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {coupons.slice(0, 4).map((item: any, i: number) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="nft-card card border-0">
                  <div className="card-body">
                    <div className="img-wrap" style={{ height: 200 }}><AppImage src={item.tokenImageUrl} className="object-fit-cover w-100 h-100" alt="" />
                      <div className={`badge bg-primary position-absolute`}>
                        <AppImage src="/assets/img/core-img/fire.png" alt="" />Featured</div>
                    </div>

                    <div className="row gx-2 align-items-center mt-2">
                      <div className="col-8">
                        <div className="name-info d-flex align-items-center">
                          <div className="author-img position-relative">
                            <AppImage className="shadow" src={item.profileImageUrl || `https://api.dicebear.com/6.x/identicon/svg?seed=${encodeURIComponent(item.ownerName)}`} alt="" />
                            <i className="bi bi-check position-absolute bg-success true"></i></div>
                          <div className="name-author">
                            <Link className="name d-block hover-primary fw-bold text-truncate" href="/item-details" data-bs-toggle="tooltip" data-bs-placement="top" title={item.tokenName}>{item.tokenName}</Link>
                            <Link className="author d-block fz-12 hover-primary text-truncate" href="/author">@{item.ownerName}</Link></div>
                        </div>
                      </div>
                      <div className="col-4" style={{ color: '#8084AE' }}>
                        <div className="price text-end">
                          <span className="fz-12 d-block">Current Price</span>
                          <h6 className="mb-0">
                          {item.finalPriceOfCoupon.toFixed(2)} UNQ
                          </h6>
                        </div>
                      </div>
                      <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Purchase</a></div>
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

export default TrendingInStores;