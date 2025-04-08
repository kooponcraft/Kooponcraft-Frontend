import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
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
