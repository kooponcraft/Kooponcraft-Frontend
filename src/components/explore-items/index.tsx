import React, { Suspense } from "react";

import Breadcrumb from "../common/Breadcrumb";
import Divider from "../common/Divider";
import ExploreItems from "./ExploreItems";


const ExploreTwo = () => {
	return (
		<>
			
			<Breadcrumb title="Explore" subtitle="Explore Items" />
			<Divider />
			<Suspense fallback={<div></div>}>
				<ExploreItems />
			</Suspense>
			<Divider />
			
		</>
	);
};

export default ExploreTwo;
