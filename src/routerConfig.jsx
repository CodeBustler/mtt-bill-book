import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
// PAGES
import Login from "./components/Login";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Edit_Reciept from "./components/Edit_Reciept";
import Delete_Reciept from "./components/Delete_Reciept";
import New_Reciept from "./components/New_Reciept";

export const routes = createRoutesFromElements(
	<Route>
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Login />} />
			<Route path="new-bill" element={<New_Reciept />} />
			<Route path="edit-bill" element={<Edit_Reciept />} />
			<Route path="delete-bill" element={<Delete_Reciept />} />
		</Route>
		<Route path="*" element={<h1>404 Page Not found</h1>} />
	</Route>,
);
