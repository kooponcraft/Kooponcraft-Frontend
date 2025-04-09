import Link from "next/link";
import menu_data from "./MenuData";

const NavMenu = ({ filteredMenuData }: { filteredMenuData: typeof menu_data }) => {
	return (
		<>
			<ul className="navbar-nav navbar-nav-scroll align-items-center my-2 my-lg-0">
				{filteredMenuData.map((item, i) => (
					<li key={i} className={`${item.has_dropdown ? "ft-dd" : ""}`}>
						<Link href={item.link}>{item.title}</Link>
						{item.has_dropdown && (
							<ul className="ft-dd-menu">
								{item.sub_menus?.map((sub_item, index) => (
									<li
										key={index}
										className={`${sub_item.inner_has_dropdown ? "ft-dd" : ""}`}
									>
										{sub_item.title !== "No Stores Available" ? (
											<>
												<Link href={sub_item.link}>{sub_item.title}</Link>
												{sub_item.inner_has_dropdown && (
													<ul className="ft-dd-menu">
														{sub_item.inner_sub?.map((inner_sub, inner_index) => (
															<li key={inner_index}>
																<Link href={inner_sub.link}>
																	{inner_sub.title}
																</Link>
															</li>
														))}
													</ul>
												)}
											</>
										) : (
											<span className="px-4">{sub_item.title}</span>
										)}
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</>
	);
};

export default NavMenu;
