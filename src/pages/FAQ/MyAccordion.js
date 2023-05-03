import React, { useState } from "react";

const MyAccordion = ({ element }) => {
	const { question, answer } = element;
	const [show, setShow] = useState(false);
	return (
		<div
			className="answer-qestion bg-gray-900  w-full cursor-pointer text-white py-3 mb-2 px-10"
			data-aos="fade-up"
		>
			<div
				className=" flex justify-between items-center"
				onClick={() => setShow(!show)}
			>
				<div className="question font-bold transition-all duration-300">
					{question}
				</div>
				{show ? (
					<i class="fas fa-angle-up"></i>
				) : (
					<i class="fas fa-angle-down"></i>
				)}
			</div>
			{show && <p className="text-start mt-2">{answer}</p>}
		</div>
	);
};

export default MyAccordion;
