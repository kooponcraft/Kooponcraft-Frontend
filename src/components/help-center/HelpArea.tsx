"use client";
import Link from "next/link";
import React from "react";

const catagoriesLists = [
	{
		icon: "/assets/img/core-img/folders.png",
		title: "Getting Started",
		quantity: 75,
	},
	{
		icon: "/assets/img/core-img/pie-chart.png",
		title: "Usage Guide",
		quantity: 113,
	},
	{
		icon: "/assets/img/core-img/licensing.png",
		title: "Licenses",
		quantity: 14,
	},
	{
		icon: "/assets/img/core-img/law.png",
		title: "Copyright Infringement",
		quantity: 8,
	},
];

const HelpArea = () => {
	return (
		<>
			<div className="help-center-wrapper">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-sm-9 col-lg-6">
							<div className="help-form text-center">
								<h2 className="display-6 fw-bold mb-4">How can I help you?</h2>

								<form onSubmit={(e) => e.preventDefault()}>
									<input
										className="form-control"
										type="search"
										placeholder="Write your question"
										 color="#c2d4f8"
									/>
									<button type="submit">
										<i className="bi bi-search"></i>
									</button>
								</form>
							</div>
						</div>
					</div>
					<h5 className="my-5 text-center">Or Browse Catagories</h5>
				</div>
				<div className="container">
					<div className="row g-4 justify-content-center">
						{catagoriesLists.map((item, i) => (
							<div key={i} className="col-12 col-sm-6 col-lg-5 col-xl-3">
								<div className="card support-catagory-card shadow-sm text-center">
									<div className="card-body py-5 px-4">
										<Link className="d-block" href="/help-questions">
											<img className="mb-4" src={item.icon} alt="" />
											<h6 className="mb-1">{item.title}</h6>
											<span>{item.quantity} Resources</span>
										</Link>
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

export default HelpArea;

 
