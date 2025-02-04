import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import Divider from "../common/Divider";
import ExploreItemsTwo from "./ExploreItemsTwo";
import FooterOne from "@/layouts/footers/FooterOne";

const ExploreTwo = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Explore" subtitle="Explore Two" />
			<Divider />
			<ExploreItemsTwo />
			<Divider />
			<FooterOne />
		</>
	);
};

export default ExploreTwo;
