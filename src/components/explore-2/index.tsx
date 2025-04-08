import React from "react";

import Breadcrumb from "../common/Breadcrumb";
import Divider from "../common/Divider";
import ExploreItemsTwo from "./ExploreItemsTwo";


const ExploreTwo = () => {
	return (
		<>
			
			<Breadcrumb title="Explore" subtitle="Explore Items" />
			<Divider />
			<ExploreItemsTwo />
			<Divider />
			
		</>
	);
};

export default ExploreTwo;
