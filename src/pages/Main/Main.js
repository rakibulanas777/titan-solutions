import React from "react";

import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
import Home from "../Home/Home";
import Plans from "../Plans/Plans";

import Footer from "../../components/Footer/Footer";
export default function Main() {
	return (
		<div>
			<Home />
			{/* <About /> */}
			<Features />
			<Plans />
			{/* <Dashboard /> */}
			<FAQ />
			<Footer />
		</div>
	);
}
