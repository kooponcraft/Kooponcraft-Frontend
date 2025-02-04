"use client";

import featured_data from "@/data/featured-nft";
import Link from "next/link";
import React, { useState } from "react";

const FeaturedItemsArea = () => {
	const [active, setActive] = useState(null);
	// handleActive function
	const handleActive = (id: any) => {
		if (active === id) {
			setActive(null);
		} else {
			setActive(id);
		}
	};

	const [count, setCount] = useState(12);
	const [noMorePost, setNoMorePost] = useState(false);
	const countSlice = featured_data.slice(0, count);

	const handleLoadMore = () => {
		setCount(count + 4);
		if (count >= featured_data.length) {
			setNoMorePost(true);
		}
	};

	return (
		<>
			<div className="featured-items-wrapper">
				<div className="container">
					<div className="row g-4 justify-content-center">
						{countSlice.map((item, i) => (
							<div key={i} className="col-12 col-sm-6 col-lg-4 col-xl-3">
								<div className="nft-card card featured-card border-0 bg-gray">
									<div className="img-wrap">
										<img src={item.image} alt="" />

										{item.badgeIcon && (
											<div
												className={`badge bg-${item.badgeColor} position-absolute`}
											>
												<img src={item.badgeIcon} alt="" />
												{item.badgeText}
											</div>
										)}

										<div className="dropdown">
											<button
												onClick={() => handleActive(item.id)}
												className={`btn dropdown-toggle rounded-pill shadow-sm ${
													active === item.id ? "show" : ""
												}`}
												id="dgd987"
												type="button"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<i className="bi bi-three-dots-vertical"></i>
											</button>

											<ul
												className={`dropdown-menu dropdown-menu-end ${
													active === item.id ? "show" : ""
												}`}
												style={{
													position: "absolute",
													inset: "0px 0px auto auto",
													margin: "0px",
													transform: "translate(0px, 34px)",
												}}
												aria-labelledby="dgd987"
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
														<i className="me-1 bi bi-bookmark"></i>Bookmark
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="card-body">
										<div className="row gx-2 align-items-center" style={{color: '#8480AE'}}>
											<div className="col-8">
												<span className="d-block fz-12">
													<i className="bi bi-arrow-up"></i>
													{item.topLevelText}
												</span>
											</div>
											<div className="col-4 text-end">
												<button className="wishlist-btn active" type="button">
													<i className="bi"></i>
												</button>
											</div>
										</div>

										<div className="row gx-2 align-items-center mt-2">
											<div className="col-8">
												<div className="name-info d-flex align-items-center">
													<div className="author-img position-relative">
														<img
															className="shadow"
															src={item.authorAvater}
															alt=""
														/>
														<i className="bi bi-check position-absolute bg-success"></i>
													</div>
													<div className="name-author">
														<Link
															className="name d-block hover-primary fw-bold text-truncate"
															href="/item-details"
															data-bs-toggle="tooltip"
															data-bs-placement="top"
															title="Cowboy Riding Bull Nature"
														>
															{item.title}
														</Link>
														<Link
															className="author d-block fz-12 hover-primary text-truncate"
															href="/author"
														>
															@ {item.authorName}
														</Link>
													</div>
												</div>
											</div>
											<div className="col-4">
												<div className="price text-end" style={{color: '#8480AE'}}>
													<span className="fz-12 d-block">
														{item.priceText}
													</span>
													<h6 className="mb-0">{item.currentPrice}</h6>
												</div>
											</div>
										</div>

										<div className="row gx-2 align-items-center mt-3">
											<div className="col-6">
												<a
													className="btn btn-primary rounded-pill btn-sm"
													href="#"
												>
													Place Bid
												</a>
											</div>
											<div className="col-6 text-end">
												<Link
													className="btn btn-minimal btn-sm hover-primary"
													href="/activity"
												>
													{" "}
													<i className="bi bi-activity me-1"></i>Activity
												</Link>
											</div>
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

export default FeaturedItemsArea;
