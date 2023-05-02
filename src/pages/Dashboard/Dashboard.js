import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import dashbord from "../../images/dashboard.svg";
import "./styles.scss";

export default function Dashboard() {
	return (
		<div className="dashboard-wrapper">
			<div className="dashboard-container">
				<div className="left">
					<img src={dashbord} alt="" />
				</div>
				<div className="right">
					<h3>Sleek, easy to use user dashboard</h3>
					<p>
						All our orders are dispatched through our instant automated delivery
						system via email and applied to your customer dashboard. Allowing
						for easy access, management and renewal of your proxies. We strive
						to provide a seamless solution at all times, to ensure our customer
						has a great experience.
					</p>
					<HashLink smooth to="/#pricing">
						<button>Buy Now</button>
					</HashLink>
				</div>
			</div>
		</div>
	);
}
