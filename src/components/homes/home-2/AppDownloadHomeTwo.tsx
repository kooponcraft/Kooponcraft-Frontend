import React from "react";

import Image from "next/image";
const AppDownloadHomeTwo = () => {
	return (
		<>
			<div className="app-download-wrapper">
				<div className="container">
					<div className="row align-items-center justify-content-center g-4 g-lg-5">
						<div className="col-12 col-lg-6">
							<div className="download-text text-center text-lg-start">
								<h2
									className="mb-3"
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="200"
								>
									Stay connected <br /> to all your devices.
								</h2>
								<p
									className="mb-5"
									data-aos="fade-up"
									data-aos-duration="750"
									data-aos-delay="300"
								>
									Download our mobile apps today.
								</p>
								<div className="row align-items-center justify-content-center justify-content-lg-start g-5">
									<div className="col-5 border-end">
										<div
											className="qr-code-wrapper"
											data-aos="fade-up"
											data-aos-duration="750"
											data-aos-delay="500"
										>
											<Image layout="fill"
												className="p-3 bg-white shadow rounded border w-100"
												src="/assets/img/core-img/qr-code.svg"
												alt=""
											/>
										</div>
									</div>
									<div className="col-5">
										<div className="app-btn-groups text-start">
											<button
												className="btn p-0 mb-4 w-100"
												type="button"
												data-aos="fade-up"
												data-aos-duration="750"
												data-aos-delay="700"
											>
												<Image layout="fill"
													src="/assets/img/core-img/google-play.png"
													alt=""
												/>
											</button>
											<button
												className="btn p-0 w-100"
												type="button"
												data-aos="fade-up"
												data-aos-duration="750"
												data-aos-delay="800"
											>
												<Image layout="fill" src="/assets/img/core-img/app-store.png" alt="" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-8 col-lg-6">
							<div className="download-img">
								<Image layout="fill" src="/assets/img/illustrator/2.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AppDownloadHomeTwo;
