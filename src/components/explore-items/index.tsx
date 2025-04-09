import React from "react";

import Breadcrumb from "../common/Breadcrumb";
import Divider from "../common/Divider";
import ExploreItems from "./ExploreItems";


const ExploreTwo = () => {
	return (
		<>
			
			<Breadcrumb title="Explore" subtitle="Explore Items" />
			<Divider />
			<ExploreItems />
			<Divider />
			
		</>
	);
};

export default ExploreTwo;
