import about_data from "@/data/about-card";
import Link from "next/link";
import React from "react";
import AppImage from "@/components/common/AppImage";

const AboutArea = () => {
	return (
		<>
			<div className="about-area">
				<div className="container">
					<div className="row g-4">
						{about_data.map((item, i) => (
							<div key={i} className="col-12 col-sm-6 col-xl-3">
								<div className="card about-card shadow-sm">
									<div className="card-body py-4">
										<div className={`icon bg-${item.iconColor}`}>
											<i className={item.icon}></i>
										</div>
										<h4 className="mb-3">{item.title}</h4>
										<p style={{ color: "#8084AE" }} className="mb-0">
											{item.subTitle}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="divider"></div>

				<div className="container">
					<div className="row g-4 g-xl-5 align-items-center justify-content-between">
						<div className="col-12 col-lg-7 col-xl-6">
							<h2 className="h2 fw-bold mb-3">
								Digital arts are trends now. Welcome to the world of NFTs.
							</h2>
							<p className="fz-18">
								It is crafted with the latest trend of design &amp; coded with
								all modern approaches. It is a robust &amp; multi-dimensional
								usable template.
							</p>
							<a className="btn btn-primary rounded-pill mt-4" href="#">
								Know More
							</a>
						</div>
						<div className="col-12 col-lg-5">
							<AppImage
								className="rounded"
								src="/assets/img/illustrator/4.png"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="divider"></div>

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
									Resources for getting started with Kooponcraft.
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
				<div className="divider"></div>

				<div className="container">
					<div className="row g-4 g-xl-5 align-items-center justify-content-between">
						<div className="col-12 col-lg-5">
							<AppImage
								className="rounded"
								src="/assets/img/illustrator/4.png"
								alt=""
							/>
						</div>
						<div className="col-12 col-lg-7 col-xl-6">
							<h2 className="h2 fw-bold mb-3">
								Explore, buy, and sell exceptional NFTs.
							</h2>
							<p className="fz-18">
								It is crafted with the latest trend of design &amp; coded with
								all modern approaches. It is a robust &amp; multi-dimensional
								usable template.
							</p>
							<p className="fz-18">
								It is crafted with the latest trend of design &amp; coded with
								all modern approaches. It is a robust &amp; multi-dimensional
								usable template.
							</p>
							<a className="btn btn-primary rounded-pill mt-4" href="#">
								Explore
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutArea;
