"use client";

import Image from "next/image";


import active_data from "@/data/activity-data";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import React, { useState } from "react";



const ActivityArea = () => {

	const selectHandler = (e: any) => { }; 


	return (
		<>
			<div className="activity-wrapper">
				<div className="container">
					<div className="row g-4 justify-content-between">
						<div className="col-12 col-sm-6 col-lg-3">
							<form onSubmit={(e) => e.preventDefault()}>
								<input
									className="form-control"
									type="search"
									placeholder="Search"
								/>
							</form>
						</div>

						<div className="col-12 col-sm-6 col-lg-3">
							<NiceSelect
								className="filter-select bg-gray w-100 d-flex align-items-center"
								options={[
									{ value: "All", text: "All" },
									{ value: "01", text: "Purchase" },
									{ value: "02", text: "Offer" },
									{ value: "03", text: "Auctions" },
								]}
								defaultCurrent={0}
								onChange={selectHandler}
								placeholder="Select an option"
								name="myNiceSelect"
							/>

							
						</div>


					</div>
				</div>
				<div className="mt-4 d-block w-100"></div>
				<div className="container">
					<div className="table-responsive border shadow-sm activity-table mb-70 item_table">
						<table className="table mb-0">
							<thead>
								<tr>
									<th scope="col">Item</th>
									<th scope="col">Price</th>
									<th scope="col">Author</th>
									<th scope="col">Event</th>
									<th scope="col">Time</th>
								</tr>
							</thead>
							<tbody>
								{active_data.slice(0, 9).map((item, i) => (
									<tr key={i}>
										<th scope="row">
											<Link
												className="btn btn-minimal text-dark hover-primary"
												href="/item-details"
											>
												<Image layout="fill" className="rounded me-1" src={item.img} alt="" />
												{item.item}
											</Link>
										</th>
										<td>
											{" "}
											<span className="d-inline-block fw-bold fz-14">
												{item.price}
											</span>
										</td>
										<td>
											<Link
												className="btn btn-minimal text-dark hover-primary"
												href="/author"
											>
												<Image layout="fill"
													className="rounded-pill me-1"
													src={item.authorImg}
													alt=""
												/>
												@ {item.author}
											</Link>
										</td>
										<td>
											<i className="bi bi-cart"></i>
											{item.event}
										</td>
										<td>
											<i className="bi bi-clock"></i>
											{item.time}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div className="kooponcraft-pagination">
					<nav aria-label="Page navigation example">
						<ul className="pagination justify-content-center mb-0">
							<li className="page-item active">
								<a className="page-link" href="#">
									1
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									2
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									3
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									4
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									...
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									9
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default ActivityArea;
