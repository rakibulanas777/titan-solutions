import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.scss";

export default function PlanCard(props) {
	const { data } = props;
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="planCard-wrapper cursor-pointer" data-aos="flip-down">
			<div className="title-container">
				{/* <h5>{data.heading}</h5> */}
				<h3>{data.title}</h3>
			</div>

			<ul>
				<li>{data.l1}</li>
				<li>{data.l2}</li>
				<li>{data.l3}</li>
				{data.l4 && <li>{data.l4}</li>}
				{data.l5 && <li>{data.l5}</li>}
			</ul>

			<select>
				<option>{data.opt1}</option>
				{data.opt2 && <option>{data?.opt2}</option>}
			</select>

			<a href="https://dashboard.titansolutions.co.uk/">
				<button>Buy Now</button>
			</a>
		</div>
	);
}
