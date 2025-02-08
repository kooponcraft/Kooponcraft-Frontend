
import top_buyer from '@/data/top-buyer';
import React from 'react';
import AppImage from "@/components/common/AppImage";

const TopBuyerArea = () => {
  return (
    <>
      <div className="buyer-wrapper">
      <div className="container">
        <div className="row g-4 justify-content-center">

          {top_buyer.slice(0, 15).map((item, i) => (
          <div key={i} className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
            <div className="nft-card card seller-card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-4">
                    <div className="img-wrap"><AppImage src={item.authorAvater} alt="" />
                      <div className="badge bg-danger position-absolute px-2 py-1"># {item.id}</div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="#">{item.authorName}<i className="bi bi-patch-check-fill ms-2 text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified"></i></a><a className="author d-block fz-14 hover-primary text-truncate" href="#">@ {item.authorUsername}</a>
                      <div className="price-bid d-flex align-items-center mt-3">
                        <div className="price me-3">
                          <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">{item.totalPrice}</h6>
                        </div>
                        <p className="mb-0 lh-1 d-flex align-items-center fz-14" style={{color: '#8480AE'}} ><i className="me-1 bi bi-lightning"></i>{item.totalItems} Items</p>
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

export default TopBuyerArea;