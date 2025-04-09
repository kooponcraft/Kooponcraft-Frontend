"use client";

import Link from "next/link";
import AppImage from "@/components/common/AppImage";
import React, { useEffect, useState } from "react";
import { getAllCoupons } from "@/lib/getAllCoupons";

 

const ExploreNfts = () => {
	const perView = 12;
	const [items, setItems] = useState([]);
	const [next, setNext] = useState(perView);

	useEffect(() => {
		(async() => {
			const coupons = await getAllCoupons({items: false})
			setItems(coupons)
		})()
	})

	//   handleLoadMore
	const handleLoadMore = () => {
		setNext((value) => value + 4);
	};


	return (
		<>
			<div className="explore-items-wrapper">
				<div className="container">
					<div className="row g-4 justify-content-center">
						{items.slice(0, next).map((item: any, i) => (
							<div key={i} className="col-12 col-sm-6 col-md-12 col-lg-6 col-xxl-4">
								<div className="nft-card card shadow-sm">
									<div className="card-body">
									<div className="img-wrap" style={{ height: 200 }}><AppImage src={item.tokenImageUrl} className="object-fit-cover w-100 h-100" alt="" />
									<div className="ribbon-wrapper">
										<div className="ribbon">{item.discount || 'COUPON'}</div>
									</div>
									<div className={`badge bg-dark position-absolute`}>
										<AppImage src="/assets/img/core-img/fire.png" alt="" />New</div>
									</div>

										<div className="row gx-2 align-items-center mt-2">
											<div className="col-8">
												<div className="name-info d-flex align-items-center">
													<div className="author-img position-relative">
														<AppImage
															className="shadow"
															src={item.profileImageUrl || `https://api.dicebear.com/6.x/identicon/svg?seed=${encodeURIComponent(item.ownerName)}`}
															alt=""
														/>
														<i className="bi bi-check position-absolute bg-success true"></i>
													</div>
													<div className="name-author">
														<Link
															className="name d-block hover-primary fw-bold text-truncate"
															href="/item-details"
															data-bs-toggle="tooltip"
															data-bs-placement="top"
															title={item.tokenName + "#" + item.tokenId}
														>
															{item.tokenName}
														</Link>
														<Link
															className="author d-block fz-12 hover-primary text-truncate"
															href="/author"
														>
															@{item.ownerName}
														</Link>
													</div>
												</div>
											</div>
											<div className="col-4">
												<div className="price text-end" style={{ color: '#8480AE' }}>
													<span className="fz-12 d-block">
														Current Price
													</span>
													<h6 className="mb-0">{item.finalPriceOfCoupon.toFixed(2)} UNQ</h6>
												</div>
											</div>
										</div>

										<div className="col-12">
											<Link className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">
												Purchase
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{next < items.length && (
					<div className="container">
						<div className="text-center mt-70">
							<button
								className="btn btn-primary px-4 rounded-pill"
								onClick={() => handleLoadMore()}
							>
								{" "}
								<span className="d-flex align-items-center">
									View More Items
									<i className="ms-2 bi bi-arrow-repeat" />
								</span>
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default ExploreNfts;
