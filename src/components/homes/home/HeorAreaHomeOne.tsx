import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeorAreaHomeOne = () => {
	return (
		<>
			<div className="welcome-area pt-120">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-sm-10 col-md-6">
							<div className="welcome-content mb-5 mb-md-0">
								<h2
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="500"
								>
									Explore, buy, and sell exceptional NFTs.
								</h2>
								<p
									className="mb-4"
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="800"
								>
									It is crafted with the latest trend of design &amp; coded with
									all modern approaches.
								</p>
								<div
									className="hero-btn-group"
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="1200"
								>
									<Link
										className="btn btn-primary rounded-pill mt-3 me-3"
										href="/explore-1"
									>
										Explore Now<i className="ms-2 bi bi-arrow-right"></i>
									</Link>
									<Link
										className="btn btn-minimal hover-primary mt-3"
										href="/collections"
									>
										<i className="me-2 bi bi-grid-3x3-gap"></i>All Collections
									</Link>
								</div>
							</div>
						</div>

						<div className="col-12 col-sm-9 col-md-6">
							<div
								className="welcome-thumb"
								data-aos="fade-up"
								data-aos-duration="750"
								data-aos-delay="500"
							>
								<Image
									src="/assets/img/illustrator/2.png"
									width={596}
									height={100}
									style={{ height: "auto", width: "100" }}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeorAreaHomeOne;
