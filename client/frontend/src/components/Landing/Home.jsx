import React from "react";
import { useNavigate } from "react-router-dom";
import home from "../../assets/images/home.png";
import facebook from "../../assets/images/facebook.png";
import apple from "../../assets/images/apple.png";
import google from "../../assets/images/google.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import reddit from "../../assets/images/reddit.png";
import instagram from "../../assets/images/instagram.png";

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<div className="h-[calc(100vh-16rem)] mt-16 mx-5">
			<div className="flex items-center justify-between bg-white px-8 py-20">
				<div className="ml-20">
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
						<button
							className="bg-[#3793FF] text-white text-xl font-medium py-6 px-6 rounded-lg focus:outline-none cursor-pointer"
							onClick={() => navigate("/dashboard")}
						>
							Start Scheduling
						</button>
					</div>
				</div>
				<img src={home} alt="Home" className="w-1/2 mx-10 mt-5" />
			</div>

			<div className="font-sans">
				{/* Trusted By Section */}
				<div className="text-center py-20 border-y border-gray-1 mt-20">
					<h2 className="text-3xl font-bold mb-6 mt-20">
						Trusted By
					</h2>
					<div className="flex justify-center gap-8 flex-wrap">
						<img
							src={facebook}
							alt="Facebook"
							className="h-9 w-9 mx-10 my-20"
						/>
						<img
							src={apple}
							alt="Apple"
							className="h-9 w-9 mx-10 my-20"
						/>
						<img
							src={google}
							alt="Google"
							className="h-9 w-9 mx-10 my-20"
						/>
						<img
							src={linkedin}
							alt="LinkedIn"
							className="h-9 w-9 mx-10 my-20"
						/>
						<img
							src={twitter}
							alt="X"
							className="h-9 w-9 mx-10 my-20"
						/>
						<img
							src={reddit}
							alt="Reddit"
							className="h-9 w-9 mx-10 my-20"
						/>
						<img
							src={instagram}
							alt="Instagram"
							className="h-9 w-9 mx-10 my-20"
						/>
					</div>
				</div>

				{/* Footer Section */}
				<footer className="bg-gray-100 py-9">
					<div className="container mx-auto px-6 md:px-9 grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Contact Us */}
						<div>
							<h3 className="text-xl font-bold mb-4">
								Contact Us
							</h3>
							<p className="mb-4">Send us a message!</p>
							<form>
								<input
									type="text"
									placeholder="Full Name"
									className="w-f mx-10 mt-10ull mb-4 p-2 border border-gray-300 rounded"
								/>
								<input
									type="email"
									placeholder="Your Email"
									className="w-f mx-10 mt-10ull mb-4 p-2 border border-gray-300 rounded"
								/>
								<textarea
									placeholder="Message"
									className="w-f mx-10 mt-10ull mb-4 p-2 border border-gray-300 rounded"
								></textarea>
								<button
									type="submit"
									className="w-f mx-10 mt-10 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
								>
									Submit
								</button>
							</form>
						</div>

						{/* Sitemap */}
						<div>
							<h3 className="text-xl font-bold mb-4">Sitemap</h3>
							<ul className="list-disc list-inside">
								<li>Product</li>
								<li>Solutions</li>
								<li>Enterprise</li>
								<li>Pricing</li>
								<li>Resources</li>
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h3 className="text-xl font-bold mb-4">SLOTIFY</h3>
							<p className="mb-2">📞 (+91) 934567890</p>
							<p>✉️ mail@address.com</p>
						</div>
					</div>

					<div className="text-center mt-9 text-gray-500">
						&copy; 2024 All Rights Reserved Slotify
					</div>
				</footer>
			</div>
		</div>
	);
};

export default LandingPage;
