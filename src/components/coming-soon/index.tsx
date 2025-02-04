
'use client'
import Image from "next/image";

import Link from 'next/link';
import React from 'react';

import dynamic from 'next/dynamic';
const MyTimer = dynamic(() => import('../common/Timer'), { ssr: false });


const ComingSoon = () => {
  return (
    <>
      <div className="coming-soon-wrapper bg-img bg-overlay" style={{backgroundImage: `url(/assets/img/bg-img/1.jpg)`}}>
        <div className="cs-content w-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="logo mb-5"><Image layout="fill" src="/assets/img/core-img/logo-white.png" alt="" /></div> 

                 <MyTimer />

                <h2 className="display-4 mb-4 fw-bold">Coming Soon</h2>
                <p className="mb-4">Build an excellent NFTs website with Kooponcraft.</p>
                <Link className="btn btn-primary btn-sm rounded-pill" href="/">View Status</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;