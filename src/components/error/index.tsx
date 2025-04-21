
import Link from "next/link";
import React from "react";
import AppImage from "@/components/common/AppImage";
import Breadcrumb from "../common/Breadcrumb";
import Divider from "../common/Divider";


const Error = () => {
	return (
		<>
    
    <Breadcrumb title="Error" subtitle="Error" />
			<div className="kooponcraft-error-area text-center pt-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-sm-10 col-md-9 col-lg-6">
							<AppImage
								className="mb-5"
								src="/assets/img/koopon-logo.png"
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
      
		</>
	);
};

export default Error;
