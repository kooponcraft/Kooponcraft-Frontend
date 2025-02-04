"use client";
import React from "react";
import Link from "next/link";
import help_all_questions from "@/data/help-all-questions";

const HelpQuestionsArea = () => {
	const licenses = help_all_questions.filter(
		(item) => item.catagory === "licenses"
	);
	const popular = help_all_questions.filter(
		(item) => item.catagory === "popular"
	);

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
									/>
									<button type="submit">
										<i className="bi bi-search"></i>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="divider"></div>
				<div className="container">
					<div className="row g-5">
						<div className="col-12 col-lg-8">
							<h4 className="mb-4">All Questions</h4>

							{licenses.map((item, i) => (
								<div key={i} className="card shadow-sm mt-3">
									<div className="card-body px-4">
										<Link
											className="d-block fz-18 hover-primary"
											href="/question-details"
										>
											{item.question}
										</Link>
									</div>
								</div>
							))}
						</div>

						<div className="col-12 col-lg-4">
							<div className="card bg-gray border-0 mt-2">
								<div className="card-body p-4">
									<h4 className="mb-3">Popular Questions</h4>
									<div className="border-top mb-3"></div>
									{popular.map((item, i) => (
										<Link key={i}
											className="d-block fz-16 hover-primary mt-3"
											href="/question-details"
										>
											{item.question}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HelpQuestionsArea;
