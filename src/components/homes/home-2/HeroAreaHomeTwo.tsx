import Link from "next/link";
import React from "react";

const HeroAreaHomeTwo = () => {
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
									Digital arts are trends now. Welcome to the world of NFTs.
								</h2>
								<p
									className="mb-4"
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="500"
								>
									It is crafted with the latest trend of design &amp; coded with
									all modern approaches. Its a robust &amp; multi-dimensional
									usable template.
								</p>
								<Link
									className="btn btn-primary rounded-pill"
									href="/collections"
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="800"
								>
									<i className="me-2 bi bi-grid-3x3-gap"></i>View All
									Collections
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
