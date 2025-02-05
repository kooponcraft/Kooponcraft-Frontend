'use client'

import AppImage from "@/components/common/AppImage";
import discover_data from '@/data/discover-nft';
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React, { useState } from 'react';

const ExploreItemsTwo = () => {

	const perView = 9;

	const [active, setActive] = useState(null);
	// handleActive function
	const handleActive = (id: any) => {
		if (active === id) {
			setActive(null);
		} else {
			setActive(id);
		}
	};

	const [items, setItems] = useState(discover_data);
	const [next, setNext] = useState(perView);

	const filterItems = (cateItem: string) => {
		setNext(perView);
		if (cateItem === "All") {
			return setItems(discover_data);
		} else {
			const findItems = discover_data.filter((findItem) => {
				return findItem.catagory == cateItem;
			});
			setItems(findItems);
		}
	};

	//   handleLoadMore
	const handleLoadMore = () => {
		setNext((value) => value + 3);
	};


	const selectHandler = (e: any) => { };



	return (
		<>
			<div className="explore-items-2-wrapper">
				<div className="container-fluid">
					<div className="row g-4 g-xl-5 justify-content-center">
						<div className="col-12 col-sm-9 col-md-5 col-lg-4 col-xxl-3">
							<h5>Status</h5>
							<NiceSelect
								className="filter-select bg-gray w-100 d-flex align-items-center"
								options={[
									{ value: "Buy Now", text: "Buy Now" },
									{ value: "01", text: "On Auction" },
									{ value: "02", text: "New" },
									{ value: "04", text: "Featured" },
								]}
								defaultCurrent={0}
								onChange={selectHandler}
								placeholder="Select an option"
								name="myNiceSelect"
							/>


							<h5>Categories</h5>

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

							<h5>Items</h5>
							<NiceSelect
								className="filter-select bg-gray w-100 d-flex align-items-center"
								options={[
									{ value: "All", text: "All" },
									{ value: "01", text: "Single" },
									{ value: "02", text: "Bundle" },
								]}
								defaultCurrent={0}
								onChange={selectHandler}
								placeholder="Select an option"
								name="myNiceSelect"
							/>

							<h5>Sort By</h5>
							<NiceSelect
								className="filter-select bg-gray w-100 d-flex align-items-center"
								options={[
									{ value: "All", text: "Recently Added" },
									{ value: "01", text: "Recently Sold" },
									{ value: "02", text: "Ending Soon" },
								]}
								defaultCurrent={0}
								onChange={selectHandler}
								placeholder="Select an option"
								name="myNiceSelect"
							/>
							{/* <h5>Price</h5>
            <input id="filterRange" type="text" name="filterValue" value="" data-min="100" data-max="1000" data-from="300" data-to="750" data-type="double" data-prefix="" data-grid="false" />
            <div className="mb-4"></div> */}
							<h5>Ratings</h5>
							<NiceSelect
								className="filter-select bg-gray w-100 d-flex align-items-center"
								options={[
									{ value: "All", text: "5 Star" },
									{ value: "01", text: "4 Star Above" },
									{ value: "02", text: "3 Star Above" },
									{ value: "03", text: "2 Star Above" },
									{ value: "04", text: "1 Star Above" },
								]}
								defaultCurrent={0}
								onChange={selectHandler}
								placeholder="Select an option"
								name="myNiceSelect"
							/>
							<h5>Chains</h5>
							<NiceSelect
								className="filter-select bg-gray w-100 d-flex align-items-center"
								options={[
									{ value: "All", text: "Bitcoin" },
									{ value: "01", text: "Ethereum" },
									{ value: "02", text: "Tether" },
								]}
								defaultCurrent={0}
								onChange={selectHandler}
								placeholder="Select an option"
								name="myNiceSelect"
							/>

							<button className="btn btn-primary rounded-pill w-100" type="submit">Apply<i className="ms-1 bi bi-arrow-right"></i></button>
						</div>
						<div className="col-12 col-md-7 col-lg-8 col-xxl-9">
							<div className="row g-4 justify-content-center">

								{items.slice(0, next).map((item, i) => (
									<div key={i} className="col-12 col-sm-6 col-md-12 col-lg-6 col-xxl-4">
										<div className="nft-card card shadow-sm">
											<div className="card-body">
												<div className="img-wrap">
													<AppImage src={item.image} alt="" />

													{item.badgeInfo[0]?.icon && (
														<div className="badge bg-primary position-absolute">
															<AppImage src={item.badgeInfo[0]?.icon} alt="" />
															{item.badgeInfo[0]?.text}
														</div>
													)}

													<div className="dropdown">
														<button
															onClick={() => handleActive(item.id)}
															className={`btn dropdown-toggle rounded-pill shadow-sm ${active === item.id ? "show" : ""
																}`}
															id="dgd987"
															type="button"
															data-bs-toggle="dropdown"
															aria-expanded="false"
														>
															<i className="bi bi-three-dots-vertical"></i>
														</button>

														<ul
															className={`dropdown-menu dropdown-menu-end ${active === item.id ? "show" : ""
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

												<div className="row gx-2 align-items-center mt-3">
													<div className="col-8">
														<span
															className="d-block fz-12"
															style={{ color: "#8480AE" }}
														>
															<i className={`bi ${item.topLevelInfo[0].icon}`} />
															{item.topLevelInfo[0].text}
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
																	title="Monkey Arts #114"
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
														<div className="price text-end" style={{ color: '#8480AE' }}>
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
															className="btn btn-primary btn-sm rounded-pill"
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
															<i className="bi bi-activity me-1"></i>
															{item.buttonGroup[1].rightButtonText}
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}

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
					</div>
				</div>
			</div>
		</>
	);
};

export default ExploreItemsTwo;