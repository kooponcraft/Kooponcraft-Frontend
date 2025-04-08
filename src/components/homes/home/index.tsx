'use client';

import React from "react";
import HeorAreaHomeOne from "./HeorAreaHomeOne";
import FeaturedHomeOne from "./FeaturedHomeOne";
import TopSellerHomeOne from "./TopSellerHomeOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import LiveAuctionHomeOne from "./TrendingInStores";
import Divider from "@/components/common/Divider";
import DiscoverHomeOne from "./DiscoverHomeOne";
import PopularCollectionHomeOne from "./TopPerformers";
import ProcessHomeOne from "./ProcessHomeOne";
import CollectionHomeOne from "./CollectionHomeOne";

import ScrollToTop from "@/components/common/ScrollToTop";


const HomeOne = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}
	return (
		<>
			<ScrollToTop />
			
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
			
		</>
	);
};

export default HomeOne;
