"use client"

import { getUser } from "@/lib/auth/getUser";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { BsController, BsFire } from "react-icons/bs";

const DashboardHeroCard = () => {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		(async() => {
			const user = await getUser()
			setUser(user)
		})()
	}, [])

	return (
		<>
			<div className="col-12 col-xxl-6">
				<div className="row g-4">
					<div className="col-12">
						<div
							className="card dashboard-hero-card p-2 border-0 bg-img shadow-sm"
							style={{ backgroundImage: "url(/assets/img/bg-img/44.jpg)" }}
						>
							<div className="card-body p-4">
									<h3 className="mb-3 text-white">
								Explore, trade, and redeem exceptional digital coupons.
								</h3>
								<p className="mb-4 text-white">
									Kooponcraft combines innovative technology with a unique trading experience.
								</p>
								<div className="button-groups">
									<a
										className="btn btn-sm btn-warning rounded-pill me-3"
										href="/explore/nfts"
									>
										Discover Coupons
									</a>
									<a className="btn btn-sm btn-dark rounded-pill" href="/my-tokens">
										Create Your Token
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6">
						<div className="card border-0 shadow-sm h-100 position-relative overflow-hidden">
							<div className="card-body p-4">
								<div className="d-flex align-items-center justify-content-between">
									<div>
										<h5 className="mb-2">
											Points Gained
											<OverlayTrigger
												trigger={['hover', 'focus']}
												placement="right"
												overlay={
													<Popover>
														<Popover.Header as="h3">How to Earn Points</Popover.Header>
														<Popover.Body>
															<ul className="list-unstyled mb-0">
																<li>✓ Daily logins</li>
																<li>✓ Register on the platform</li>
																<li>✓ Purchase an item</li>
																<li>✓ Purchase a coupon</li>
																<li>✓ Swap a coupon</li>
															</ul>
														</Popover.Body>
													</Popover>
												}
											>
												<i className="bi bi-info-circle text-primary ms-2"></i>
											</OverlayTrigger>
										</h5>
										<span style={{ color: "#8084AE" }}>{user?.points}</span>
									</div>
									<div className="ms-auto" id="chart-1"></div>
								</div>
							</div>
							<i className="bi bi-star-fill position-absolute" style={{ fontSize: 100, top: 5, right: 5, translate: "50% -50%" }}></i>
						</div>
					</div>

					<div className="col-12 col-sm-6">
						<div className="card border-0 shadow-sm h-100 position-relative overflow-hidden">
							<div className="card-body p-4">
								<div className="d-flex align-items-center justify-content-between">
									<div>
										<h5 className="mb-2">Login Streak</h5>
										<div style={{ color: "#8084AE" }} className="lh-sm">
											<p>Current: {user?.currentStreak || ""} days</p>
											<p>Longest: {user?.highestStreak || ""} days</p>
										</div>
									</div>
									<div className="ms-auto" id="chart-2"></div>
								</div>
							</div>
							<BsFire className="position-absolute" style={{ fontSize: 100, top: 10, right: 10, translate: "50% -50%" }} />
						</div>
					</div>

					<div className="col-12">
						<div className="card border-0 shadow-sm h-100 position-relative overflow-hidden">
							<div className="card-body p-4">
								<div className="d-flex align-items-center justify-content-between">
									<div>
										<h5 className="mb-2">
											Coupon Match Game
											<OverlayTrigger
												trigger={['hover', 'focus']}
												placement="right"
												overlay={
													<Popover>
														<Popover.Header as="h3">Game Requirements</Popover.Header>
														<Popover.Body>
															You need at least 100 points to play the Coupon Match game. Earn points through daily logins, purchases, and trades!
														</Popover.Body>
													</Popover>
												}
											>
												<i className="bi bi-info-circle text-primary ms-2"></i>
											</OverlayTrigger>
										</h5>
										<div id="gameStatus" className="mt-2">
                                            <div className="d-flex align-items-center">
                                                <span id="gameAvailability" className={user && user?.points >= 100 ? "text-success" : "text-warning"}>
													{
														user && (user?.points >= 100 ? "Available to Play!" : `Need ${100 - user?.points} more points`)
													}
												</span>
                                            </div>
                                        </div>
										<div className="mt-2">
											{
												user && user?.points >= 100 ? (
													<Link id="playGameBtn" href="/coupon-match" className="btn btn-sm btn-primary">
														Play Now
													</Link>
												) : (
													<button id="insufficientPointsBtn" className="btn btn-sm btn-secondary" disabled>
														Need 100 Points
													</button>
												)
											}
										</div>
									</div>
								</div>
							</div>
							<BsController className="position-absolute" style={{ fontSize: 100, top: 20, right: 20, translate: "50% -50%" }} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardHeroCard;
