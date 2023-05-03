import React, { useState } from "react";
import PlanCard from "./PlanCard/PlanCard";
import "./styles.scss";

export default function Plans() {
	const [clicked, setClicked] = useState("ISPs");
	return (
		<div className="plans-wrapper" id="pricing">
			<div className="plans-container">
				<h4>Our Products</h4>

				<div className="tabs-container">
					<button
						onClick={() => setClicked("ISPs")}
						className={clicked === "ISPs" ? "selected" : ""}
					>
						ISPs
					</button>
				</div>
				{clicked === "ISPs" && (
					<div className="content">
						{[
							{
								heading: "Monthly",
								title: "UK ISPs UK DCs",

								l1: " Instant Delivery",
								l2: "99% Uptime",
								l3: " 30 day expiry",
								l4: "UK Hosted",

								opt1: "£1.70 for ISPs",
								opt2: " £1.30 for DCs",
							},

							{
								heading: "Monthly",
								title: "DE ISPs",

								l1: " Instant Delivery",
								l2: "99% Uptime",
								l3: " 30 day expiry",
								l4: "DE Hosted",

								opt1: "£1.70",
							},
							{
								heading: "Monthly",
								title: "USA ISPs",

								l1: " Instant Delivery",
								l2: "99% Uptime",
								l3: " 30 day expiry",
								l4: "US Hosted",

								opt1: "£1.70",
							},
						].map((item, i) => (
							<PlanCard key={i} data={item} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
