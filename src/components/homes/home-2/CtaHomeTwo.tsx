import Link from "next/link";
import React from "react";

const CtaHomeTwo = () => {
	return (
		<>
			<div className="container">
				<div
					className="cta-text bg-gradient p-4 p-sm-5 bg-primary"
					data-aos="zoom-in"
					data-aos-duration="750"
					data-aos-delay="300"
				>
					<div className="row align-items-center">
						<div className="col-12 col-md-8 col-lg-9">
							<h2
								className="mb-3 mb-md-0"
								data-aos="fade-up"
								data-aos-duration="750"
								data-aos-delay="600"
							>
								Resources for getting started with Funto.
							</h2>
						</div>
						<div className="col-12 col-md-4 col-lg-3">
							<div className="text-md-end">
								<Link
									className="btn btn-warning rounded-pill"
									href="/help-center"
									data-aos="zoom-in"
									data-aos-duration="750"
									data-aos-delay="900"
								>
									Get Started
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CtaHomeTwo;
