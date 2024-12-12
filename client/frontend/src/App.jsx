import { useState } from "react";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/Landing/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import FirstNavbar from "./components/firstNavbar/FirstNavbar";
import SecondNavbar from "./components/secondNavbar/SecondNavbar";

function App() {
	const location = useLocation();

	const firstNavbarRoutes = ["/", "/signup", "/login"];

	const showFirstNavbar = firstNavbarRoutes.includes(location.pathname);

	return (
		<>
			<div>
				{showFirstNavbar ? <FirstNavbar /> : <SecondNavbar />}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</div>
		</>
	);
}

export default function AppWrapper() {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}
