import React, { useEffect } from "react";
import AOS from "aos";
import "./styles.scss";

import tw from "../../images/public (1).png";
import ds from "../../images/public.png";
import { Link } from "react-router-dom";

export default function Footer() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className="footer-wrapper">
			<div className="footer-content">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center  ">
					<div className="flex flex-col space-y-2">
						<div className="text-white font-semibold">Company</div>
						<div className="text-white">Pricing</div>
						<div className="text-white">FAQ</div>
					</div>
					<div className="flex flex-col space-y-2">
						<div className="text-white font-semibold">Information</div>
						<div className="text-white">
							<Link to="/tos">Terms and Conditions</Link>
						</div>
						<div className="text-white">Privacy Policy</div>
					</div>

					<div className="flex flex-col space-y-2">
						<div className="text-white font-semibold">Socials</div>
						<div className="flex space-x-3">
							<img src={tw} alt="" />
							<img src={ds} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
