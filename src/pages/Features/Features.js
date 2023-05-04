import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import i1 from "../../images/1-removebg-preview 1.png";
import i2 from "../../images/2-removebg-preview 1.png";
import i3 from "../../images/3-removebg-preview 1.png";

import "./styles.scss";

export default function Features() {
	const [open, setOpen] = useState("");

	const unhover = () => {
		setOpen("");
	};

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className="features-wrapper" id="features">
			<div className="features-container">
				<div className="text-center mb-14" data-aos="fade-up">
					<span>Features</span>
					<h1 className="sm:text-3xl text-2xl font-medium title-font mt-2 text-black mb-4">
						What we provide
					</h1>
					<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
						We provide a varied selection of products that are tailored to meet
						your needs.
					</p>
				</div>
				<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
					<div
						className="p-4 md:w-1/3 flex flex-col text-center items-center"
						data-aos="zoom-in"
					>
						<img
							src={i1}
							className="w-14 h-14 mb-8 transform transition duration-500 hover:scale-110 cursor-pointer"
							alt=""
						/>
						<div className="flex-grow">
							<h2 className="text-black text-lg title-font font-medium mb-3">
								Titan Speeds!
							</h2>
							<p className="leading-relaxed text-black">
								Unmatched Speeds getting you to checkout faster then ever
								before. Try our proxies today.
							</p>
						</div>
					</div>
					<div
						className="p-4 md:w-1/3 flex flex-col text-center items-center"
						data-aos="zoom-in"
					>
						<img
							src={i2}
							className="w-14 h-14 cursor-pointer mb-8 transform transition duration-500 hover:scale-110"
							alt=""
						/>
						<div className="flex-grow">
							<h2 className="text-black text-lg title-font font-medium mb-3">
								24/7 Support
							</h2>
							<p className="leading-relaxed text-black">
								We have knowledgeable staff to help in our discord. Providing
								you support at critical times in a timely manner.
							</p>
						</div>
					</div>
					<div
						className="p-4 md:w-1/3 flex flex-col text-center items-center"
						data-aos="zoom-in"
					>
						<img
							src={i3}
							className="w-14 h-14 mb-8 cursor-pointer transform transition duration-500 hover:scale-110"
							alt=""
						/>
						<div className="flex-grow">
							<h2 className="text-black text-lg title-font font-medium mb-3">
								Universal Proxies
							</h2>
							<p className="leading-relaxed text-black">
								Our proxies are highly efficient, dependable, and work
								seamlessly with most websites.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
