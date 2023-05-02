import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/Group 1.png";
import { Link } from "react-router-dom";

function Navbar() {
	const [nav, setNav] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 100) {
			setNav(true);
		} else {
			setNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeBackground);
		return () => {
			window.removeEventListener("scroll", changeBackground);
		};
	}, []);

	return (
		<div
			data-aos="fade-up"
			data-aos-anchor-placement="top-bottom"
			className={nav ? "navbar-wrapper active" : "navbar-wrapper"}
		>
			<div className="navbar-container">
				<img src={logo} alt="" className="logo" />
				<div>
					<div data-aos="left">
						<HashLink smooth to="/#home">
							Home
						</HashLink>
						<HashLink smooth to="/#features">
							Features
						</HashLink>
						<HashLink smooth to="/#features">
							Pricing
						</HashLink>

						<HashLink smooth to="/#faq">
							FAQ
						</HashLink>
					</div>

					<div className="right">
						<button>
							{" "}
							<a href="">Dashboard</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
