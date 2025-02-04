

'use client'

import Link from 'next/link';
import React from 'react';

const NotificationsArea = () => {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  return (
    <>
      <div className="create-new-button">
        <Link className="shadow-lg btn btn-warning"
          href="/create-new"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Create New NFT">
          <i className="fz-18 bi bi-plus-lg"></i>
        </Link>
      </div>
      <div className="admin-wrapper">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-lg-10">

              <nav>
                <div className="nav nav-tabs border-0 mb-3" id="nav-tab" role="tablist">
                  <button className="nav-link rounded-pill mb-0 px-3 py-1 border-0 shadow-sm me-1 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Today</button>
                  <button className="nav-link rounded-pill mb-0 px-3 py-1 border-0 shadow-sm me-1" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">7 days</button>
                  <button className="nav-link rounded-pill mb-0 px-3 py-1 border-0 shadow-sm me-1" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">All</button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div className="notification-content-wrap">
                    <ul className="notification-list ps-0 mb-0">
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!<span className="badge bg-dark fz-12 rounded-pill ms-auto">New</span></a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.<span className="badge bg-dark fz-12 rounded-pill ms-auto">New</span></a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.<span className="badge bg-dark fz-12 rounded-pill ms-auto">New</span></a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                    </ul>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div className="notification-content-wrap">
                    <ul className="notification-list ps-0 mb-0">
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                    </ul>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <div className="notification-content-wrap">
                    <ul className="notification-list ps-0 mb-0">
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                      <li><a href="#"><i className="me-1 bi bi-percent"></i>You have an offer!</a></li>
                      <li><a href="#"><i className="bg-info me-1 bi bi-tags"></i>Congratulations! You sale an item.</a></li>
                      <li><a href="#"><i className="bg-danger me-1 bi bi-gift"></i>January freebies have arrived.</a></li>
                      <li><a href="#"><i className="bg-warning me-1 bi bi-star"></i>A new rating has been received.</a></li>
                    </ul>
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

export default NotificationsArea;