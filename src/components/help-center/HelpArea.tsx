"use client";
import Link from "next/link";
import React from "react";
import AppImage from "@/components/common/AppImage";
import { useState } from "react";

const catagoriesLists = [
	{
		icon: "/assets/img/core-img/folders.png",
		title: "Getting Started",
		// quantity: 75,
	},
	{
		icon: "/assets/img/core-img/pie-chart.png",
		title: "Usage Guide",
		// quantity: 113,
	},
	// {
	// 	icon: "/assets/img/core-img/licensing.png",
	// 	title: "Licenses",
	// 	quantity: 14,
	// },
	// {
	// 	icon: "/assets/img/core-img/law.png",
	// 	title: "Copyright Infringement",
	// 	quantity: 8,
	// },
];

const resources = [
	{
		title: "How do I create an account?",
		url: "https://youtu.be/XlkpnsR-V4Y?si=jLw18hAlgESYXLk5",
	},
	{
		title: "How do I play the Kooponcraft Game?",
		url: "https://youtu.be/ltGha2hegQI?si=SzcFQ70ctgZVRI6b",
	}
]

const HelpArea = () => {
	const [filteredResources, setFilteredResources] = useState(resources);

	const handleSearch = (query: string) => {
		const filtered = resources.filter((resource) =>
			resource.title.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredResources(filtered);
	};

	return (
		<>
			<div className="help-center-wrapper">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-sm-9 col-lg-6">
							<div className="help-form text-center">
								<h2 className="display-6 fw-bold mb-4">How can I help you?</h2>

								<form
									onSubmit={(e) => {
										e.preventDefault();
										const query = (e.target as any).elements.search.value;
										handleSearch(query);
									}}
								>
									<input
										id="search"
										className="form-control"
										type="search"
										placeholder="Write your question"
										onChange={(e) => handleSearch(e.target.value)}
									/>
									<button type="submit">
										<i className="bi bi-search"></i>
									</button>
								</form>
							</div>
						</div>
					</div>
					<h5 className="my-5 text-center">Or Browse</h5>
				</div>
				{/* <div className="container">
					<div className="row g-4 justify-content-center">
						{catagoriesLists.map((item, i) => (
							<div key={i} className="col-12 col-sm-6 col-lg-5 col-xl-3">
								<div className="card support-catagory-card shadow-sm text-center">
									<div className="card-body py-5 px-4">
										<Link className="d-block" href="/help-questions">
											<AppImage className="mb-4" src={item.icon} alt="" />
											<h6 className="mb-1">{item.title}</h6>
											<span>{item.quantity} Resources</span>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div> */}
				<div className="container">
					<div className="row g-5">
						<div className="col-12 col-lg-8">
							<h4 className="mb-4">Resources</h4>

							{filteredResources.length === 0 ? (
								<div className="mt-3">
									No resources found. Please try a different query.
								</div>
							) : (
								filteredResources.map((item, i) => (
									<div key={i} className="card shadow-sm mt-3">
										<div className="card-body px-4">
											<Link
												className="d-block fz-18 hover-primary"
												href={item.url}
												target="_blank"
											>
												{item.title}
											</Link>
										</div>
									</div>
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HelpArea;

 
