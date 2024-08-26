import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Helmet } from "react-helmet";

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

	return (
		<>
			<Helmet>
				<script
					type="module"
					src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
				></script>
				<script
					nomodule
					src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
				></script>
			</Helmet>
			<header>
				<nav className=" z-40 fixed w-full bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
					<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
						<a href="#" className="flex gap-2 items-center">
							<div className="mt-1 text-blue-600 sm:text-xl md:text-4xl">
								{" "}
								<ion-icon name="cart-outline"></ion-icon>
							</div>
							<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
								FreshCart
							</span>
						</a>
						<div className="flex items-center lg:order-2">
							{userToken && (
								<>
									<Link
										to={"/cart"}
										className="text-blue-600 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
									>
										<i class="fa-solid fa-cart-shopping  sm:text-xl md:text-2xl"></i>
									</Link>
									<button
										onClick={signOut}
										className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
									>
										Log out
									</button>
								</>
							)}
							{!userToken && (
								<>
									<NavLink
										to="/register"
										className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
									>
										register
									</NavLink>
									<NavLink
										to="/login"
										className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
									>
										Log in
									</NavLink>
								</>
							)}

							<button
								onClick={toggleMenu} // Call the toggleMenu function
								className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
								aria-expanded={isMenuOpen} // Set aria-expanded based on state
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
										clipRule="evenodd"
									></path>
								</svg>
								<svg
									className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									></path>
								</svg>
							</button>
						</div>
						<div
							className={`${
								isMenuOpen ? "block" : "hidden"
							} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
							id="mobile-menu-2"
						>
							{userToken && (
								<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
									<li>
										<NavLink
											to="/"
											className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white"
											aria-current="page"
										>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/products"
											className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
										>
											products
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/brands"
											className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
										>
											Brands
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/Categories"
											className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
										>
											Categories
										</NavLink>
									</li>

									<li>
										<NavLink
											to="wishlist"
											className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
										>
											wishlist
										</NavLink>
									</li>
									{/* Other menu items */}
								</ul>
							)}
						</div>
					</div>
				</nav>
			</header>
			<Helmet>
				<script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
			</Helmet>
		</>
	);
}

{
	/* <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow w-full fixed top-0 z-50">
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
			</nav> */
}
