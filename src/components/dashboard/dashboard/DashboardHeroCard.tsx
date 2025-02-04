import React from "react";

import Image from "next/image";
const DashboardHeroCard = () => {
	return (
		<>
			<div className="col-12 col-xxl-6">
				<div className="row g-4">
					<div className="col-12">
						<div
							className="card dashboard-hero-card p-2 border-0 bg-img shadow-sm"
							style={{ backgroundImage: "url(/assets/img/bg-img/44.jpg)" }}
						>
							<div className="card-body p-4">
								<h3 className="mb-3 text-white">
									Explore, buy, and sell exceptional NFTs.
								</h3>
								<p className="mb-4 text-white">
									It is crafted with the latest trend of design &amp; coded with
									all modern approaches.
								</p>
								<div className="button-groups">
									<a
										className="btn btn-sm btn-warning rounded-pill me-3"
										href="#"
									>
										Discover
									</a>
									<a className="btn btn-sm btn-dark rounded-pill" href="#">
										Create
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6">
						<div className="card border-0 shadow-sm">
							<div className="card-body p-4">
								<div className="d-flex align-items-center justify-content-between">
									<div>
										<h5 className="mb-2">Sales</h5>
										<span style={{ color: "#8084AE" }}>Last 10 days</span>
									</div>
									<div className="ms-auto" id="chart-1"></div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6">
						<div className="card border-0 shadow-sm">
							<div className="card-body p-4">
								<div className="d-flex align-items-center justify-content-between">
									<div>
										<h5 className="mb-2">Revenue</h5>
										<span style={{ color: "#8084AE" }}>Last 10 days</span>
									</div>
									<div className="ms-auto" id="chart-2"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardHeroCard;
