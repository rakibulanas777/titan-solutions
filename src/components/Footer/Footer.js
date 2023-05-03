import React, { useEffect } from "react";
import AOS from "aos";
import "./styles.scss";

import tw from "../../images/public (1).png";
import ds from "../../images/public.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className="footer-wrapper">
			<div className="footer-content" data-aos="zoom-in">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center  ">
					<div className="flex flex-col space-y-2">
						<div className="text-white font-semibold">Company</div>
						<HashLink smooth className="linkn text-white" to="/#features">
							Pricing
						</HashLink>

						<HashLink smooth className="link text-white" to="/#faq">
							FAQ
						</HashLink>
					</div>
					<div className="flex flex-col space-y-2">
						<div className="text-white font-semibold">Information</div>
						<div className="text-white">
							<Link to="/tos">Terms and Conditions</Link>
						</div>
						<div className="text-white cursor-pointer">Privacy Policy</div>
					</div>

					<div className="flex flex-col space-y-2">
						<div className="text-white font-semibold">Socials</div>
						<div className="flex space-x-3">
							<a
								href="https://twitter.com/TitanSolutionss"
								target="_blank"
								className="transform transition duration-500 hover:scale-110 "
								rel="noopener noreferrer"
							>
								<img src={tw} alt="" className="cursor-pointer" />
							</a>

							<a
								href="https://discord.gg/sjgHJhdpG8"
								target="_blank"
								className="transform transition duration-500 hover:scale-110 "
								rel="noopener noreferrer"
							>
								<img src={ds} alt="" className="cursor-pointer" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
