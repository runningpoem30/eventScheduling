import slotifyLogo from "../../assets/images/slotifyLogo.png";
import { useNavigate } from "react-router-dom";

const FirstNavbar = () => {
	const navigate = useNavigate();
	return (
		<div className="absolute top-0 left-0 w-full mt-[20px] border-b-2 border-b-black-100 ">
			<nav className="flex justify-between">
				<img
					src={slotifyLogo}
					className="h-[45px] mb-[20px] ml-[25px] cursor-pointer"
					onClick={() => navigate("/")}
				></img>
				<ul className="flex gap-[50px] ml-[700px] py-2">
					<li className="text-[18px] text-[#2C2C2C] font-bold cursor-pointer">
						Product
					</li>
					<li className="text-[18px] text-[#2C2C2C] font-bold cursor-pointer">
						Solutions
					</li>
					<li className="text-[18px] text-[#2C2C2C] font-bold cursor-pointer">
						Enterprise
					</li>
					<li className="text-[18px] text-[#2C2C2C] font-bold cursor-pointer">
						Pricing
					</li>
					<li className="text-[18px] text-[#2C2C2C] font-bold cursor-pointer">
						Resources
					</li>
					<li
						className="text-[15px] text-[#2c2c2c] font-bold mt-[3px] cursor-pointer"
						onClick={() => navigate("/login")}
					>
						Login
					</li>
				</ul>
				<button
					className="bg-[#3793FF] py-2 px-8 text-[white]  rounded-[8px] ml-[20px] align-center mb-[15px] mr-[20px] cursor-pointer"
					onClick={() => navigate("/signup")}
				>
					Get Started
				</button>
			</nav>
		</div>
	);
};

export default FirstNavbar;
