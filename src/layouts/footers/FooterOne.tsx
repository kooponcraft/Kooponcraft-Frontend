"use client";
import Link from "next/link";
import AppImage from "@/components/common/AppImage";
import React from "react";

const footer_content = {
	footer_list: [
		{
			widgetTitle: "Explore",
			navList: [
				{
					text: "Featured Drops",
					url: "/featured-items",
				},
				{
					text: "Live Auctions",
					url: "/live-bidding",
				},
				{
					text: "Collections",
					url: "/collections",
				},
				{
					text: "Top Seller",
					url: "/top-seller",
				},
				{
					text: "Top Buyer",
					url: "/top-buyer",
				},
				{
					text: "Item Details",
					url: "/live-bid/1",
				},
			],
		},
		{
			widgetTitle: "Marketplace",
			navList: [
				{
					text: "Art",
					url: "#",
				},
				{
					text: "Cards",
					url: "#",
				},
				{
					text: "Collectibles",
					url: "#",
				},
				{
					text: "Domain",
					url: "#",
				},
				{
					text: "Photos",
					url: "#",
				},
				{
					text: "Sports",
					url: "#",
				},
				{
					text: "Videos",
					url: "#",
				},
			],
		},
		{
			widgetTitle: "Company",
			navList: [
				{
					text: "Forum",
					url: "#",
				},
				{
					text: "Licences",
					url: "#",
				},
				{
					text: "Careers",
					url: "#",
				},
				{
					text: "Conditions",
					url: "#",
				},
				{
					text: "Privacy",
					url: "#",
				},
			],
		},
	],
};

const { footer_list } = footer_content;

const FooterOne = () => {
	return (
		<>
			<footer
				className="footer-area pb-120 pt-120"
				style={{ backgroundImage: `url(/assets/img/bg-img/1.jpg)` }}
			>
				<AppImage
					className="footer-bg-shape"
					src="/assets/img/core-img/shape1.png"
					alt=""
					data-aos="fade-up"
					data-aos-duration="500"
					data-aos-delay="200"
				/>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-5">
							<div className="footer-widget-area mb-70 pe-lg-4 pe-xl-5 me-lg-4 me-xl-5 border-end">
								<Link className="d-block mb-4" href="/">
									<AppImage
										className="light-logo"
										src="/assets/img/core-img/logo.png"
										alt=""
									/>
									<AppImage
										className="dark-logo"
										src="/assets/img/core-img/logo-white.png"
										alt=""
									/>
								</Link>
								<p>
									It is crafted with the latest trend of design &amp; coded with
									all modern approaches.
								</p>
								<p className="mb-0">
									Call: +123 456 789 <br /> Email: help@example.com
								</p>

								<h5 className="mt-4 mb-3">Join the community</h5>
                
								<div className="footer-social-icon d-flex align-items-center flex-wrap">
									<a
										href="https://facebook.com"
                    target="_blank"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Facbook"
									>
										<AppImage
											src="/assets/img/core-img/icons8-facebook.svg"
											alt=""
										/>
									</a>
									<a
										href="https://twitter.com"
                    target="_blank"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Twitter"
									>
										<AppImage src="/assets/img/core-img/icons8-twitter.svg" alt="" />
									</a>
									<a
										href="https://instagram.com"
                    target="_blank"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Instagram"
									>
										<AppImage
											src="/assets/img/core-img/icons8-instagram.svg"
											alt=""
										/>
									</a>
									<a
										href="https://slack.com"
                    target="_blank"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Slack"
									>
										<AppImage src="/assets/img/core-img/icons8-slack.svg" alt="" />
									</a>
									<a
										href="https://youtube.com"
                    target="_blank"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Youtube"
									>
										<AppImage src="/assets/img/core-img/icons8-player.svg" alt="" />
									</a>
								</div>

								<div className="newsletter-form mt-5 me-5">
									<form
										className="d-flex align-items-stretch"
										onSubmit={(e) => e.preventDefault()}
									>
										<input
											className="form-control"
											type="email"
											placeholder="Enter email"
										/>
										<button className="btn btn-warning px-3" type="submit">
											Subscribe
										</button>
									</form>
								</div>
							</div>
						</div>

						<div className="col-12 col-lg-7">
							<div className="row g-4">
								{footer_list.map((item, i) => (
									<div key={i} className="col-6 col-sm-4">
										<div className="footer-widget-area mb-70">
											<h5 className="mb-4">{item.widgetTitle}</h5>
											<ul className="list-unstyled mb-0">
												{item.navList.map((list, index) => (
													<li key={index}>
														<Link href={list.url}>{list.text}</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="copywrite-wrapper d-lg-flex align-items-lg-center justify-content-lg-between">
						<div className="copywrite-text text-center text-lg-start mb-3 mb-lg-0">
							<p className="mb-0">
								{new Date().getFullYear()} &copy; All rights reserved by{" "}
								<a
									href="https://themeforest.net/user/rk_theme/portfolio"
									target="_blank"
									rel="noreferrer"
								>
									rk_theme
								</a>
							</p>
						</div>

						<div className="footer-nav">
							<ul className="mb-0 d-flex flex-wrap justify-content-center list-unstyled">
								<li>
									<Link href="/privacy">Privacy Policy</Link>
								</li>
								<li>
									<Link href="/terms">Terms &amp; Conditions</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default FooterOne;
