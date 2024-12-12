import React from "react";

const Dashboard = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#4361ee] to-[#7b2cbf]">
			<div className="w-full max-w-4xl bg-white rounded-lg shadow-lg px-8 py-12">
				<h1 className="text-4xl font-bold text-[#0f172a] mb-4">
					Good Morning, SVSM
				</h1>
				<p className="text-[#475569] mb-8">Coming up next,</p>
			</div>
		</div>
	);
};

export default Dashboard;
