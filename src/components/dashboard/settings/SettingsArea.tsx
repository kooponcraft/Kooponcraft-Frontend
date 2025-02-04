
'use client'

import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';

const SettingsArea = () => {

  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  const selectHandler = (e: any) => { };




  return (
    <>

      <div className="create-new-button">
        <Link className="shadow-lg btn btn-warning" href="/create-new" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg"></i>
        </Link>
      </div>
      <div className="admin-wrapper">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-lg-10 col-xl-9 col-xxl-8">
              <ul className="nav nav-tabs border-0 mb-3" role="tablist">
                <li className="nav-item"><a className="position-relative nav-link mb-0 rounded-pill border-0 me-1 active" id="tab--1" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">General</a></li>
                <li className="nav-item"><a className="nav-link mb-0 rounded-pill border-0 me-1" id="tab--2" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Others</a></li>
              </ul>
              <div className="tab-content">

                <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                  <div className="card">
                    <div className="card-body p-4 p-sm-5">
                      <form onSubmit={e => e.preventDefault()}>
                        <div className="row g-4">
                          <div className="col-12">
                            <input className="form-control bg-gray border-0" type="text" name="fullName" placeholder="Full Name" />
                          </div>
                          <div className="col-12">
                            <input className="form-control bg-gray border-0" type="email" name="email" placeholder="Email Address" />
                          </div>
                          <div className="col-12">
                            <input className="form-control bg-gray border-0" type="text" name="username" placeholder="Username" />
                          </div>
                          <div className="col-12">
                            <input className="form-control bg-gray border-0" type="password" name="password" placeholder="Password" />
                          </div>
                          <div className="col-12">

                            <NiceSelect
                              className="filter-select bg-gray w-100 d-flex align-items-center"
                              options={[
                                { value: "Timezone", text: "Timezone" },
                                { value: "01", text: "UTC +0" },
                                { value: "02", text: "UTC +1" },
                                { value: "03", text: "UTC +2" },
                                { value: "04", text: "UTC +3" },
                                { value: "05", text: "UTC +4" },
                                { value: "06", text: "UTC +5" },
                                { value: "07", text: "UTC +6" },
                                { value: "08", text: "UTC +7" },
                                { value: "09", text: "UTC +8" },
                                { value: "10", text: "UTC +9" },
                                { value: "11", text: "UTC +10" },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              placeholder="Select an option"
                              name="myNiceSelect"
                            />


                          </div>
                          <div className="col-12"> 
                            <NiceSelect
                              className="filter-select bg-gray w-100 d-flex align-items-center"
                              options={[
                                { value: "Timezone", text: "Week starts on" },
                                { value: "01", text: "Saturday" },
                                { value: "02", text: "Sunday" },
                                { value: "03", text: "Monday" }, 
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              placeholder="Select an option"
                              name="myNiceSelect"
                            />


                          </div>
                          <div className="col-12">
                            <button className="btn btn-primary w-100 rounded-pill" type="submit"><i className="bi bi-sd-card-fill me-1"></i>Save changes</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                  <div className="card">
                    <div className="card-body p-4 p-sm-5" style={{ color: '#8084AE' }}>
                      <form onSubmit={e => e.preventDefault()}>
                        <div className="row g-4">
                          <div className="col-12 col-md-4">
                            <div className="form-check">
                              <input className="form-check-input" id="liveBids" type="checkbox" value="" defaultChecked />
                              <label className="form-check-label" htmlFor="liveBids">Live Bids</label>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-check">
                              <input className="form-check-input" id="onSale" type="checkbox" value="" />
                              <label className="form-check-label" htmlFor="onSale">On Sale</label>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-check">
                              <input className="form-check-input" id="comingSoon" type="checkbox" value="" />
                              <label className="form-check-label" htmlFor="comingSoon">Coming Soon</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check form-switch mb-3">
                              <input className="form-check-input" id="switch1" type="checkbox" role="switch" />
                              <label className="form-check-label" htmlFor="switch1">Enable Notifications</label>
                            </div>
                            <div className="form-check form-switch mb-3">
                              <input className="form-check-input" id="switch2" type="checkbox" role="switch" defaultChecked />
                              <label className="form-check-label" htmlFor="switch2">Enable Chats Sounds</label>
                            </div>
                            <div className="form-check form-switch">
                              <input className="form-check-input" id="switch3" type="checkbox" role="switch" />
                              <label className="form-check-label" htmlFor="switch3">Enable Lazyload</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <textarea className="form-control" name="message" cols={10} rows={5} placeholder="Short Description"></textarea>
                          </div>
                          <div className="col-12">
                            <button className="btn btn-primary w-100 rounded-pill" type="submit"><i className="bi bi-sd-card-fill me-1"></i>Save changes</button>
                          </div>
                        </div>
                      </form>
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

export default SettingsArea;