import AppImage from "@/components/common/AppImage";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsGrid3X3Gap } from "react-icons/bs";

const HeorAreaHomeOne = () => {
	return (
		<>
			<div className="pt-30">
				<div className="container">
					<div className="flex flex-wrap items-center">
						<div className="w-full sm:w-5/6 md:w-1/2">
							<div className="mb-5 md:mb-0">
								<h2
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="500"
									className="text-4xl font-bold"
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
									className="flex space-x-3"
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="1200"
								>
									<Link
										className="btn btn-primary rounded-full mt-3 me-3 bg-blue-500 text-white px-4 py-2 flex items-center"
										href="/explore-1"
									>
										Explore Now<BsArrowRight className="ml-2" />
									</Link>
									<Link
										className="btn btn-minimal hover-primary mt-3 bg-transparent text-blue-500 px-4 py-2 flex items-center"
										href="/collections"
									>
										<BsGrid3X3Gap className="mr-2" />All Collections
									</Link>
								</div>
							</div>
						</div>

						<div className="w-full sm:w-3/4 md:w-1/2">
							<div
								className="welcome-thumb"
								data-aos="fade-up"
								data-aos-duration="750"
								data-aos-delay="500"
							>
								<AppImage
									src="/assets/img/illustrator/2.png"
									width={596}
									height={100}
									style={{ height: "auto", width: "100%" }}
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
