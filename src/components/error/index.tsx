import HeaderOne from "@/layouts/headers/HeaderOne";
import Link from "next/link";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Divider from "../common/Divider";
import FooterOne from "@/layouts/footers/FooterOne";

const Error = () => {
	return (
		<>
    <HeaderOne />
    <Breadcrumb title="Error" subtitle="Error" />
			<div className="kooponcraft-error-area text-center pt-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-sm-10 col-md-9 col-lg-6">
							<img
								className="mb-5"
								src="/assets/img/illustrator/6.png"
								alt=""
							/>
							<h2>Uh oh! Nothing found.</h2>
							<p>We couldnt find any results for your search. Try again.</p>
							<Link className="btn btn-primary mt-3 rounded-pill" href="/">
								<i className="me-1 bi bi-house"></i>Go home
							</Link>
						</div>
					</div>
				</div>
			</div>
      <Divider />
      <FooterOne />
		</>
	);
};

export default Error;
