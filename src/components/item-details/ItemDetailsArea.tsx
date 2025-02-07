
'use client'
import AppImage from "@/components/common/AppImage";

import Link from 'next/link';
import React from 'react';

import dynamic from 'next/dynamic';
const MyTimer = dynamic(() => import('../common/Timer'), { ssr: false });


const ItemDetailsArea = () => {

  return (
    <>

      <div className="share-modal modal fade" id="shareModal" tabIndex={-1} aria-labelledby="shareModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-4 text-center">
              <h4 className="mb-4" id="shareModalLabel">Share this item</h4>
              <div className="d-flex align-items-center justify-content-center"><a className="mx-2" href="#"><AppImage src="/assets/img/core-img/icons8-facebook.svg" alt="" /></a><a className="mx-2" href="#"><AppImage src="/assets/img/core-img/icons8-twitter.svg" alt="" /></a><a className="mx-2" href="#"><AppImage src="/assets/img/core-img/icons8-instagram.svg" alt="" /></a><a className="mx-2" href="#"><AppImage src="/assets/img/core-img/icons8-slack.svg" alt="" /></a><a className="mx-2" href="#"><AppImage src="/assets/img/core-img/icons8-player.svg" alt="" /></a></div>
              <button className="btn btn-danger btn-sm rounded-pill mt-4" type="button" data-bs-dismiss="modal" aria-label="Close"><i className="me-1 bi bi-x-lg"></i>Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="share-modal modal fade" id="copylinkModal" tabIndex={-1} aria-labelledby="copylinkLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-4 text-center">
              <h4 className="mb-4" id="copylinkLabel">Copy item link</h4>
              <p className="user-select-all mb-0 border border-2 p-3 rounded">https://themeforest.net/item/affan-pwa-mobile-html-template/29715548</p>
              <button className="btn btn-danger btn-sm rounded-pill mt-4" type="button" data-bs-dismiss="modal" aria-label="Close"><i className="me-1 bi bi-x-lg"></i>Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="share-modal modal fade" id="reportModal" tabIndex={-1} aria-labelledby="reportModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-4 text-center">
              <h4 className="mb-4" id="reportModalLabel">Why are you reporting?</h4>
              <form action="#">
                <textarea className="form-control mb-3" id="reportText" name="reportMessage" placeholder="Write your complaint..."></textarea>
                <div className="d-flex align-items-center justify-content-between">
                  <button className="btn btn-danger btn-sm rounded-pill" type="button" data-bs-dismiss="modal" aria-label="Close"><i className="me-1 bi bi-x-lg"></i>Close</button>
                  <button className="btn btn-primary btn-sm rounded-pill" type="submit">Report</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="item-details-wrap">
        <div className="container">
          <div className="row g-4 g-lg-5 justify-content-center">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="item-big-thumb"><AppImage src="/assets/img/bg-img/4.jpg" alt="" data-action="zoom" /></div>
            </div>

            <div className="col-12 col-md-9 col-lg-6">
              <div className="item-details-content mt-5 mt-lg-0">
                <div className="dropdown item-details-dd">
                  <button className="dropdown-toggle" id="dwd987" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dwd987">
                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#shareModal"><i className="me-1 bi bi-share"></i>Share</a></li>
                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#copylinkModal"><i className="me-1 bi bi-box-arrow-up-right"></i>Copy Link</a></li>
                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#reportModal"><i className="me-1 bi bi-flag"></i>Report</a></li>
                  </ul>
                </div>
                <div className="d-flex flex-wrap align-items-center">

                  <button className="btn btn-dark btn-sm rounded-pill px-3 wishlist-btn" type="button"><i className="bi"></i><span className="ms-1">98</span></button>

                  <div className="badge border px-3 py-2 rounded-pill text-dark fz-14 d-inline-block ms-1 ms-sm-4"><i className="me-1 bi bi-eye"></i>8,634 people views this</div>
                </div>
                <h2 className="my-3">Diamond Horse Animals #47</h2>
                <div className="d-flex align-items-center mb-4">
                  <div className="author-img position-relative me-3"><AppImage className="shadow" src="/assets/img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-primary"></i></div>
                  <div className="name-author"><span className="d-block fz-14">Created by</span><a className="author d-block fz-16 hover-primary text-truncate" href="#">@creative_world</a></div>
                </div>
                <div className="border-top w-75 mb-4"></div>

                <p className="lh-1">Bid ending soon</p> 
                
                <MyTimer />

                <div className="row align-items-end">
                  <div className="col-6 col-sm-4">
                    <p className="mb-2">Floor price</p>
                    <h5 className="text-center mb-0 border border-2 px-3 py-2 border-primary d-inline-block rounded text-primary w-100">7.803 ETH </h5>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-5"><a className="btn btn-primary rounded-pill w-100" href="#"><AppImage className="me-1" src="/assets/img/core-img/fire.png" alt="" />Place a bid</a></div>
                </div>
                <div className="border-top w-75 my-4"></div>
                <div className="short-description">
                  <h5>Short Description</h5>
                  <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aut veniam consectetur magnam libero, natus eius numquam reprehenderit hic at, excepturi repudiandae magni optio odio doloribus?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block w-100 mb-70"></div>
      <div className="kooponcraft-tab-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab--area bg-gray p-4 p-lg-5">               



                <ul className="nav nav-tabs" id="kooponcraftTab" role="tablist">
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient active" id="tab--1" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Details</a></li>
                  <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--2" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Activity</a></li>
                </ul>
                <div className="tab-content">

                  <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                    <div className="card border-0">
                      <div className="card-body p-4" style={{color: '#8084AE'}}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor modi ut, debitis delectus deserunt ipsa ullam necessitatibus expedita laboriosam mollitia veniam rerum error iste, tempora vitae. Quasi totam exercitationem odit.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quisquam consectetur aliquid accusantium aut. A, veritatis voluptates. Blanditiis ut repellat, reprehenderit rem ab cum cumque veniam nulla officiis, quo maxime facilis aut eius labore quisquam nemo ea illum! Reprehenderit officia illo ipsa.</p>
                        <ul>
                          <li>Bootstrap 5</li>
                          <li>Vanilla JS </li>
                          <li>Creative Design</li>
                        </ul>
                        <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae saepe eveniet optio minima, minus quas distinctio iste laudantium in voluptates, corporis labore. Debitis saepe et laudantium, dolor necessitatibus eius porro reiciendis?</p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                    <div className="table-responsive border shadow-sm activity-table item_table">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <th scope="row"><Link className="btn btn-minimal text-dark hover-primary" href="/item-details"> <AppImage className="rounded me-1" src="/assets/img/bg-img/5.jpg" alt="" />NFT Logo</Link></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                            <td><Link className="btn btn-minimal text-dark hover-primary" href="/author"><AppImage className="rounded-pill me-1" src="/assets/img/bg-img/u1.jpg" alt="" />@creative_art</Link></td>
                            <td><i className="bi bi-cart"></i>Sales</td>
                            <td><i className="bi bi-clock"></i>29 min ago</td>
                          </tr>
                          <tr>
                            <th scope="row"><Link className="btn btn-minimal text-dark hover-primary" href="/item-details"> <AppImage className="rounded me-1" src="/assets/img/bg-img/6.jpg" alt="" />Pixel Art</Link></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                            <td><Link className="btn btn-minimal text-dark hover-primary" href="/author"><AppImage className="rounded-pill me-1" src="/assets/img/bg-img/u2.jpg" alt="" />@designing_world</Link></td>
                            <td><i className="bi bi-percent"></i>Offer</td>
                            <td><i className="bi bi-clock"></i>1h ago</td>
                          </tr>
                          <tr>
                            <th scope="row"><Link className="btn btn-minimal text-dark hover-primary" href="/item-details"> <AppImage className="rounded me-1" src="/assets/img/bg-img/7.jpg" alt="" />Funny Pigs</Link></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                            <td><Link className="btn btn-minimal text-dark hover-primary" href="/author"><AppImage className="rounded-pill me-1" src="/assets/img/bg-img/u3.jpg" alt="" />@art_world</Link></td>
                            <td><i className="bi bi-patch-exclamation"></i>Alert</td>
                            <td><i className="bi bi-clock"></i>2h ago</td>
                          </tr>
                          <tr>
                            <th scope="row"><Link className="btn btn-minimal text-dark hover-primary" href="/item-details"> <AppImage className="rounded me-1" src="/assets/img/bg-img/8.jpg" alt="" />Fancy Car 2</Link></th>
                            <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                            <td><Link className="btn btn-minimal text-dark hover-primary" href="/author"><AppImage className="rounded-pill me-1" src="/assets/img/bg-img/u4.jpg" alt="" />@fancy_car</Link></td>
                            <td><i className="bi bi-cart"></i>Sales</td>
                            <td><i className="bi bi-clock"></i>3h ago</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ItemDetailsArea;