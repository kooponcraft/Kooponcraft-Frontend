
'use client'

import React, { useState } from 'react';
import discover_data from '@/data/discover-nft';
import Link from 'next/link';


const AuthorArea = () => {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }


  const [active, setActive] = useState(null)
  // handleActive function 
  const handleActive = (id: any) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }      
  }
 
  

  const [count, setCount] = useState(4);
  const [noMorePost, setNoMorePost] = useState(false);
  const countSlice = discover_data.slice(0, count);

  const handleLoadMore = () => {
    setCount(count + 2);
    if (count >= discover_data.length) {
      setNoMorePost(true);
    }
  }


  return (
    <>
      <div className="share-modal modal fade" id="shareModal" tabIndex={-1} aria-labelledby="shareModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-4 text-center">
              <h4 className="mb-4" id="shareModalLabel">Share this author</h4>
              <div className="d-flex align-items-center justify-content-center">
                <a className="mx-2" href="#">
                  <img src="/assets/img/core-img/icons8-facebook.svg" alt="" />
                </a>
                <a className="mx-2" href="#">
                  <img src="/assets/img/core-img/icons8-twitter.svg" alt="" />
                </a>
                <a className="mx-2" href="#">
                  <img src="/assets/img/core-img/icons8-instagram.svg" alt="" />
                </a>
                <a className="mx-2" href="#">
                  <img src="/assets/img/core-img/icons8-slack.svg" alt="" />
                </a>
                <a className="mx-2" href="#">
                  <img src="/assets/img/core-img/icons8-player.svg" alt="" />
                </a>
              </div>
              <button className="btn btn-danger btn-sm rounded-pill mt-4" type="button" data-bs-dismiss="modal" aria-label="Close"><i className="me-1 bi bi-x-lg"></i>Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="share-modal modal fade" id="copylinkModal" tabIndex={-1} aria-labelledby="copylinkLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-4 text-center">
              <h4 className="mb-4" id="copylinkLabel">Copy author link</h4>
              <p className="user-select-all mb-0 border border-2 p-3 rounded">jamil</p>
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

      <div className="author-top-content bg-img bg-overlay" style={{ backgroundImage: `url(/assets/img/bg-img/44.jpg)` }}>
        <div className="container">
          <div className="card border-0 bg-transparent">
            <div className="card-body p-4 p-sm-5">
              <div className="row g-4 g-lg-5 align-items-center">
                <div className="col-7 col-sm-4 col-lg-3">
                  <div className="author-thumbnail"><img className="rounded" src="/assets/img/bg-img/u1.jpg" alt="" /><i className="bi bi-patch-check-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified"></i></div>
                </div>
                <div className="col-12 col-sm-8 col-lg-9">
                  <div className="author-data">
                    <h3 className="mb-2 author-name text-white">Designing World<a className="btn btn-warning btn-sm rounded-pill align-top ms-2 px-3 py-1" href="#">Follow</a></h3>
                    <div className="btn btn-minimal d-inline-block mb-3 text-white hover-warning">@designing_world</div>
                    <p className="w-75 mb-0" style={{ color: '#8084AE' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quaerat quis similique natus rem.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown author-dd">
              <button className="dropdown-toggle" id="dd9887" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>

              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd9887">
                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#shareModal"><i className="me-1 bi bi-share"></i>Share</a></li>
                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#copylinkModal"><i className="me-1 bi bi-box-arrow-up-right"></i>Copy Link</a></li>
                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#reportModal"><i className="me-1 bi bi-flag"></i>Report</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="author-content-wrap mt-70">
        <div className="container">
          <div className="row g-4 g-xl-5 justify-content-center">
            <div className="col-12 col-sm-9 col-lg-4">
              <div className="card author-sidebar-card shadow-sm">
                <div className="card-body p-4 p-md-5 p-lg-4 p-xl-5">
                  <h5 className="mb-3">About this author</h5>
                  <p style={{ color: '#8084AE' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto ipsum quas, eum eius sint esse, omnis quis voluptas est dicta earum dolore recusandae autem asperiores, sed non. Maxime, eius!</p>
                  <div className="meta-data d-flex align-items-center mt-4">
                    <h6 className="mb-0 border-end text-center pe-3 me-3"><span className="counter">438 </span><br /> Items</h6>
                    <h6 className="mb-0 border-end text-center pe-3 me-3"><span className="counter">861 </span><br /> Owners</h6>
                    <h6 className="mb-0 text-center"><span className="counter">3510 </span><br /> Followers</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="row g-4 align-items-center justify-content-between">
                <div className="col-12 col-sm-6">
                  <select className="filter-select bg-gray w-100">
                    <option selected value="1">Recently Added</option>
                    <option value="2">Recently Sold</option>
                    <option value="3">Ending Soon</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6">
                  <select className="filter-select2 bg-gray w-100">
                    <option selected value="1">Art</option>
                    <option value="2">Cards</option>
                    <option value="3">Collectibles</option>
                    <option value="4">Domain</option>
                    <option value="5">Music</option>
                    <option value="6">Memes</option>
                    <option value="7">Photos</option>
                    <option value="8">Sports</option>
                    <option value="9">Videos</option>
                    <option value="10">Vitual Worlds</option>
                  </select>
                </div>
              </div>
              <div className="mb-4 d-block"> </div>
              <div className="row g-4">

                {countSlice.map((item, i) => (
                  <div key={i} className="col-12 col-sm-6 col-lg-6">
                    <div className="nft-card card shadow-sm">
                      <div className="card-body">
                        <div className="img-wrap"><img src={item.image} alt="" />
                          {item.badgeInfo[0].text &&
                            <div className="badge bg-primary position-absolute" >
                              <img src={item.badgeInfo[0].icon} alt="" />
                              {item.badgeInfo[0].text}
                            </div>
                          } 

                          <div className="dropdown">

                            <button
                              className={`btn dropdown-toggle rounded-pill shadow-sm ${active === item.id ? 'show' : ''}`}
                              id="dropdown17e"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              onClick={() => handleActive(item.id)}
                            >
                              <i className="bi bi-three-dots-vertical"></i>
                            </button>

                            <ul
                              className={`dropdown-menu dropdown-menu-end ${active === item.id ? 'show' : ''}`}
                              style={{
                                position: 'absolute', 
                                inset: '0px 0px auto auto',
                                margin: '0px',
                                transform: 'translate(0px, 34px)',
                              }}
                              aria-labelledby="dropdown17e"
                            >
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="me-1 bi bi-share"></i>Share
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="me-1 bi bi-flag"></i>Report
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="me-1 bi bi-bookmark"></i>
                                  Bookmark
                                </a>
                              </li>
                            </ul>

                          </div>

                        </div>

                        <div className="row gx-2 align-items-center mt-3">
                          <div className="col-8" style={{color: '#8084AE'}}><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>{item.topLevelInfo[0].text}</span></div>
                          <div className="col-4 text-end">
                            <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                          </div>
                        </div>

                        <div className="row gx-2 align-items-center mt-2">
                          <div className="col-8">
                            <div className="name-info d-flex align-items-center">
                              <div className="author-img position-relative"><img className="shadow" src="/assets/img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" href="/item-details" data-bs-toggle="tooltip" data-bs-placement="top" title="Monkey Arts #114">{item.title}</Link>
                              <Link className="author d-block fz-12 hover-primary text-truncate" href="/author">@ {item.authorName}</Link></div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="price text-end" style={{color: '#8084AE'}}><span className="fz-12 d-block">{item.priceText}</span>
                              <h6 className="mb-0">{item.currentPrice}</h6>
                            </div>
                          </div>
                        </div>

                        <div className="row gx-2 align-items-center mt-3">
                          <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                          <div className="col-6 text-end"><Link className="btn btn-minimal btn-sm hover-primary" href="/activity"><i className="bi bi-activity me-1"></i>Activity</Link></div>
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
        </div>
      </div>
    </>
  );
};

export default AuthorArea;