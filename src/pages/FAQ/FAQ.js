import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiChevronDown } from "react-icons/hi";
import "./FAQ.scss";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";

export default function FAQ() {
	useEffect(() => {
		AOS.init();
	}, []);

	const [data, setData] = useState(questions);
	return (
		<div className="faq-wrapper" id="faq">
			<div className="faq-container">
				<h5>Frequently Asked Questions</h5>
				<h2 className="mb-14">
					Get answers to the most commonly asked questions.
				</h2>

				{data.map((curElem) => {
					return <MyAccordion key={curElem.id} element={curElem} />;
				})}
			</div>
		</div>
	);
}
