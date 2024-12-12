import React from "react";
import home from "../../assets/images/home.png";

const LandingPage = () => {
	return (
		<div className="flex items-center justify-between bg-white px-8 py-12">
			<div>
				<h1 className="text-6xl font-bold text-[#0f172a] mb-4">
					Effortless
				</h1>
				<h1 className="text-6xl font-bold text-[#0f172a] mb-4">
					scheduling
				</h1>
				<h1 className="text-6xl font-bold text-[#0f172a] mb-10">
					awaits
				</h1>
				<div className="flex items-center justify-left">
					<button className="bg-[#3793FF] text-white text-xl font-medium py-6 px-6 rounded-lg focus:outline-none cursor-pointer">
						Start Scheduling
					</button>
				</div>
			</div>
			<img src={home} alt="Home" className="w-1/2" />
		</div>
	);
};

export default LandingPage;
