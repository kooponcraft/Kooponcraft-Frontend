"use client";

import AppImage from "@/components/common/AppImage";
import React, { useState } from "react";
import featured_data from "@/data/featured-nft";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight, BsThreeDotsVertical, BsShare, BsFlag, BsBookmark, BsCheck, BsActivity } from "react-icons/bs";

const FeaturedHomeOne = () => {
	const [active, setActive] = useState(null);
	// handleActive function
	const handleActive = (id: any) => {
		if (active === id) {
			setActive(null);
		} else {
			setActive(id);
		}
	};

	return (
		<>
			<div className="featured-nfts-wrap">
				<div className="container mx-auto">
					<div className="row">
						<div className="col-12 col-sm-9 col-lg-6">
							<div className="section-heading">
								<h2 className="mb-0">Editors Picks</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="container mx-auto">
					<div className="row">
						<div className="col-12">
							<div className="relative" id="tns1-ow">
								<div
									className="absolute inset-0 flex justify-between items-center"
									aria-label="Carousel Navigation"
									tabIndex={0}
								>
									<button
										className="slide-prev"
										type="button"
										data-controls="prev"
										tabIndex={-1}
										aria-controls="tns1"
									>
										<BsArrowLeft />
									</button>
									<button
										className="slide-next"
										type="button"
										data-controls="next"
										tabIndex={-1}
										aria-controls="tns1"
									>
										<BsArrowRight />
									</button>
								</div>

								<Swiper
									loop={true}
									slidesPerView={4}
									spaceBetween={30}
									modules={[Autoplay, Navigation]}
									speed={3000}
									navigation={{
										nextEl: ".slide-next",
										prevEl: ".slide-prev",
									}}
									breakpoints={{
										"1400": {
											slidesPerView: 4,
										},
										"1200": {
											slidesPerView: 3,
										},
										"992": {
											slidesPerView: 3,
										},
										"768": {
											slidesPerView: 3,
										},
										"480": {
											slidesPerView: 1,
										},
										"320": {
											slidesPerView: 1,
										},
										"0": {
											slidesPerView: 1,
										},
									}}
									className="featured-nfts-slide"
								>
									{featured_data.map((item, i) => (
										<SwiperSlide key={i}>
											<div className="nft-card card featured-card border-0 bg-gray">
												<div className="img-wrap relative">
													<AppImage src={item.image} alt="" />
													{item.badgeIcon ? (
														<div className="badge bg-primary absolute">
															<AppImage src={item.badgeIcon} alt="" />
															{item.badgeText}
														</div>
													) : null}

													<div className="dropdown">
														<button
															className={`btn dropdown-toggle rounded-pill shadow-sm ${
																active === item.id ? "show" : ""
															}`}
															id="dropdown17e"
															type="button"
															data-bs-toggle="dropdown"
															aria-expanded="false"
															onClick={() => handleActive(item.id)}
														>
															<BsThreeDotsVertical />
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
															aria-labelledby="dropdown17e"
														>
															<li>
																<a className="dropdown-item" href="#">
																	<BsShare className="me-1" />Share
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="#">
																	<BsFlag className="me-1" />Report
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="#">
																	<BsBookmark className="me-1" />
																	Bookmark
																</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="card-body">
													<div className="row gx-2 align-items-center">
														<div className="col-8">
															<span
																className="d-block fz-12"
																style={{ color: "#8480AE" }}
															>
																<i className={`bi ${item.topLevelIcon}`} />
																{item.topLevelText}
															</span>
														</div>
														<div className="col-4 text-end">
															<button
																className="wishlist-btn active"
																type="button"
															>
																<i className="bi"></i>
															</button>
														</div>
													</div>

													<div className="row gx-2 align-items-center mt-2">
														<div className="col-8">
															<div className="name-info d-flex align-items-center">
																<div className="author-img relative">
																	<AppImage
																		className="shadow"
																		src={item.authorAvater}
																		alt=""
																	/>
																	<BsCheck className="absolute bg-success" />
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
																		@{item.authorName}
																	</Link>
																</div>
															</div>
														</div>
														<div className="col-4">
															<div className="price text-end">
																<span className="fz-12 d-block" style={{color: "#8480AE"}}>
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
																{item.buttonGroup[0].leftButtonText}
															</a>
														</div>
														<div className="col-6 text-end">
															<Link
																className="btn btn-minimal btn-sm hover-primary"
																href="/activity"
															>
																<BsActivity className="me-1" />Activity
															</Link>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeaturedHomeOne;
