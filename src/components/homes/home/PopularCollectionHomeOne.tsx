
'use client'

import React from 'react';
import popular_data from '@/data/popular-nft'; 
import Link from 'next/link';
import NiceSelect from '@/ui/NiceSelect';


const PopularCollectionHomeOne = () => {

  const selectHandler = (e: any) => { };

  return (
    <>
       <div className="popular-collection-wrapper">
      <div className="container">
        <div className="section-heading position-relative z-index-1000 d-flex align-items-center justify-content-center">
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
      <div className="container">
        <div className="row g-4 justify-content-center">

          {popular_data.map((item, i) => (
          <div key={i} className="col-12 col-sm-10 col-md-6 col-xl-4">
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap"><img src={item.image} alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1"># {item.id}</div>
                    </div>
                  </div>
                  <div className="col-8">
                    
                    <div className="meta-info">
                      <div className="name-info d-flex align-items-center mb-3">
                        <div className="author-img position-relative">
                          <img className="shadow" src={item.authorAvater} alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author">
                          <Link className="name d-block hover-primary fw-bold text-truncate" href="/item-details" data-bs-toggle="tooltip" data-bs-placement="top" title="Trees Growing Seedlings">{item.title}</Link>
                          <Link className="author d-block fz-12 hover-primary text-truncate" href="/author">@ {item.authorName}</Link></div>
                      </div>
                      <div className="price-bid d-flex align-items-center">
                        <div className="price me-2 me-sm-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">{item.currentPrice}</h6>
                        </div><a className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" href="#"><img className="me-1" src="/assets/img/core-img/fire.png" alt="" />{item.buttonInfo[0].text}</a>
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