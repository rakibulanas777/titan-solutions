import React, { useEffect } from "react";
import AOS from "aos";

import "./styles.scss";
import home from "../../images/[CITYPNG 2.png";
import { HashLink } from "react-router-hash-link";

export default function Home() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className="home-wrapper" id="home" data-aos="fade-up">
			<div className="home-container">
				<div className="right">
					<h3>
						The only proxy solution <br /> you need
					</h3>
					<p>Unmatched performance</p>
					<div>
						<HashLink smooth to="/#pricing">
							<button>Get Started</button>
						</HashLink>
					</div>
				</div>
				<div className="left">
					<img src={home} alt="" />
				</div>
			</div>
		</div>
	);
}
