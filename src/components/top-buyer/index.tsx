import React from "react";

import Breadcrumb from "../common/Breadcrumb";
import Divider from "../common/Divider";
import TopBuyerArea from "./TopBuyerArea";


const TopBuyer = () => {
	return (
		<>
			
			<Breadcrumb title="Top Buyer" subtitle="Top Buyer" />
			<Divider />
			<TopBuyerArea />
			<Divider />
			
		</>
	);
};

export default TopBuyer;
