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
				<div class="text-center mb-14">
					<span>Features</span>
					<h1 class="sm:text-3xl text-2xl font-medium title-font mt-2 text-black mb-4">
						What we have to offer
					</h1>
					<p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
						We have a full range of different products to support your sneaker
						botting career from <span>ISPs, residential and gmails.</span>
					</p>
				</div>
				<div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
					<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
						<img src={i1} className="w-14 h-14 mb-8" alt="" />
						<div class="flex-grow">
							<h2 class="text-black text-lg title-font font-medium mb-3">
								Lightning Speeds
							</h2>
							<p class="leading-relaxed text-black">
								Our Proxies are <span>extremely fast</span> allowing your
								checkout times to be even faster! Try using Gravity proxies
								today.
							</p>
						</div>
					</div>
					<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
						<img src={i2} className="w-14 h-14 mb-8" alt="" />
						<div class="flex-grow">
							<h2 class="text-black text-lg title-font font-medium mb-3">
								24/7 Support
							</h2>
							<p class="leading-relaxed text-black">
								We provide <span>support for any issues</span> that you may
								have. We have a <span>Discord</span> with staff that are happy
								to assist you.
							</p>
						</div>
					</div>
					<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
						<img src={i3} className="w-14 h-14 mb-8" alt="" />
						<div class="flex-grow">
							<h2 class="text-black text-lg title-font font-medium mb-3">
								Universal Proxies
							</h2>
							<p class="leading-relaxed text-black">
								Our proxies are <span>fast & reliable</span> . We are compatible
								with Supreme, Shopify, Footsites, SNKRS, Adidas, and much more!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
