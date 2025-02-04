import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import Divider from "../common/Divider";
import TopBuyerArea from "./TopBuyerArea";
import FooterOne from "@/layouts/footers/FooterOne";

const TopBuyer = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Top Buyer" subtitle="Top Buyer" />
			<Divider />
			<TopBuyerArea />
			<Divider />
			<FooterOne />
		</>
	);
};

export default TopBuyer;
