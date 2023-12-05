import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function Homepage({ isAuth }) {
	console.log(isAuth);
	const navigate = useNavigate();

	const handleNewReciept = () => {
		navigate("/new-bill");
	};

	const handleEditReciept = () => {
		navigate("/edit-bill");
	};

	const handleDeleteReciept = () => {
		navigate("/delete-bill");
	};

	return (
		<div className="homepage-container">
			<button
				type="submit"
				className="btn btn-success mt-3"
				onClick={handleNewReciept}
			>
				New Bill Reciept
			</button>
			<button
				type="submit"
				className="btn btn-primary mt-3"
				onClick={handleEditReciept}
			>
				Edit Bill Reciept
			</button>
			<button
				type="submit"
				className="btn btn-danger mt-3"
				onClick={handleDeleteReciept}
			>
				Delete Bill Reciept
			</button>
		</div>
	);
}

export default Homepage;
