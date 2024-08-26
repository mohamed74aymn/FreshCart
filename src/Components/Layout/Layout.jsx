import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
	return (
		<>
			<Navbar />
			<div className="pt-24 pb-24 mx-auto container">
				<Outlet /> {/* This renders child components */}
			</div>
			<Footer />
		</>
	);
}
