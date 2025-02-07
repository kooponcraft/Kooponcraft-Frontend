import collection_data from "@/data/collection";
import Link from "next/link";
import React from "react";
import AppImage from "@/components/common/AppImage";
import { BsArrowRight } from "react-icons/bs";

const CollectionHomeOne = () => {
	return (
		<>
			<div className="collection-wrapper">
				<div className="container mx-auto">
					<div className="flex justify-between items-center">
						<div className="w-7/12">
							<div className="section-heading">
								<h2 className="mb-0 ml-3">Browse by category</h2>
							</div>
						</div>
						<div className="w-5/12 text-right">
							<Link
								className="btn rounded-full border-2 border-primary text-primary py-1 px-3"
								href="/collections"
							>
								View all categories
							</Link>
						</div>
					</div>
				</div>
				<div className="container mx-auto">
					<div className="flex flex-wrap justify-center gap-4">
						{collection_data.slice(0, 3).map((item, i) => (
							<div key={i} className="w-full md:w-10/12 lg:w-1/3">
								<div className="catagory-card card shadow-sm">
									<div className="card-body p-4">
										<div className="flex gap-1">
											<div className="w-1/2">
												<AppImage
													className="rounded"
													src={item.firstImage}
													alt={item.name}
												/>
												<AppImage
													className="rounded"
													src={item.thirdImage}
													alt={item.name}
												/>
											</div>
											<div className="w-1/2">
												<AppImage
													className="rounded"
													src={item.secondImage}
													alt={item.name}
												/>
												<AppImage
													className="rounded"
													src={item.fourthImage}
													alt={item.name}
												/>
											</div>
										</div>

										<div className="flex justify-between items-center mt-3">
											<div className="flex items-center">
												<h5 className="mb-0">
													{item.name}
													<span className="badge rounded-full text-sm bg-primary ml-2">
														{item.totalItems}
													</span>
												</h5>
											</div>
											<div className="text-right">
												<Link
													className="btn btn-minimal hover:text-primary"
													href={item.buttonURL}
												>
													{item.buttonText}
													<BsArrowRight className="ml-1" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CollectionHomeOne;
