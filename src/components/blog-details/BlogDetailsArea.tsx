"use client";

import React from "react";
import AppImage from "@/components/common/AppImage";

const BlogDetailsArea = () => {
	return (
		<>
			<div className="blog-details-wrap">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-10">
							<div className="text-center">
								<h1 className="display-5 fw-bold mb-4">
									The beginners guide to creating &amp; selling digital art
									NFTs.
								</h1>
								<div className="post-date border border-2 border-info rounded px-2 py-1 d-inline-block fz-14">
									Oct 3, {new Date().getFullYear()}
								</div>
							</div>
							<div className="mb-5"></div>
						</div>
						<div className="col-12">
							<AppImage
								className="mb-5"
								src="/assets/img/bg-img/44.jpg"
								alt=""
								data-action="zoom"
							/>
						</div>
						<div className="col-10">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Consequatur, animi, numquam. Nam suscipit iste enim deleniti
								vitae facere earum doloribus, tempora alias quas voluptatibus
								aut, voluptates qui nihil, quisquam quos.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolores quibusdam, nam porro cupiditate itaque doloribus commodi
								aut mollitia repellendus. Cum consequuntur nihil, itaque numquam
								aspernatur nisi quo soluta tempora rem?
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								tempore officia, ab, pariatur harum quae cupiditate quia nisi
								atque qui tempora quis neque, molestiae doloribus repudiandae
								excepturi cum vero similique, aliquid laboriosam. Tempore vitae,
								quod rem architecto eum a dolores eveniet dolor aperiam hic
								alias suscipit, animi.
							</p>
							<h2 className="mb-3">
								10 tips for avoiding scams and staying safe.
							</h2>
							<p className="mb-4">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Sapiente enim eligendi natus ratione, quia, illo reiciendis
								voluptas nostrum expedita eum libero. Officiis sapiente non,
								totam numquam dolor. Dolores qui impedit voluptatem accusamus
								odio modi mollitia reiciendis quod tenetur accusantium optio
								soluta excepturi adipisci quidem nobis, totam reprehenderit
								consectetur omnis, nemo ea voluptatum.
							</p>
						</div>
						<div className="col-12">
							<div className="row g-4">
								<div className="col-6">
									<AppImage
										src="/assets/img/bg-img/28.jpg"
										alt=""
										data-action="zoom"
									/>
								</div>
								<div className="col-6">
									<AppImage
										src="/assets/img/bg-img/19.jpg"
										alt=""
										data-action="zoom"
									/>
								</div>
							</div>
							<div className="mb-4"></div>
						</div>
						<div className="col-10">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Consequuntur aliquam mollitia accusantium debitis dolore soluta
								temporibus, laborum, fuga tempora adipisci molestias. Nobis
								similique nulla eveniet incidunt reprehenderit nam, accusantium
								asperiores iure. Quas voluptatem, facere facilis repellat!
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Blanditiis asperiores, quo suscipit quaerat deserunt ullam et
								ab, dolor, architecto totam culpa temporibus. Quo, quidem.
								Molestiae, deserunt impedit neque.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
								sed explicabo! Debitis harum ut dolore cupiditate quidem tempore
								eos aut beatae sint quis nostrum, quas necessitatibus fugiat
								suscipit a veritatis laudantium?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea
								eveniet impedit eius facere eos distinctio temporibus sit.
							</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="border-top my-5"></div>
				</div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-sm-10 col-lg-8">
							<div className="comment-wrapper">
								<h4 className="mb-5">3 Comments</h4>
								<ol className="ps-0 list-unstyled">
									<li className="single-comment">
										<div className="comment-content d-flex">
											<div className="comment-author">
												<AppImage src="/assets/img/bg-img/u4.jpg" alt="author" />
											</div>
											<div className="comment-meta">
												<p>
													Youve saved our business! Thanks guys, keep up the
													good work! The best on the net!
												</p>
												<a className="author" href="#">
													@kooponcraft
												</a>
												<a className="like" href="#">
													<i className="bi bi-heart-fill"></i>Like
												</a>
												<a className="reply" href="#">
													<i className="bi bi-reply-fill"></i>Reply
												</a>
											</div>
										</div>
										<ol className="children list-unstyled">
											<li className="single-comment">
												<div className="comment-content d-flex">
													<div className="comment-author">
														<AppImage src="/assets/img/bg-img/u2.jpg" alt="author" />
													</div>
													<div className="comment-meta">
														<p>
															I strongly recommend agency to EVERYONE interested
															in running a successful online business!
														</p>
														<a className="author" href="#">
															@creative_world
														</a>
														<a className="like" href="#">
															<i className="bi bi-heart-fill"></i>Like
														</a>
														<a className="reply" href="#">
															<i className="bi bi-reply-fill"></i>Reply
														</a>
													</div>
												</div>
											</li>
										</ol>
									</li>

									<li className="single-comment">
										<div className="comment-content d-flex">
											<div className="comment-author">
												<AppImage src="/assets/img/bg-img/u3.jpg" alt="author" />
											</div>
											<div className="comment-meta">
												<p>
													Absolutely wonderful! I wish I would have thought of
													it first. I would be lost without agency.
												</p>
												<a className="author" href="#">
													@nft_fun
												</a>
												<a className="like" href="#">
													<i className="bi bi-heart-fill"></i>Like
												</a>
												<a className="reply" href="#reply-form">
													<i className="bi bi-reply-fill"></i>Reply
												</a>
											</div>
										</div>
									</li>
								</ol>
							</div>
							<div className="mb-5" id="reply-form"></div>
							<div className="contact-area">
								<h4 className="mb-5">Leave A Comment</h4>
								<form
									className="contact-from"
									onSubmit={(e) => e.preventDefault()}
								>
									<div className="row g-4">
										<div className="col-12 col-lg-6">
											<input
												className="form-control"
												type="text"
												name="message-name"
												placeholder="Your Name"
											/>
										</div>
										<div className="col-12 col-lg-6">
											<input
												className="form-control"
												type="email"
												name="message-email"
												placeholder="Your Email"
											/>
										</div>
										<div className="col-12">
											<textarea
												className="form-control"
												name="message"
												placeholder="Type your comments..."
											></textarea>
										</div>
										<div className="col-12">
											<button
												className="btn btn-primary rounded-pill"
												type="submit"
											>
												Submit
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogDetailsArea;
