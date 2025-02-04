"use client";

import React from "react";

const ContactArea = () => {
	return (
		<>
			<div className="contact-wrapper">
				<div className="container">
					<div className="row g-5 align-items-center">
						<div className="col-12 col-lg-6">
							<div className="contact-form">
								<h1 className="mb-3">
									Lets talk about <br /> all things!
								</h1>
								<p className="mb-5">
									Write to us or give us a call. We will reply to you as soon as
									possible. But yes, it can take up to 24 hours.
								</p>
								<form onSubmit={(e) => e.preventDefault()}>
									<div className="row g-4">
										<div className="col-12">
											<input
												className="form-control"
												id="name"
												type="text"
												placeholder="Full Name"
											/>
										</div>
										<div className="col-12">
											<input
												className="form-control"
												id="email"
												type="email"
												placeholder="Email Address"
											/>
										</div>
										<div className="col-12">
											<input
												className="form-control"
												id="topics"
												type="text"
												placeholder="Questions"
											/>
										</div>
										<div className="col-12">
											<textarea
												className="form-control"
												id="message"
												name="message"
												placeholder="Write in details"
											></textarea>
										</div>
										<div className="col-12">
											<button
												className="btn btn-primary rounded-pill"
												type="submit"
											>
												Send now
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>

						<div className="col-12 col-lg-6">
							<div className="maps-wrap">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14047.882048906753!2d-0.14268817855593444!3d51.50701170390822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1570696571917!5m2!1sen!2sbd"
									allowFullScreen={true}
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactArea;
