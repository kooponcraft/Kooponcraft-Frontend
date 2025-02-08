
'use client'

import AppImage from "@/components/common/AppImage";
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';

const CreateNewArea = () => {

  const selectHandler = (e: any) => { };



  return (
    <>
      <div className="create-new-wrapper">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className="col-12 col-lg-8">

              <div className="create-new-form border shadow-sm p-4 p-sm-5">
                <h2 className="mb-4">Create new NFT</h2>
                <form action="#">
                  <div className="row align-items-center">
                    <div className="col-12">
                      <div className="form-group mb-4">
                        <label className="mb-2 fz-16" htmlFor="formFileMultiple">Upload Files</label>
                        <input className="form-control bg-transparent" id="formFileMultiple" type="file" multiple />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-4">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" id="inlineRadio1" type="radio" name="inlineRadioOptions" value="option1" defaultChecked />
                          <label className="form-check-label" htmlFor="inlineRadio1">Fixed price</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" id="inlineRadio2" type="radio" name="inlineRadioOptions" value="option2" />
                          <label className="form-check-label" htmlFor="inlineRadio2">Unlock Purchased</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" id="inlineRadio3" type="radio" name="inlineRadioOptions" value="option3" />
                          <label className="form-check-label" htmlFor="inlineRadio3">Open for bids</label>
                        </div>

                      </div>


                    </div>
                    <div className="col-12">
                      <div className="form-group mb-4">
                        <label className="mb-2 fz-16" htmlFor="title">Title</label>
                        <input className="form-control" id="title" type="text" placeholder="Macaw Bird" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-4">
                        <label className="mb-2 fz-16" htmlFor="description">Description</label>
                        <input className="form-control" id="description" type="text" placeholder="Write short description" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group mb-4">
                        <label className="mb-2 fz-16" htmlFor="price">Price</label>
                        <input className="form-control" id="price" type="text" placeholder="0.324 ETH" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group mb-4">

                        <label className="mb-2 fz-16" htmlFor="catagories">Catagory</label> 

                        <NiceSelect
                          className="filter-select bg-gray w-100 d-flex align-items-center"

                          options={[
                            { value: "Art", text: "Art" },
                            { value: "01", text: "Cards" },
                            { value: "02", text: "Collectibles" },
                            { value: "03", text: "Domain" },
                            { value: "04", text: "Music" },
                            { value: "05", text: "Memes" },
                            { value: "06", text: "Photos" },
                            { value: "07", text: "Sports" },
                            { value: "08", text: "Videos" },
                            { value: "09", text: "Vitual Worlds" },
                          ]}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          placeholder="Select an option"
                          name="myNiceSelect"
                        />


                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group mb-4">
                        <label className="mb-2 fz-16" htmlFor="startingDate">Starting Date</label>
                        <input className="form-control" id="startingDate" type="date" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group mb-4">
                        <label className="mb-2 fz-16" htmlFor="endingDate">Ending Date</label>
                        <input className="form-control" id="endingDate" type="date" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="form-group mb-4">
                        <label className="mb-2 fz-16" htmlFor="royality">Royality</label>
                        <input className="form-control" id="royality" type="text" placeholder="5%" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="form-group mb-4">
                        <label className="mb-2 fz-16" htmlFor="noOfcopies">No of copies</label>
                        <input className="form-control" id="noOfcopies" type="text" placeholder="13" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="form-group mb-4">
                        <label className="mb-2 fz-16" htmlFor="size">Size</label>
                        <input className="form-control" id="size" type="text" placeholder="20MB" />
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="form-check mb-4 mb-md-0">
                        <input className="form-check-input" id="rememberMe" type="checkbox" value="" defaultChecked />
                        <label className="form-check-label" htmlFor="rememberMe">I agree to all terms &amp; conditions.</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <button className="btn btn-primary rounded-pill w-100" type="submit">Create</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-4">

              <div className="nft-card card shadow-sm">
                <div className="card-body">
                  <div className="img-wrap"><AppImage src="/assets/img/bg-img/17.jpg" alt="" />

                    <div className="badge bg-dark position-absolute"><AppImage src="/assets/img/core-img/fire.png" alt="" />Hot bid</div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-8" style={{ color: '#8084AE' }}><span className="d-block fz-12"><i className="bi bi-arrow-up"></i>Hightest bid 0.324 ETH</span></div>
                    <div className="col-4 text-end">
                      <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-2">
                    <div className="col-8">
                      <div className="name-info d-flex align-items-center">
                        <div className="author-img position-relative"><AppImage className="shadow" src="/assets/img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success"></i></div>
                        <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" href="/item-details" data-bs-toggle="tooltip" data-bs-placement="top" title="Macaw Bird">Macaw Bird</Link><Link className="author d-block fz-12 hover-primary text-truncate" href="/author">@creative_art</Link></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                        <h6 className="mb-0">0.324 ETH</h6>
                      </div>
                    </div>
                  </div>

                  <div className="row gx-2 align-items-center mt-3">
                    <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="#">Place bid</a></div>
                    <div className="col-6 text-end"><Link className="btn btn-minimal btn-sm hover-primary" href="/activity"> <i className="bi bi-activity me-1"></i>Activity</Link></div>
                  </div>
                </div>
              </div>
              <h5 className="mb-0 mt-3 text-center"><i className="bi bi-eye me-1"></i>Live Preview</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewArea;