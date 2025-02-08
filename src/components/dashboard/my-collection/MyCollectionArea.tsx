

'use client'
import AppImage from "@/components/common/AppImage";

import collection_data from '@/data/collection';
import Link from 'next/link';
import React, { useState } from 'react';

const MyCollectionArea = () => {

  const [count, setCount] = useState(6);
  const [noMorePost, setNoMorePost] = useState(false);
  const countSlice = collection_data.slice(0, count);

  const handleLoadMore = () => {
    setCount(count + 3);
    if (count >= collection_data.length) {
      setNoMorePost(true);
    }
  }

  return (
    <>
      <div className="create-new-button">
        <Link className="shadow-lg btn btn-warning" href="/create-new"
          data-bs-toggle="tooltip"
          data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg"></i>
        </Link>
      </div>
      <div className="admin-wrapper">
        <div className="container">
          <h5 className="mb-3">Your collections</h5>
          <div className="row g-4">

            {countSlice.map((elem, index) => (
              <div className="col-12 col-md-6 col-xxl-4" key={index} >
                <div className="catagory-card card shadow-sm">
                  <div className="card-body">
                    <div className="row gx-1">
                      <div className="col-6">
                        <AppImage className="rounded" src={elem.firstImage} alt={elem.name} />
                        <AppImage className="rounded" src={elem.thirdImage} alt={elem.name} />
                      </div>
                      <div className="col-6">
                        <AppImage className="rounded" src={elem.secondImage} alt={elem.name} />
                        <AppImage className="rounded" src={elem.fourthImage} alt={elem.name} />
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-8">
                        <h5 className="mb-0 d-flex align-items-center">
                          {elem.name}
                          <span className="badge rounded-pill fz-14 bg-primary ms-2">
                            {elem.totalItems}
                          </span>
                        </h5>
                      </div>
                      <div className="col-4 text-end">
                        <Link className="btn btn-minimal hover-primary" href={elem.buttonURL} >
                          {elem.buttonText}
                          <i className="ms-1 bi bi-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {noMorePost ? (
              <div className="container">
                <div className="text-center mt-70">
                  <button
                    onClick={() => handleLoadMore()}
                    className="btn btn-primary btn-sm rounded-pill"
                  >
                    No Items Here<i className="ms-1 bi bi-arrow-repeat"></i>
                  </button>
                </div>
              </div>
            ) : (
              <div className="container">
                <div className="text-center mt-70">
                  <button
                    onClick={() => handleLoadMore()}
                    className="btn btn-primary btn-sm rounded-pill"
                  >
                    View More Items<i className="ms-1 bi bi-arrow-repeat"></i>
                  </button>
                </div>
              </div>
            )} 


          </div>
        </div>
      </div>
    </>
  );
};

export default MyCollectionArea;