import React, { useState, useEffect } from "react";
import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";

export const MyIsAuthContext = createContext();

function Login() {
	const [isAuth, setAuth] = useState();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		if (username === "mtthyd" && password === "mtt@123") {
			setAuth(true);
		} else if (username !== "mtthyd" && password !== "mtt@123") {
			setErrorMsg("Please enter correct details!");
			setAuth(false);
		}
	}

	function handleReset(e) {
		setErrorMsg("");
		setUsername("");
		setPassword("");
	}
	console.log(username);
	console.log(password);

	return (
		<div className="login-container">
			{!isAuth ? (
				<form>
					<div className="mb-3">
						<label
							htmlFor="exampleInputEmail1"
							className="form-label"
						>
							Username
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							placeholder="username"
							value={username}
							onChange={(e) => {
								setErrorMsg("");
								setUsername(e.target.value);
							}}
						/>
					</div>
					<div className="mb-3">
						<label
							htmlFor="exampleInputPassword1"
							className="form-label"
						>
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					{/*BTNS*/}
					<div className="d-flex gap-3 ">
						<button
							type="submit"
							className="btn btn-primary mt-3"
							onClick={(e) => {
								handleSubmit(e);
							}}
						>
							Submit
						</button>
						<button
							type="reset"
							className="btn btn-danger  mt-3"
							onClick={handleReset}
						>
							Reset
						</button>
					</div>
					{/*ERROR*/}
					{isAuth === false && (
						<p className="text-danger mt-5 ">{errorMsg}</p>
					)}
				</form>
			) : (
				<Homepage isAuth={isAuth} />
			)}
		</div>
	);
}

export default Login;
