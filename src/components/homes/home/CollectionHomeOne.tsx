import collection_data from "@/data/collection";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const CollectionHomeOne = () => {
	return (
		<>
			<div className="collection-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-7">
							<div className="section-heading">
								<h2 className="mb-0 ms-3">Browse by category</h2>
							</div>
						</div>
						<div className="col-5 text-end">
							<Link
								className="btn rounded-pill btn-outline-primary btn-sm border-2"
								href="/collections"
							>
								View all catagories
							</Link>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row g-4 justify-content-center">
						{collection_data.slice(0, 3).map((item, i) => (
							<div key={i} className="col-12 col-md-10 col-lg-4">
								<div className="catagory-card card shadow-sm">
									<div className="card-body">
										<div className="row g-1">
											<div className="col-6">
												<Image layout="fill"
													className="rounded"
													src={item.firstImage}
													alt={item.name}
												/>
												<Image layout="fill"
													className="rounded"
													src={item.thirdImage}
													alt={item.name}
												/>
											</div>
											<div className="col-6">
												<Image layout="fill"
													className="rounded"
													src={item.secondImage}
													alt={item.name}
												/>
												<Image layout="fill"
													className="rounded"
													src={item.fourthImage}
													alt={item.name}
												/>
											</div>
										</div>

										<div className="row gx-2 mt-3">
											<div className="col-7">
												<h5 className="mb-0 d-flex align-items-center">
													{item.name}
													<span className="badge rounded-pill fz-14 bg-primary ms-2">
														{item.totalItems}
													</span>
												</h5>
											</div>
											<div className="col-5 text-end">
												<Link
													className="btn btn-minimal hover-primary"
													href={item.buttonURL}
												>
													{item.buttonText}
													<i className="ms-1 bi bi-arrow-right" />
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
