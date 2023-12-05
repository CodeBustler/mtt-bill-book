import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
	return (
		<div className="app-container">
			<Link to="">
				<h1 className="heading">MTT Bill Book</h1>
			</Link>
			<Outlet />
		</div>
	);
}

export default Layout;
