import React, { useContext, useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function ShippingAddress() {
	const { cartId } = useParams();

	const [successMsg, setsuccessMsg] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	async function onSubmit() {
		setIsLoading(true);

		await axios
			.post(
				"https://ecommerce.routemisr.com/api/v1/orders/checkout-session/" +
					cartId,
				{
					shippingAddress: values,
				},
				{
					headers: {
						token: localStorage.getItem("token"),
					},
					params: {
						url: "http://localhost:5173",
					},
				}
			)
			.then(({ data }) => {
				setIsLoading(false);
				console.log(data.session.url);
				location.href = data.session.url;
			})
			.catch((err) => {
				setIsLoading(false);
			});
	}

	let { handleSubmit, values, handleChange, errors, touched, handleBlur } =
		useFormik({
			initialValues: {
				city: "",
				phone: "",
				details: "",
			},
			onSubmit,
			validate: validateData,
		});

	function validateData(values) {
		let errors = {};

		if (values.city == "") {
			errors.city = "city is required";
		}
		if (values.phone == "") {
			errors.phone = "phone is required";
		}
		if (values.details == "") {
			errors.details = "details is required";
		}

		return errors;
	}

	return (
		<>
			<div className="min-h-screen -mt-15 -mb-15 items-center justify-center flex">
				<div className=" w-full  md:w-1/2 lg:w-1/3 mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
					<h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
						Add your Shipping Address
					</h1>
					<form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
						<div className="flex items-start flex-col justify-start">
							<label
								htmlFor="city"
								className="text-sm text-gray-700 dark:text-gray-200 mr-2"
							>
								City:
							</label>
							<input
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.city}
								type="text"
								id="city"
								name="city"
								className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
							/>
							{touched.city && errors.city && (
								<p className="text-red-500">{errors.city}</p>
							)}
						</div>
						<div className="flex items-start flex-col justify-start">
							<label
								htmlFor="details"
								className="text-sm text-gray-700 dark:text-gray-200 mr-2"
							>
								details:
							</label>
							<input
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.details}
								type="text"
								id="details"
								name="details"
								className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
							/>
							{touched.details && errors.details && (
								<p className="text-red-500">{errors.details}</p>
							)}
						</div>
						<div className="flex items-start flex-col justify-start">
							<label
								htmlFor="phone"
								className="text-sm text-gray-700 dark:text-gray-200 mr-2"
							>
								phone:
							</label>
							<input
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.phone}
								type="tel"
								id="phone"
								name="phone"
								className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
							/>
							{touched.phone && errors.phone && (
								<p className="text-red-500">{errors.phone}</p>
							)}
						</div>

						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
						>
							check out{" "}
							{isLoading && <i className="fas fa-spinner fa-spin"></i>}
						</button>
						{successMsg && (
							<p className="text-green-500 text-center">{successMsg}</p>
						)}
					</form>
				</div>
			</div>
		</>
	);
}

{
	/*

	import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Function to toggle mobile menu visibility
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	function signOut() {
		setUserToken("");
		localStorage.removeItem("token");
		navigate("/login");
	}

	let { userToken, setUserToken } = useContext(AuthContext);
	const navigate = useNavigate();
	// console.log(userToken);
	return (
		<>
			<nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow w-full fixed top-0 z-50">
				<div className="container flex flex-wrap justify-between items-center mx-auto">
					<a href="/" className="flex items-center">
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							Website
						</span>
					</a>

					<div className="flex items-center md:hidden mr-0">
						<button
							onClick={toggleMenu}
							type="button"
							className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</button>
					</div>

					{!userToken && (
						<div className=" hidden w-full md:flex md:w-auto">
							<ul className=" flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
								<li>
									<NavLink
										to="/"
										className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
										aria-current="page"
									>
										register
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/login"
										className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									>
										register
									</NavLink>
								</li>
							</ul>
						</div>
					)}
					{userToken && (
						<div className="flex gap-60">
							<div className="hidden w-full md:flex md:w-auto">
								<ul className="mr-96 flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
									<li>
										<NavLink
											to="/"
											className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
											aria-current="page"
										>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/products"
											className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
										>
											products
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/"
											className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
										>
											Services
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/"
											className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
										>
											Pricing
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/cart"
											className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
										>
											cart
										</NavLink>
									</li>
								</ul>

								<div>
									<ul className="mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
										<li>
											<button
												onClick={signOut}
												className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
												aria-current="page"
											>
												Sign out
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</div>

				{isMenuOpen && (
					<div className="md:hidden mr-0">
						{!userToken && (
							<ul className="flex flex-col items-center space-y-2 mt-4">
								<li>
									<NavLink
										to="/"
										className="block py-2 px-4 text-white bg-blue-700 rounded-md"
										aria-current="page"
									>
										register
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/login"
										className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										login
									</NavLink>
								</li>
							</ul>
						)}

						{userToken && (
							<ul className="flex flex-col items-center space-y-2 mt-4">
								<li>
									<NavLink
										to="/"
										className="block py-2 px-4 text-white bg-blue-700 rounded-md"
										aria-current="page"
									>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/login"
										className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										About
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/"
										className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										Services
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/"
										className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										Pricing
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/"
										className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										Contact
									</NavLink>
								</li>
							</ul>
						)}
					</div>
				)}
			</nav>
		</>
	);
}
	*/
}
