import slotifyLogo from "../../assets/images/slotifyLogo.png";
import { useNavigate } from "react-router-dom";

const FirstNavbar = () => {
	const navigate = useNavigate();
	return (
		<div className="absolute top-0 left-0 w-full mt-[20px] border-b-2 border-b-black-100 flex items-center">
			<nav className="flex justify-between">
				<img
					src={slotifyLogo}
					className="h-[45px] mb-[20px] ml-[25px] cursor-pointer"
					onClick={() => navigate("/")}
				></img>
				<ul className="flex gap-[50px] ml-[800px] py-2">
					<li
						className="text-[18px] text-[#2C2C2C] font-bold cursor-pointer"
						onClick={() => navigate("/dashboard")}
					>
						Dashboard
					</li>
					<li className="text-[18px] text-[#2C2C2C] font-bold cursor-pointer">
						Schedule Meeting
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
					<li className="text-[15px] text-[#2c2c2c] font-bold mt-[3px] cursor-pointer ">
						Hey
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default FirstNavbar;
