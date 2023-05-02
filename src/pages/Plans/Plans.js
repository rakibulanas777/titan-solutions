import React, { useState } from "react";
import PlanCard from "./PlanCard/PlanCard";
import "./styles.scss";

export default function Plans() {
	const [clicked, setClicked] = useState("Residential");
	return (
		<div className="plans-wrapper" id="pricing">
			<div className="plans-container">
				<h4>Our Products</h4>

				<div className="tabs-container">
					<button
						onClick={() => setClicked("Residential")}
						className={clicked === "Residential" ? "selected" : ""}
					>
						Residential
					</button>
					<button
						onClick={() => setClicked("isp")}
						className={clicked === "isp" ? "selected" : ""}
					>
						ISPs
					</button>
					<button
						className={clicked === "subnets" ? "selected" : ""}
						onClick={() => setClicked("subnets")}
					>
						Subnets
					</button>
					<button>
						<a
							href="https://bitvps.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Services
						</a>
					</button>
				</div>
				{clicked === "Residential" && (
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
								title: "DE",

								l1: " Instant Delivery",
								l2: "99% Uptime",
								l3: " 30 day expiry",
								l4: "DE Hosted",

								opt1: "£1.70",
							},
							{
								heading: "Monthly",
								title: "US",

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
				{clicked === "isp" && (
					<div className="content">
						{[
							{
								heading: "Monthly",
								title: "Packetstream",

								l1: " Instant Delivery",
								l2: " Use as filler data for other plans",
								l3: " Mixed Pools, Maximum Reliability",
								l4: " Great for Retail/Misc Sites",
								l5: "No Expiration on Data",
								opt1: "1 Gb",
								opt2: "2",
							},
						].map((item, i) => (
							<PlanCard key={i} data={item} />
						))}
					</div>
				)}

				{clicked === "subnets" && (
					<div className="content">
						{[
							{
								heading: "Monthly",
								title: "Packetstream",

								l1: " Instant Delivery",
								l2: " Use as filler data for other plans",
								l3: " Mixed Pools, Maximum Reliability",
								l4: " Great for Retail/Misc Sites",
								l5: "No Expiration on Data",
								opt1: "1 Gb",
								opt2: "2",
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
