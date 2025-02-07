import todays_data from "@/data/todays-drop";
import top_buyer from "@/data/top-buyer";
import AppImage from "@/components/common/AppImage";
import top_seller from "@/data/top-seller";
import Link from "next/link";
import React from "react";
import { BsCheck, BsArrowRight, BsGem, BsLightning, BsPatchCheckFill } from "react-icons/bs";

const TopSellerHomeOne = () => {
	return (
		<>
			<div className="top-seller-wrapper">
				<div className="container mx-auto">
					<div className="flex flex-wrap justify-center gap-4 lg:gap-5">
						<div className="w-full sm:w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
							<div className="text-center mb-4">
								<h4 className="mb-0">Today&apos;s Drops</h4>
							</div>
							{todays_data.map((item, i) => (
								<div key={i} className="nft-card card shadow-sm mb-4">
									<div className="card-body">
										<div className="flex items-center gap-3">
											<div className="w-1/3">
												<div className="relative">
													<AppImage src={item.image} alt="" />
													<div className="badge bg-red-500 absolute px-2 py-1">
														# {item.id}
													</div>
												</div>
											</div>
											<div className="w-2/3">
												<div className="meta-info">
													<div className="flex items-center mb-3">
														<div className="relative">
															<AppImage
																className="shadow"
																src={item.authorAvater}
																alt=""
															/>
															<BsCheck className="absolute bg-green-500" />
														</div>
														<div className="ml-2">
															<Link
																className="block hover:text-primary font-bold truncate"
																href="/item-details"
																title="Pixel Cartoon"
															>
																{item.title}
															</Link>
															<a
																className="block text-xs hover:text-primary truncate"
																href="/author"
															>
																@ {item.authorName}
															</a>
														</div>
													</div>
													<div className="flex items-center">
														<div className="price mr-2 sm:mr-3">
															<h6 className="mb-0 inline-block text-sm border border-2 rounded py-1 px-2">
																{item.price}
															</h6>
														</div>
														<a
															className="btn btn-minimal btn-sm hover:text-primary flex items-center"
															href="#"
															style={{ color: '#8084AE' }}
														>
															<AppImage
																className="mr-1"
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
								className="btn btn-minimal w-full hover:text-primary"
								href="/featured-items"
							>
								View All Drops
								<BsArrowRight className="ml-1" />
							</Link>
						</div>

						<div className="w-full sm:w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
							<div className="text-center mb-4">
								<h4 className="mb-0">Top Seller</h4>
							</div>
							{top_seller.slice(0, 3).map((item, i) => (
								<div
									key={i}
									className="nft-card card seller-card shadow-sm mb-4"
								>
									<div className="card-body">
										<div className="flex items-center gap-3">
											<div className="w-1/3">
												<div className="relative">
													<AppImage src={item.authorAvater} alt="" />
													<div className="badge bg-red-500 absolute px-2 py-1">
														# {item.id}
													</div>
												</div>
											</div>
											<div className="w-2/3">
												<div className="name-author">
													<a
														className="block hover:text-primary font-bold truncate"
														href="#"
													>
														{item.authorName}
														<BsPatchCheckFill
															className="ml-2 text-green-500"
															title="Verified"
														/>
													</a>
													<a
														className="block text-sm hover:text-primary truncate"
														href="#"
													>
														@ {item.authorUsername}
													</a>
													<div className="flex items-center mt-3">
														<div className="price mr-2 sm:mr-3">
															<h6 className="mb-0 inline-block text-sm border border-2 rounded py-1 px-2">
																{item.totalPrice}
															</h6>
														</div>
														<p className="mb-0 flex items-center text-sm" style={{ color: '#8084AE' }}>
															<BsGem className="mr-1" />
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
								className="btn btn-minimal w-full hover:text-primary"
								href="/top-seller"
							>
								View All Sellers
								<BsArrowRight className="ml-1" />
							</Link>
						</div>

						<div className="w-full sm:w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
							<div className="text-center mb-4">
								<h4 className="mb-0">Top Buyer</h4>
							</div>
							{top_buyer.slice(0, 3).map((item, i) => (
								<div
									key={i}
									className="nft-card card seller-card shadow-sm mb-4"
								>
									<div className="card-body">
										<div className="flex items-center gap-3">
											<div className="w-1/3">
												<div className="relative">
													<AppImage src={item.authorAvater} alt="" />
													<div className="badge bg-red-500 absolute px-2 py-1">
														# {item.id}
													</div>
												</div>
											</div>
											<div className="w-2/3">
												<div className="name-author">
													<a
														className="block hover:text-primary font-bold truncate"
														href="#"
													>
														{item.authorName}
														<BsPatchCheckFill
															className="ml-2 text-blue-500"
															title="Verified"
														/>
													</a>
													<a
														className="block text-sm hover:text-primary truncate"
														href="#"
													>
														@ {item.authorUsername}
													</a>
													<div className="flex items-center mt-3">
														<div className="price mr-2 sm:mr-3">
															<h6 className="mb-0 inline-block text-sm border border-2 rounded py-1 px-2">
																{item.totalPrice}
															</h6>
														</div>
														<p className="mb-0 flex items-center text-sm" style={{ color: '#8084AE' }}>
															<BsLightning className="mr-1" />
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
								className="btn btn-minimal w-full hover:text-primary"
								href="/top-buyer"
							>
								View All Buyers
								<BsArrowRight className="ml-1" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopSellerHomeOne;
