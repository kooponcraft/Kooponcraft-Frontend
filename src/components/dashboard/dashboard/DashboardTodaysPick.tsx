

import AppImage from "@/components/common/AppImage";
import React from 'react';
import todays_data from '@/data/todays-drop';

const DashboardTodaysPick = () => {
  return (
    <>
      <div className="col-12 col-md-6 col-xl-4">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5>Top Seller</h5><a className="btn btn-primary btn-minimal" href="#">View all</a>
            </div>
            {todays_data.slice(0, 2).map((item, i) => (
              <div key={i} className={`nft-card card seller-card shadow-sm ${i === 0? 'mb-4' : ''}`}>
                <div className="card-body">
                  <div className="row align-items-center g-3">
                    <div className="col-4">
                      <div className="img-wrap"><AppImage src={item.authorAvater} alt="" />
                        <div className="badge bg-danger position-absolute px-2 py-1"># {item.id}</div>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="name-author">
                        <a className="name d-block hover-primary fw-bold text-truncate" href="#">{item.title}<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified"></i></a><a className="author d-block fz-14 hover-primary text-truncate" href="#">@ {item.authorName }</a>
                        <div className="price-bid d-flex align-items-center mt-3">
                          <p className="mb-0 lh-1 d-flex align-items-center fz-14" style={{color: '#8084AE'}}>
                            <i className="me-1 bi bi-gem"></i>{item.price}</p>
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

export default DashboardTodaysPick;