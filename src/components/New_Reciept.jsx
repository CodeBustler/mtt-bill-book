import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Reciept from "./Reciept";
import Login from "./Login";
import { MyIsAuthContext } from "./Login";

function New_Reciept() {
	const navigate = useNavigate();

	return (
		<div className="reciept-container">
			<h2>New Reciept</h2>
			<Reciept />
		</div>
	);
}

export default New_Reciept;
