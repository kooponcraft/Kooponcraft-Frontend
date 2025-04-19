'use client'

import Link from 'next/link';
import AppImage from "@/components/common/AppImage";
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getUser } from '@/lib/auth/getUser';
import { getAllCoupons } from '@/lib/getAllCoupons';

const LatestCouponDeals = () => {
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
      const fetchCoupons = async () => {
        const user = await getUser()
        const accountAddress = user?.accountAddress;
        const params = {
          created_at: 'recent',
          userAddress: accountAddress,
          limit: 3,
        };

        const coupons = await getAllCoupons(params)
        setCoupons(coupons);
      };

      fetchCoupons();
    }, []);

  return (
    <>
      <div className="discover-nft-wrapper bg-gray pt-120 pb-120">
      <div className="container">
          <div className="row align-items-center">
            <div className="col-7">
              <div className="section-heading d-flex align-items-center">
                <div className="spinner-grow text-danger" role="status"><span className="visually-hidden">Loading...</span></div>
                <h2 className="mb-0 ms-2">Latest Coupon Deals</h2>
              </div>
            </div>
            <div className="col-5 text-end">
              <Link className="btn rounded-pill btn-outline-primary btn-sm border-2 mb-5" href="/explore/nfts">View All Coupons</Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row g-4 justify-content-center">
            {
              coupons.map((coupon: any, i: number) => (
                <div key={i} className="col-12 col-md-8 col-lg-4">
                <div className="nft-card card border-0">
                  <div className="card-body">
                    <div className="img-wrap" style={{ height: 200 }}><AppImage src={coupon.tokenImageUrl} className="object-fit-cover w-100 h-100" alt="" />
                    <div className="ribbon-wrapper">
                        <div className="ribbon">{coupon.discount || 'COUPON'}</div>
                    </div>
                      <div className={`badge bg-dark position-absolute`}>
                        <AppImage src="/assets/img/core-img/fire.png" alt="" />New</div>
                    </div>

                    <div className="row gx-2 align-items-center mt-2">
                      <div className="col-8">
                        <div className="name-info d-flex align-items-center">
                          <div className="author-img position-relative">
                            <AppImage className="shadow" src={coupon.profileImageUrl || `https://api.dicebear.com/6.x/identicon/svg?seed=${encodeURIComponent(coupon.ownerName)}`} alt="" />
                            <i className="bi bi-check position-absolute bg-success true"></i></div>
                          <div className="name-author">
                            <Link className="name d-block hover-primary fw-bold text-truncate" href={`/coupon/${coupon.collectionId}/${coupon.tokenId}`} data-bs-toggle="tooltip" data-bs-placement="top" title={coupon.tokenName}>{coupon.tokenName}</Link>
                            <Link className="author d-block fz-12 hover-primary text-truncate" href="/author">@{coupon.ownerName}</Link></div>
                        </div>
                      </div>
                      <div className="col-4" style={{ color: '#8084AE' }}>
                        <div className="price text-end">
                          <h6 className="mb-0">
                            {coupon.finalPriceOfCoupon.toFixed(2)} UNQ
                          </h6>
                        </div>
                      </div>
                      <div className="col-12"><Link className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href={`/item/${coupon.collectionId}/${coupon.tokenId}`}>Buy</Link></div>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestCouponDeals;