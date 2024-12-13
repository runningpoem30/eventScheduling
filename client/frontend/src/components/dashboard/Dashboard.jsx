import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMicrosoft, FaRegCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
	const [firstName, setFirstName] = useState("");
	const navigate = useNavigate();
	const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
	const [events, setEvents] = useState([
		{
			id: 1,
			eventName: "Team Meet",
			type: "Online",
			service: "Microsoft Teams",
			month: new Date().getMonth(),
		},
		{
			id: 2,
			eventName: "Project Discussion",
			type: "Offline",
			service: "-",
			month: new Date().getMonth() - 1,
		},
	]);

	useEffect(() => {
		const userData = localStorage.getItem("newUser");
		if (userData) {
			const parsedUser = JSON.parse(userData);
			setFirstName(parsedUser.firstName || "User"); // Fallback to user
		}
	}, []);

	//TODO
	const handleAddEvent = () => {
		const newEvent = {
			id: events.length + 1,
			eventName: "New Event", // to be replaced this with user input
			type: "Online",
			service: "Zoom",
			month: "month",
		};
		setEvents((prevEvents) => [...prevEvents, newEvent]);
	};

	const handleMonthChange = (e) => {
		setSelectedMonth(Number(e.target.value));
	};

	const filteredEvents = events.filter(
		(event) => event.month === selectedMonth
	);
	return (
		<div className="h-[calc(100vh-12rem)] w-screen flex mt-16">
			<div className="w-1/5 flex flex-col items-center pt-10 space-y-4 border-r border-gray-2">
				<button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">
					Schedule a meet
				</button>
				<button
					className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-600"
					onClick={() => navigate("/event")}
				>
					Add an event
				</button>
				<button className="bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-500">
					View Schedule
				</button>
			</div>

			{/* main content */}
			<div className="flex-1 flex-col justify-center items-start px-10">
				<h1 className="text-6xl font-bold mb-2">
					Good Morning,{" "}
					<span className="text-blue-400">{firstName}</span>
				</h1>
				<p className="text-3xl font-medium">Coming up next,</p>

				{/* Month Selector */}
				<div className="mt-5 pt-10">
					<label
						className="text-lg font-semibold mr-4"
						htmlFor="monthSelector"
					>
						Select Month:
					</label>
					<select
						id="monthSelector"
						className="border rounded-md px-4 py-2"
						value={selectedMonth}
						onChange={handleMonthChange}
					>
						{Array.from({ length: 12 }).map((_, index) => (
							<option key={index} value={index}>
								{new Date(0, index).toLocaleString("default", {
									month: "long",
								})}
							</option>
						))}
					</select>
				</div>

				{/* Events Table */}
				<div className="mt-10 w-full">
					<h2 className="text-2xl font-semibold mb-4 flex items-center">
						<FaRegCalendarAlt className="mr-2 text-gray-600" />
						Your Events
					</h2>
					<table className="w-full border-collapse border border-gray-300">
						<thead>
							<tr className="bg-gray-100">
								<th className="border border-gray-300 px-4 py-2">
									Sl. No.
								</th>
								<th className="border border-gray-300 px-4 py-2">
									Event Name
								</th>
								<th className="border border-gray-300 px-4 py-2">
									Type
								</th>
								<th className="border border-gray-300 px-4 py-2">
									Service
								</th>
							</tr>
						</thead>
						<tbody>
							{filteredEvents.length > 0 ? (
								filteredEvents.map((event, index) => (
									<tr
										key={event.id}
										className="hover:bg-gray-50"
									>
										<td className="border border-gray-300 px-4 py-2 text-gray-700">
											{index + 1}
										</td>
										<td className="border border-gray-300 px-4 py-2 text-black-600 font-medium">
											{event.eventName}
										</td>
										<td className="border border-gray-300 px-4 py-2">
											{event.type}
										</td>
										<td className="border border-gray-300 px-4 ">
											{event.service === "Microsoft Teams"
												? "Microsoft Teams"
												: event.service}
										</td>
									</tr>
								))
							) : (
								<tr>
									<td
										colSpan="4"
										className="text-center text-gray-500 py-4"
									>
										No events for this month.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
