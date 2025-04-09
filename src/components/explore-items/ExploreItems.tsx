'use client'

import AppImage from "@/components/common/AppImage";
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getStores } from '@/lib/getStores';
import { getAllCoupons } from '@/lib/getAllCoupons';
import { useSearchParams, useRouter } from "next/navigation";

const ExploreItems = () => {

	const searchParams = useSearchParams()
	const router = useRouter()
	const perView = 9;

	const active = searchParams.get("category") || "all"

	const [storesOption, setStoresOption] = useState([{
		value: "all",
		text: "All"
	}])
	const [items, setItems] = useState([]);
	const [next, setNext] = useState(perView);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const stores = (await getStores()).map(({ username }: any) => (
				{
					value: username.toLowerCase(),
					text: username
				}
			));
			setStoresOption((prevOptions) => [...prevOptions, ...stores]);

			const options = {
				item: true,
				category: active,
			}

			const items = await getAllCoupons(options)
			setItems(items);
		})()
		setLoading(false);
	}, [active])

	//   handleLoadMore
	const handleLoadMore = () => {
		setNext((value) => value + 3);
	};


	const selectHandler = (item: { value: string; text: string }, name: string) => {
		const selectedValue = item.value;
		router.push(`/explore?category=${selectedValue}`);
	};



	return (
		<>
			<div className="explore-items-2-wrapper">
				<div className="container-fluid">
					<div className="row g-4 g-xl-5 justify-content-center">
						<div className="col-12 col-sm-9 col-md-5 col-lg-4 col-xxl-3">
							<h5>Category</h5>
							<NiceSelect
								className="filter-select bg-gray w-100 d-flex align-items-center"
								options={storesOption}
								defaultCurrent={storesOption.findIndex(({ value }: any) => value === active)}
								onChange={selectHandler}
								placeholder="Select an option"
								name="myNiceSelect"
							/>

							<button className="btn btn-primary rounded-pill w-100" type="submit">Apply<i className="ms-1 bi bi-arrow-right"></i></button>
						</div>
						<div className="col-12 col-md-7 col-lg-8 col-xxl-9">
							<div className={`row g-4 ${items.length == 0 && "justify-content-center"}`}>
								{
									items.length === 0 ? 
									<div className="col-12 text-center">
										<p className="text-muted">No items found for this category</p>
									</div> : 
								items.slice(0, next).map((item: any, i) => (
									<div key={i} className="col-12 col-sm-6 col-md-12 col-lg-6 col-xxl-4">
										<div className="nft-card card shadow-sm">
											<div className="card-body">
												<div className="img-wrap" style={{ height: 200 }}>
												<AppImage src={item.tokenImageUrl} className="object-fit-cover w-100 h-100" alt="" />

													<div className="badge bg-primary position-absolute">
														<AppImage src="/assets/img/core-img/fire.png" alt="" />
														Available
													</div>
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
														Buy
													</Link>
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
											onClick={handleLoadMore}
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

export default ExploreItems;