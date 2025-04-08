import React from "react";
import CtaHomeTwo from "./CtaHomeTwo";
import HeroAreaHomeTwo from "./HeroAreaHomeTwo";
import LatestCouponDeals from "./LatestCouponDeals";
import Divider from "@/components/common/Divider";
import ProcessHomeOne from "../home/ProcessHomeOne";
import TrendingInStores from "../home/TrendingInStores";
import TopPerformers from "../home/TopPerformers";
import ScrollToTop from "@/components/common/ScrollToTop";
import ExploreCategeries from "./ExploreCategeries";
import RareToken from "./RareToken";

const HomeTwo = () => {
	return (
		<>
			<ScrollToTop />
			
			<HeroAreaHomeTwo />
			<Divider />
			<TrendingInStores />
			<Divider />
			<ExploreCategeries />
			<Divider />
			<RareToken />
			<Divider />
			<ProcessHomeOne />
			<Divider />
			<TopPerformers />
			<Divider />
			<LatestCouponDeals />
			<Divider />
			<CtaHomeTwo />
			<Divider />
			
		</>
	);
};

export default HomeTwo;
