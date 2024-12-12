import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5001/user/login", { email, password })
			.then((result) => {
				console.log(result);
				if (result.data === "success") {
					navigate("/home");
				}
			});
	};

	return (
		<div className={styles.container}>
			<div className="text-[40px] font-bold">Log in </div>
			<div className={styles.content}>
				<form onSubmit={handleSubmit}>
					<div className={styles.user_details}>
						<div className={styles.input_box}>
							<span className={styles.details}>Email</span>
							<input
								type="text"
								className="h-[45px] w-[512px] text-base border border-black pl-4 rounded-md"
								onChange={(e) => setEmail(e.target.value)}
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

						<div className="button">
							<button className="ml-[200px] mt-[10px] bg-[#3793FF] px-10 text-[white] py-3 rounded-[5px]">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
