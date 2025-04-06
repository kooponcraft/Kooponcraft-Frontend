import React from "react";
import CtaHomeTwo from "./CtaHomeTwo";
import HeroAreaHomeTwo from "./HeroAreaHomeTwo";
import DiscoverHomeTwo from "./DiscoverHomeTwo";
import Divider from "@/components/common/Divider";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import ProcessHomeOne from "../home/ProcessHomeOne";
import AppDownloadHomeTwo from "./AppDownloadHomeTwo";
import TopSellerHomeOne from "../home/TopSellerHomeOne";
import TrendingInStores from "../home/TrendingInStores";
import PopularCollectionHomeOne from "../home/PopularCollectionHomeOne";
import ScrollToTop from "@/components/common/ScrollToTop";

const HomeTwo = () => {
	return (
		<>
			<ScrollToTop />
			<HeaderOne />
			<HeroAreaHomeTwo />
			<Divider />
			<TrendingInStores />
			<Divider />
			<ProcessHomeOne />
			<Divider />
			<PopularCollectionHomeOne />
			<Divider />
			<DiscoverHomeTwo />
			<Divider />
			<TopSellerHomeOne />
			<Divider />
			<CtaHomeTwo />
			<Divider />
			<AppDownloadHomeTwo />
			<Divider />
			<FooterOne />
		</>
	);
};

export default HomeTwo;
