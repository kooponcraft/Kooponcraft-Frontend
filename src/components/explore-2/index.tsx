import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import Divider from "../common/Divider";
import ExploreItemsTwo from "./ExploreItemsTwo";


const ExploreTwo = () => {
	return (
		<>
			
			<Breadcrumb title="Explore" subtitle="Explore Two" />
			<Divider />
			<ExploreItemsTwo />
			<Divider />
			
		</>
	);
};

export default ExploreTwo;
