"use client";
import Link from "next/link";
import AppImage from "@/components/common/AppImage";
import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsSlack, BsYoutube } from "react-icons/bs";

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
				className="footer-area pb-30 pt-30 bg-[url(/assets/img/bg-img/1.jpg)]"
			>
				<AppImage
					className="footer-bg-shape"
					src="/assets/img/core-img/shape1.png"
					alt=""
					data-aos="fade-up"
					data-aos-duration="500"
					data-aos-delay="200"
				/>
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap">
						<div className="w-full lg:w-5/12 mb-10 lg:mb-0 lg:pr-10 lg:border-r border-gray-200">
							<div className="mb-10">
								<Link className="mb-4" href="/">
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
				
								<div className="flex items-center flex-wrap space-x-4">
									<a
										href="https://facebook.com"
										target="_blank"
										className="text-gray-500 hover:text-gray-900"
										title="Facebook"
									>
										<BsFacebook size={24} />
									</a>
									<a
										href="https://twitter.com"
										target="_blank"
										className="text-gray-500 hover:text-gray-900"
										title="Twitter"
									>
										<BsTwitter size={24} />
									</a>
									<a
										href="https://instagram.com"
										target="_blank"
										className="text-gray-500 hover:text-gray-900"
										title="Instagram"
									>
										<BsInstagram size={24} />
									</a>
									<a
										href="https://slack.com"
										target="_blank"
										className="text-gray-500 hover:text-gray-900"
										title="Slack"
									>
										<BsSlack size={24} />
									</a>
									<a
										href="https://youtube.com"
										target="_blank"
										className="text-gray-500 hover:text-gray-900"
										title="Youtube"
									>
										<BsYoutube size={24} />
									</a>
								</div>

								<div className="mt-5">
									<form
										className="flex items-stretch"
										onSubmit={(e) => e.preventDefault()}
									>
										<input
											type="email"
											placeholder="Enter email"
											className="form-control flex-grow p-2 border border-gray-300 rounded-l"
										/>
										<button className="btn btn-warning px-3 bg-yellow-500 text-white rounded-r" type="submit">
											Subscribe
										</button>
									</form>
								</div>
							</div>
						</div>

						<div className="w-full lg:w-7/12">
							<div className="flex flex-wrap -mx-4">
								{footer_list.map((item, i) => (
									<div key={i} className="w-1/2 sm:w-1/3 px-4 mb-10">
										<div>
											<h5 className="mb-4">{item.widgetTitle}</h5>
											<ul className="list-none mb-0">
												{item.navList.map((list, index) => (
													<li key={index} className="mb-2">
														<Link href={list.url} className="text-gray-500 hover:text-gray-900">
															{list.text}
														</Link>
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
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap items-center justify-between py-4 border-t border-gray-200">
						<div className="text-center lg:text-left mb-3 lg:mb-0">
							<p className="mb-0">
								{new Date().getFullYear()} &copy; All rights reserved by{" "}
								<Link
									href="https://themeforest.net/user/rk_theme/portfolio"
									target="_blank"
									rel="noreferrer"
									className="text-blue-500 hover:underline"
								>
									Kooponcraft
								</Link>
							</p>
						</div>

						<div className="flex justify-center lg:justify-end">
							<ul className="flex space-x-4 list-none mb-0">
								<li>
									<Link href="/privacy" className="text-gray-500 hover:text-gray-900">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link href="/terms" className="text-gray-500 hover:text-gray-900">
										Terms &amp; Conditions
									</Link>
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
