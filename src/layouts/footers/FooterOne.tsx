"use client";
import Link from "next/link";
import React from "react";
import AppImage from "@/components/common/AppImage";
import { usePathname } from "next/navigation";

const footer_content = {
	footer_list: [
		{
			widgetTitle: "Explore",
			navList: [
				{
					text: "Marketplace",
					url: "#",
				},
				{
					text: "Help Center",
					url: "/help-center",
				},
			],
		},
		{
			widgetTitle: "Shops",
			navList: [
				{
					text: "NFTs",
					url: "/explore/nfts",
				},
				{
					text: "Items",
					url: "/explore/items",
				},
			],
		},
	],
};

const { footer_list } = footer_content;

const FooterOne = () => {
	const pathname = usePathname()
	return (
		(
			pathname.startsWith("/dashboard") || pathname.startsWith("/live-bids") || pathname.startsWith("/my-collections") || pathname.startsWith("/my-wallet") || pathname.startsWith("/notifications") || pathname.startsWith("/settings") || pathname.startsWith("/my-transactions") || pathname.startsWith("/activity") || pathname.startsWith("/my-tokens") || pathname.startsWith("/my-store") ? null : (
				<>
					<footer
						className="footer-area pb-120 pt-120 bg-primary"
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
										We believe in providing an experience, not just a product. The possibilities are endless.
										</p>
										{/* <p className="mb-0">
											Call: +123 456 789 <br /> Email: help@example.com
										</p> */}

										<h5 className="mt-4 mb-3">Join the community</h5>
						
										<div className="footer-social-icon d-flex align-items-center flex-wrap">
											<Link
												href="https://x.com/kooponcraft"
												target="_blank"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												title="Twitter"
											>
												<AppImage src="/assets/img/core-img/icons8-twitter.svg" alt="" />
											</Link>
											<Link
												href="https://youtube.com/@KooponCraft"
												target="_blank"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												title="Youtube"
											>
												<AppImage src="/assets/img/core-img/icons8-player.svg" alt="" />
											</Link>
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
										{new Date().getFullYear()} &copy; All rights reserved by Kooponcraft
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
			)
		)
	);
};

export default FooterOne;
