import { getUser } from "@/lib/auth/getUser";
import Link from "next/link";
import React from "react";

const HeroAreaHomeTwo = async () => {
	const user = await getUser()
	return (
		<>
			<div className="welcome-area pt-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-md-10 col-xl-8">
							<div className="welcome-content text-center">
								<h2
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="300"
								>
									Revolutionizing the Coupon Industry with NFTs<br /> Welcome to KooponCraft
								</h2>
								<p
									className="mb-4"
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="500"
								>
									Imagine you get a coupon for a free cup of coffee. With KooponCraft, you could redeem that for your drink—or, if coffee isn't your thing, you could sell it to someone else who really wants it. The possibilities are endless.
								</p>
								<Link
									className={`btn ${ user ? "btn-primary" : "btn-warning" } rounded-pill`}
									href={user ? "/collections" : "/register"}
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="800"
								>
									{
										user ? (
											<>
												<i className="me-2 bi bi-grid-3x3-gap"></i>View All Collections
											</>
										)	: "Get Started"
									}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroAreaHomeTwo;
