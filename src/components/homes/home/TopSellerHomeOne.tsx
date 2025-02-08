import todays_data from "@/data/todays-drop";
import top_buyer from "@/data/top-buyer";
import top_seller from "@/data/top-seller";
import AppImage from "@/components/common/AppImage";
import Link from "next/link";
import React from "react";

const TopSellerHomeOne = () => {
	return (
		<>
			<div className="top-seller-wrapper">
				<div className="container">
					<div className="row g-4 g-lg-5 justify-content-center">
						<div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
							<div className="section-heading text-center mb-4">
								<h4 className="mb-0">Today s Drops</h4>
							</div>
							{todays_data.map((item, i) => (
								<div key={i} className="nft-card card shadow-sm mb-4">
									<div className="card-body">
										<div className="row align-items-center g-3">
											<div className="col-4">
												<div className="img-wrap">
													<AppImage src={item.image} alt="" />
													<div className="badge bg-danger position-absolute px-2 py-1">
														# {item.id}
													</div>
												</div>
											</div>
											<div className="col-8">
												<div className="meta-info">
													<div className="name-info d-flex align-items-center mb-3">
														<div className="author-img position-relative">
															<AppImage
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
																title="Pixel Cartoon"
															>
																{item.title}
															</Link>
															<a
																className="author d-block fz-12 hover-primary text-truncate"
																href="/author"
															>
																@ {item.authorName}
															</a>
														</div>
													</div>
													<div className="price-bid d-flex align-items-center">
														<div className="price me-2 me-sm-3">
															<h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">
																{" "}
																{item.price}
															</h6>
														</div>
														<a
															className="btn btn-minimal btn-sm hover-primary d-flex align-items-center"
															href="#"
															style={{color: '#8084AE'}}
														>
															<AppImage
																className="me-1"
																src="/assets/img/core-img/fire.png"
																alt=""
															/>
															{item.buttonText}
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}

							<Link
								className="btn btn-minimal w-100 hover-primary"
								href="/featured-items"
							>
								View All Drops
								<i className="ms-1 bi bi-arrow-right"></i>
							</Link>
						</div>

						<div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
							<div className="section-heading text-center mb-4">
								<h4 className="mb-0">Top Seller</h4>
							</div>
							{top_seller.slice(0, 3).map((item, i) => (
								<div
									key={i}
									className="nft-card card seller-card shadow-sm mb-4"
								>
									<div className="card-body">
										<div className="row align-items-center g-3">
											<div className="col-4">
												<div className="img-wrap">
													<AppImage src={item.authorAvater} alt="" />
													<div className="badge bg-danger position-absolute px-2 py-1">
														# {item.id}
													</div>
												</div>
											</div>
											<div className="col-8">
												<div className="name-author">
													<a
														className="name d-block hover-primary fw-bold text-truncate"
														href="#"
													>
														{item.authorName}
														<i
															className="bi bi-patch-check-fill ms-2 text-success"
															data-bs-toggle="tooltip"
															data-bs-placement="top"
															title="Verified"
														></i>
													</a>
													<a
														className="author d-block fz-14 hover-primary text-truncate"
														href="#"
													>
														@ {item.authorUsername}
													</a>
													<div className="price-bid d-flex align-items-center mt-3">
														<div className="price me-2 me-sm-3">
															<h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">
																{item.totalPrice}
															</h6>
														</div>
														<p className="mb-0 lh-1 d-flex align-items-center fz-14" style={{color: '#8084AE'}}>
															<i className="me-1 bi bi-gem"></i>
															{item.totalItems} Items
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}

							<Link
								className="btn btn-minimal w-100 hover-primary"
								href="/top-seller"
							>
								View All Seller s<i className="ms-1 bi bi-arrow-right"></i>
							</Link>
						</div>

						<div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
							<div className="section-heading text-center mb-4">
								<h4 className="mb-0">Top Buyer</h4>
							</div>
							{top_buyer.slice(0, 3).map((item, i) => (
								<div
									key={i}
									className="nft-card card seller-card shadow-sm mb-4"
								>
									<div className="card-body">
										<div className="row align-items-center g-3">
											<div className="col-4">
												<div className="img-wrap">
													<AppImage src={item.authorAvater} alt="" />
													<div className="badge bg-danger position-absolute px-2 py-1">
														# {item.id}
													</div>
												</div>
											</div>
											<div className="col-8">
												<div className="name-author">
													<a
														className="name d-block hover-primary fw-bold text-truncate"
														href="#"
													>
														{item.authorName}
														<i
															className="bi bi-patch-check-fill ms-2 text-primary"
															data-bs-toggle="tooltip"
															data-bs-placement="top"
															title="Verified"
														></i>
													</a>
													<a
														className="author d-block fz-14 hover-primary text-truncate"
														href="#"
													>
														@ {item.authorUsername}
													</a>
													<div className="price-bid d-flex align-items-center mt-3">
														<div className="price me-2 me-sm-3">
															<h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">
																{item.totalPrice}
															</h6>
														</div>
														<p className="mb-0 lh-1 d-flex align-items-center fz-14" style={{color: '#8084AE'}}>
															<i className="me-1 bi bi-lightning"></i>
															{item.totalItems} Items
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}

							<Link
								className="btn btn-minimal w-100 hover-primary"
								href="/top-buyer"
							>
								View All Buyers<i className="ms-1 bi bi-arrow-right"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopSellerHomeOne;
