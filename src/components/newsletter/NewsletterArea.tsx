"use client";
import React from "react";

const NewsletterArea = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-10 col-lg-7">
						<div className="newsletter-card card shadow">
							<div className="card-body p-4 p-sm-5">
								<div className="text-center">
									<h2>Subscribe to our newsletter</h2>
									<p style={{ color: "#8084AE" }} className="mb-5">
										We will notify you when we are live.
									</p>
								</div>
								<form onSubmit={(e) => e.preventDefault()}>
									<div className="row justify-content-center">
										<div className="col-12 col-lg-10">
											<input
												className="form-control"
												type="email"
												placeholder="Type your mail"
												aria-describedby="mailHelp"
											/>
											<small className="text-muted text-start" id="mailHelp" style={{ color: "#8084AE !importent" }}>
												<i className="bi bi-lock me-1"></i>Well never share your
												email with anyone else.
											</small>
											<button
												className="btn btn-primary w-100 mt-4 rounded-pill"
												type="submit"
											>
												Subscribe Now
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsletterArea;
