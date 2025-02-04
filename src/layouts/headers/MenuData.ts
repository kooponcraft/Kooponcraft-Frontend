 
 
interface DataType  {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
      link: string;
      title: string;
      inner_has_dropdown?: boolean;
      inner_sub?: {
        link: string,
        title: string,
      }[];
  }[];
}

// menu data
const menu_data:DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/", title: "Home Variation 1" },
			{ link: "/home-2", title: "Home Variation 2" },
		],
	},
	{
		id: 2,
		title: "Explore",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/explore-1", title: "Explore 1" },
			{ link: "/explore-2", title: "Explore 2" },
			{ link: "/featured-items", title: "Featured Drops" },
			{ link: "/live-bidding", title: "Live Auctions" },
			{ link: "/collections", title: "Collections" },
			{ link: "/top-seller", title: "Top Seller" },
			{ link: "/top-buyer", title: "Top Buyer" },
			{ link: "/item-details", title: "Item Details" },
		],
	},
	{
		id: 3,
		title: "Admin",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/dashboard", title: "Dashboard" },
			{ link: "/live-bids", title: "Live Bids" },
			{ link: "/my-collection", title: "My Collection" },
			{ link: "/my-wallet", title: "My Wallet" },
			{ link: "/notifications", title: "Notifications" },
			{ link: "/settings", title: "Settings" },
		],
	},
	{
		id: 4,
		title: "Pages",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/activity", title: "Activity" },
			{ link: "/ranking", title: "Ranking" },
			{ link: "/create-new", title: "Create New Items" },
			{ link: "/connet-wallet", title: "Connect Wallet" },
			{ link: "/author", title: "Author Profile" },
			{
				link: "#",
				title: "Authentification",
				inner_has_dropdown: true,
				inner_sub: [
					{ link: "/register", title: "Register" },
					{ link: "/login", title: "Login" },
					{ link: "/forget-password", title: "Forget Password" },
				],
			},
			{
				link: "#",
				title: "Blog",
				inner_has_dropdown: true,
				inner_sub: [
					{ link: "/blog", title: "Blog" },
					{ link: "/blog-details", title: "Blog Details" },
				],
			},
			{
				link: "#",
				title: "Others",
				inner_has_dropdown: true,
				inner_sub: [
					{ link: "/about", title: "About Us" },
					{ link: "/contact", title: "Contact" },
					{ link: "/coming-soon", title: "Coming Soon" },
					{ link: "/newsletter", title: "Newsletter" },
					{ link: "/privacy", title: "Privacy Policy" },
					{ link: "/terms", title: "Terms" },
					{ link: "/404", title: "404" },
				],
			},
			{
				link: "#",
				title: "Help Center",
				inner_has_dropdown: true,
				inner_sub: [
					{ link: "/help-center", title: "Help Home" },
					{ link: "/help-questions", title: "All Questions" },
					{ link: "/question-details", title: "Question Details" },
				],
			},
		],
	},
	{
		id: 6,
		title: "Help Center",
		link: "/help-center",
		has_dropdown: false,
	},
];
export default menu_data;
