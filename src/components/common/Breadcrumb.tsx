import Link from "next/link";
import React from "react";

const Breadcrumb = ({title, subtitle} : any) => {
	return (
		<>
			<div className="breadcrumb-wrapper">
				<div className="container">
					<div className="breadcrumb-content">
						<h2 className="breadcrumb-title">{subtitle}</h2>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb justify-content-center">
								<li className="breadcrumb-item">
									<Link href="/">Home</Link>
								</li>
								<li className="breadcrumb-item active" aria-current="page">
									{title}
								</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default Breadcrumb;
