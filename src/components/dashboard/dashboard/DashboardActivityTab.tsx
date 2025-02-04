
'use client'
import Image from "next/image";

import React from 'react'; 


const DashboardActivityTab = () => {
  
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  return (
    <>
      <div className="col-12 col-xxl-6">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
              <h5>Activity</h5> 
              <nav>
                <div className="nav nav-tabs border-0 mb-3" id="nav-tab" role="tablist">
                  <button className="nav-link rounded-pill mb-0 px-3 py-1 border-0 shadow-sm me-1 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Today</button>
                  <button className="nav-link rounded-pill mb-0 px-3 py-1 border-0 shadow-sm me-1" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">7 days</button>
                  <button className="nav-link rounded-pill mb-0 px-3 py-1 border-0 shadow-sm me-1" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">30 days</button>
                </div>
              </nav>

            </div>

            <div className="tab-content" id="nav-tabContent">

              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="table-responsive border shadow-sm dashboard-table activity-table item_table">
                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                        <td><i className="bi bi-cart"></i>Sales</td>
                        <td><i className="bi bi-clock"></i>29 min ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                        <td><i className="bi bi-percent"></i>Offer</td>
                        <td><i className="bi bi-clock"></i>1h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                        <td><i className="bi bi-patch-exclamation"></i>Alert</td>
                        <td><i className="bi bi-clock"></i>2h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                        <td><i className="bi bi-cart"></i>Sales</td>
                        <td><i className="bi bi-clock"></i>3h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                        <td><i className="bi bi-cart"></i>Sales</td>
                        <td><i className="bi bi-clock"></i>12h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                        <td><i className="bi bi-percent"></i>Offer</td>
                        <td><i className="bi bi-clock"></i>17h ago</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="table-responsive border shadow-sm activity-table item_table">
                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                        <td><i className="bi bi-cart"></i>Sales</td>
                        <td><i className="bi bi-clock"></i>29 min ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                        <td><i className="bi bi-percent"></i>Offer</td>
                        <td><i className="bi bi-clock"></i>1h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                        <td><i className="bi bi-patch-exclamation"></i>Alert</td>
                        <td><i className="bi bi-clock"></i>2h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                        <td><i className="bi bi-cart"></i>Sales</td>
                        <td><i className="bi bi-clock"></i>3h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                        <td><i className="bi bi-cart"></i>Sales</td>
                        <td><i className="bi bi-clock"></i>12h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                        <td><i className="bi bi-percent"></i>Offer</td>
                        <td><i className="bi bi-clock"></i>17h ago</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div className="table-responsive border shadow-sm activity-table item_table">
                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                        <td><i className="bi bi-cart"></i>Sales</td>
                        <td><i className="bi bi-clock"></i>29 min ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                        <td><i className="bi bi-percent"></i>Offer</td>
                        <td><i className="bi bi-clock"></i>1h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                        <td><i className="bi bi-patch-exclamation"></i>Alert</td>
                        <td><i className="bi bi-clock"></i>2h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                        <td><i className="bi bi-cart"></i>Sales</td>
                        <td><i className="bi bi-clock"></i>3h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                        <td><i className="bi bi-cart"></i>Sales</td>
                        <td><i className="bi bi-clock"></i>12h ago</td>
                      </tr>
                      <tr>
                        <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="#"> <Image layout="fill" className="rounded me-1" src="/assets/img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                        <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                        <td><i className="bi bi-percent"></i>Offer</td>
                        <td><i className="bi bi-clock"></i>17h ago</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardActivityTab;