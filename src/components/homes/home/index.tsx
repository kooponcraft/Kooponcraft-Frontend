'use client';

import React from "react";
import HeorAreaHomeOne from "./HeorAreaHomeOne";
import FeaturedHomeOne from "./FeaturedHomeOne";
import TopSellerHomeOne from "./TopSellerHomeOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import LiveAuctionHomeOne from "./LiveAuctionHomeOne";
import Divider from "@/components/common/Divider";
import DiscoverHomeOne from "./DiscoverHomeOne";
import PopularCollectionHomeOne from "./PopularCollectionHomeOne";
import ProcessHomeOne from "./ProcessHomeOne";
import CollectionHomeOne from "./CollectionHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import ScrollToTop from "@/components/common/ScrollToTop";


const HomeOne = () => {
	return (
		<>
			<ScrollToTop />
			<HeaderOne />
			<HeorAreaHomeOne />
			<Divider />
			<FeaturedHomeOne />
			<Divider />
			<TopSellerHomeOne />
			<Divider />
			<LiveAuctionHomeOne />
			<Divider />
			<DiscoverHomeOne />
			<Divider />
			<PopularCollectionHomeOne />
			<Divider />
			<ProcessHomeOne />
			<Divider />
			<CollectionHomeOne />
			<Divider />
			<FooterOne />
		</>
	);
};

export default HomeOne;
