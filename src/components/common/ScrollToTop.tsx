"use client";
import UseSticky from "@/hooks/UseSticky";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";


const ScrollToTop = () => {
	const { sticky }: { sticky: boolean } = UseSticky();

	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => window.removeEventListener("scroll", checkScrollTop);
	}, []);

	return (
		<>
			<div
				id="scrollTopButton"
				onClick={scrollTop}
				className={`${sticky ? "scrolltop-show" : "scrolltop-hide"}`}
			>
				<FaArrowUp />
			</div>
		</>
	);
};

export default ScrollToTop;
