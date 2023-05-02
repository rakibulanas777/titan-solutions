import React from "react";

import About from "../About/About";
import Dashboard from "../Dashboard/Dashboard";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
import Home from "../Home/Home";
import Plans from "../Plans/Plans";
import ParticlesBackground from "../../components/ParticlesBackground";
import Particles from "react-tsparticles";
import Footer from "../../components/Footer/Footer";
export default function Main() {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);
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
