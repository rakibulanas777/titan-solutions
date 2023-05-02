import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from "../../images/Group 1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "./MobileNavbar.scss";

function MobileNavbar() {
	const [isVisible, setIsVisible] = useState();
	const [nav, setNav] = useState(false);

	const toggle = () => setIsVisible(!isVisible);

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNav(true);
		} else {
			setNav(false);
		}
	};

	const largeScreens = () => {
		if (window.innerWidth > 1100) {
			setIsVisible(false);
		}
	};
	useEffect(() => {
		window.addEventListener("resize", largeScreens);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", changeBackground);
		return () => {
			window.removeEventListener("scroll", changeBackground);
		};
	}, []);

	return (
		<div
			className={nav ? "mobileNavbar-wrapper active" : "mobileNavbar-wrapper"}
		>
			<div className="mobileNavbar-container">
				<div className="top">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
					<GiHamburgerMenu onClick={toggle} className="text-black icon" />
				</div>

				{isVisible && (
					<div data-aos="fade-down" className="bottom" onClick={toggle}>
						<HashLink smooth to="/#home">
							Home
						</HashLink>
						<HashLink smooth to="/#features">
							Features
						</HashLink>
						<HashLink smooth to="/#pricing">
							Pricing
						</HashLink>
						<HashLink smooth to="/#faq">
							FAQ
						</HashLink>
						<HashLink smooth to="/#contact">
							Contact
						</HashLink>
						{/* <button className="pt-8">
							{" "}
							<a href="">Dashboard</a>
						</button> */}
					</div>
				)}
			</div>
		</div>
	);
}

export default MobileNavbar;
