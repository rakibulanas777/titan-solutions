import React, { useState } from "react";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";
const Accordion = () => {
	const [data, setData] = useState(questions);
	return (
		<div className="accordion p-4">
			<div className="container mt-5 mb-5">
				<div className="accordion-title mb-5 mt-5 text-center">
					Frequently Asked Questions
				</div>
				<div className="col-11 mx-auto">
					{data.map((curElem) => {
						return <MyAccordion key={curElem.id} element={curElem} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
