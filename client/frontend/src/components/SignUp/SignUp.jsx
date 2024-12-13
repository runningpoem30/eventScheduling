import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [companyName, setCompanyName] = useState();
	const [email, setEmail] = useState();
	const [phoneNumber, setPhoneNumber] = useState();
	const [city, setCity] = useState();
	const [state, setState] = useState();
	const [street, setStreet] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5001/user/signup", {
				firstName,
				lastName,
				companyName,
				email,
				phoneNumber,
				city,
				state,
				street,
				password,
				confirmPassword,
			})
			.then((result) => {
				console.log(result);
				localStorage.setItem("newUser", JSON.stringify({ firstName }));
				navigate("/login");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className={styles.container}>
			<div className="text-[40px] font-bold">Sign Up</div>
			<div className={styles.content}>
				<form onSubmit={handleSubmit}>
					<div className={styles.user_details}>
						<div className={styles.input_box}>
							<span className={styles.details}>First Name</span>
							<input
								type="text"
								className="h-[45px] w-[250px] text-base border border-black pl-4 rounded-md"
								onChange={(e) => setFirstName(e.target.value)}
							></input>
						</div>

						<div className={styles.input_box}>
							<span className={styles.details}>Last Name</span>
							<input
								type="text"
								className="h-[45px] w-[250px] text-base border border-black pl-4 rounded-md"
								onChange={(e) => setLastName(e.target.value)}
							></input>
						</div>

						<div className={styles.input_box}>
							<span className={styles.details}>Company Name</span>
							<input
								type="text"
								className="h-[45px] w-[512px] text-base border border-black pl-4 rounded-md"
								onChange={(e) => setCompanyName(e.target.value)}
							></input>
						</div>

						<div className={styles.input_box}>
							<span className={styles.details}>Email</span>
							<input
								type="text"
								className="h-[45px] w-[250px] text-base border border-black pl-4 rounded-md"
								onChange={(e) => setEmail(e.target.value)}
							></input>
						</div>

						<div className={styles.input_box}>
							<span className={styles.details}>Phone Number</span>
							<input
								type="text"
								className="h-[45px] w-[250px] text-base border border-black pl-4 rounded-md"
								onChange={(e) => setPhoneNumber(e.target.value)}
							></input>
						</div>

						<div className={styles.input_box}>
							<span className={styles.details}>City</span>
							<input
								type="text"
								className="h-[45px] w-[250px] text-base border border-black pl-4 rounded-md"
								onChange={(e) => setCity(e.target.value)}
							></input>
						</div>

						<div className={styles.input_box}>
							<span className={styles.details}>State</span>
							<input
								type="text"
								className="h-[45px] w-[250px] text-base border border-black pl-4 rounded-md"
								onChange={(e) => setState(e.target.value)}
							></input>
						</div>

						<div className={styles.input_box}>
							<span className={styles.details}>Street</span>
							<input
								type="text"
								className="h-[45px] w-[512px] text-base border border-black pl-4 rounded-md"
								onChange={(e) => setStreet(e.target.value)}
							></input>
						</div>

						<div className={styles.input_box}>
							<span className={styles.details}>Password</span>
							<input
								type="text"
								className="h-[45px] w-[512px] text-base border border-black pl-4 rounded-md"
								onChange={(e) => setPassword(e.target.value)}
							></input>
						</div>

						<div className={styles.input_box}>
							<span className={styles.details}>
								Confirm Password
							</span>
							<input
								type="text"
								className="h-[45px] w-[512px] text-base border border-black pl-4 rounded-md"
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
							></input>
						</div>
						<div className="button">
							<button
								className="ml-[200px] mt-[10px] bg-[#3793FF] px-10 text-[white] py-3 rounded-[5px]"
								onClick={() => navigate("/dashboard")}
							>
								Submit
							</button>
						</div>
					</div>
				</form>
				<div className="flex">
					<p className="ml-[190px] mt-[10px] ">
						Already Have an Account?
					</p>
					<Link
						to="/login"
						className="btn btn-default bg-[#3793FF] px-10 text-[white] py-2 rounded-[5px]"
					>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};
export default SignUp;
