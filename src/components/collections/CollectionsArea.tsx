'use client'
import collection_data from '@/data/collection';
import React, { useState } from 'react';
import AppImage from "@/components/common/AppImage";

const CollectionsArea = () => {

	const [count, setCount] = useState(9);
	const [noMorePost, setNoMorePost] = useState(false);
	const countSlice = collection_data.slice(0, count);

	const handleLoadMore = () => {
    setCount(count + 3);
    if (count >= collection_data.length) {
			setNoMorePost(true);
		}
	};


  return (
    <>
      <div className="collection-wrapper">
      <div className="container">
        <div className="row g-4">
          {countSlice.map((item, i) => (
            <div key={i} className="col-12 col-md-6 col-xl-4">
            <div className="catagory-card card shadow-sm">
              <div className="card-body"> 

                <div className="row gx-1">
                        <div className="col-6">
                            <AppImage className="rounded" src={item.firstImage} alt={item.name} />
                            <AppImage className="rounded" src={item.thirdImage} alt={item.name} />
                        </div>
                        <div className="col-6">
                            <AppImage className="rounded" src={item.secondImage} alt={item.name} />
                            <AppImage className="rounded" src={item.fourthImage} alt={item.name} />
                        </div>
                    </div>

                <div className="row mt-3">
                  <div className="col-8">
                    <h5 className="mb-0">{item.name}<span className="badge bg-primary ms-2">{item.totalItems}</span></h5>
                  </div>
                  <div className="col-4 text-end"><a className="btn btn-minimal hover-primary" href="#">View all<i className="ms-1 fz-14 bi bi-arrow-right"></i></a></div>
                </div>
              </div>
            </div>
          </div>
          ))} 

        </div>
      </div> 

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
    </>
  );
};

export default CollectionsArea;