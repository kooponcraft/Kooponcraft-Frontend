import React from "react";
import Link from "next/link";

import DashboardHeroCard from "./DashboardHeroCard";
import DashboardStatisticsChart from "./DashboardStatisticsChart";
import DashboardActivityTab from "./DashboardActivityTab";
import DashboardTrendingAuction from "./DashboardTrendingAuction";
import DashboardFeaturedCard from "./DashboardFeaturedCard";
import DashboardPriceHistory from "./DashboardPriceHistory";
import DashboardTodaysPick from "./DashboardTodaysPick";
import DashboardTopAuthorBuyer from "./DashboardTopAuthorBuyer";
import DashboardCouponSwap from "./DashboardCouponSwap";
import DashboardRedeemNfts from "./DashboardRedeemNfts";
import { getUser } from "@/lib/auth/getUser";

const Dashboard = async () => {
	const user = await getUser()
	return (
		<>
			
			{ 
			user?.isAdmin &&
				<div className="create-new-button">
					<Link
						className="shadow-lg btn btn-warning"
						href="/collection/create"
						data-bs-toggle="tooltip"
						data-bs-placement="left"
						title="Create New NFT"
					>
						<i className="fz-18 bi bi-plus-lg"></i>
					</Link>
				</div>
			}
			<div className="admin-wrapper">
				<div className="container">
					<div className="row g-4">
						<DashboardHeroCard />
						<DashboardStatisticsChart />
						<DashboardCouponSwap />
						<DashboardRedeemNfts />
						{/* <DashboardActivityTab />
						<DashboardTrendingAuction />
						<DashboardFeaturedCard />
						<DashboardPriceHistory />
						<DashboardTodaysPick />
						<DashboardTopAuthorBuyer /> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
