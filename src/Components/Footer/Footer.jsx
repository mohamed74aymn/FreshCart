import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

export default function Footer() {
	let { userToken, setUserToken } = useContext(AuthContext);
	return (
		<>
			{userToken && (
				<footer className="bg-white dark:bg-gray-900">
					<div className="container px-6 py-12 mx-auto">
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
							<div className="sm:col-span-2">
								<h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
									Subscribe our newsletter to get updates.
								</h1>
								<div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
									<input
										id="email"
										type="text"
										className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
										placeholder="Email Address"
									/>
									<button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
										Subscribe
									</button>
								</div>
							</div>
							<div>
								<p className="font-semibold text-gray-800 dark:text-white">
									Quick Link
								</p>
								<div className="flex flex-col items-start mt-5 space-y-2">
									<Link
										to={"/"}
										className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
									>
										Home
									</Link>
									<Link
										to={"/categories"}
										className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
									>
										categories
									</Link>
									<Link
										to={"/brands"}
										className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
									>
										Brand
									</Link>
								</div>
							</div>
							<div>
								<p className="font-semibold text-gray-800 dark:text-white">
									Industries
								</p>
								<div className="flex flex-col items-start mt-5 space-y-2">
									<a
										href="#"
										className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
									>
										Retail & E-Commerce
									</a>
									<a
										href="#"
										className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
									>
										Information Technology
									</a>
									<a
										href="#"
										className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
									>
										Finance & Insurance
									</a>
								</div>
							</div>
						</div>

						<hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

						<div className="flex items-center justify-between">
							<a href="#">
								<div className="text-blue-600 gap-3 flex justify-center items-center">
									<i class="fa-solid fa-cart-shopping  sm:text-xl md:text-2xl"></i>
									<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
										FreshCart
									</span>
								</div>
							</a>
							<div className="flex -mx-2">
								<a
									href="#"
									className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
									aria-label="Reddit"
								>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.014 16.5203 12.18 16.524ZM9.75 13.828C9.33718 13.828 9 14.1652 9 14.578C9 14.9908 9.33718 15.328 9.75 15.328C10.1628 15.328 10.5 14.9908 10.5 14.578C10.5 14.1652 10.1628 13.828 9.75 13.828ZM14.248 13.828C13.8352 13.828 13.498 14.1652 13.498 14.578C13.498 14.9908 13.8352 15.328 14.248 15.328C14.6608 15.328 14.998 14.9908 14.998 14.578C14.998 14.1652 14.6608 13.828 14.248 13.828Z"
											fill="currentColor"
										/>
									</svg>
								</a>
								<a
									href="#"
									className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
									aria-label="Facebook"
								>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.9998 2.00024C6.47829 2.00024 2.00024 6.47829 2.00024 11.9998C2.00024 17.0796 5.65644 21.1924 10.5345 21.8787V14.8967H7.89824V12.0002H10.5345V9.79791C10.5345 7.18478 11.9297 5.87638 14.2393 5.87638C15.341 5.87488 16.4409 5.94159 17.5342 6.07638V8.75391H16.0758C14.8348 8.75391 14.5698 9.369 14.5698 10.2639V11.9977H17.4336L16.9945 14.8932H14.5698V21.8797C19.4467 21.1938 23.0002 17.0807 23.0002 11.9998C23.0002 6.47829 18.5217 2.00024 11.9998 2.00024Z"
											fill="currentColor"
										/>
									</svg>
								</a>
								<a
									href="#"
									className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
									aria-label="Github"
								>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12.026 2C6.50756 2 2 6.479 2 11.9918C2 16.4203 4.865 20.1613 8.837 21.5C9.337 21.583 9.512 21.29 9.512 21.041C9.512 20.819 9.505 20.248 9.501 19.465C6.729 20.102 6.146 18.178 6.146 18.178C5.682 16.96 5.053 16.633 5.053 16.633C4.178 16.042 5.123 16.056 5.123 16.056C6.094 16.129 6.609 17.055 6.609 17.055C7.473 18.519 8.858 18.073 9.374 17.831C9.452 17.193 9.706 16.789 9.986 16.559C7.803 16.326 5.516 15.437 5.516 11.591C5.516 10.498 5.891 9.62701 6.515 8.93701C6.416 8.70501 6.086 7.785 6.615 6.48601C6.615 6.48601 7.428 6.237 9.492 7.64901C10.261 7.42701 11.093 7.31601 11.921 7.31201C12.749 7.31601 13.581 7.42701 14.351 7.64901C16.414 6.237 17.226 6.48601 17.226 6.48601C17.755 7.785 17.425 8.70501 17.326 8.93701C17.951 9.62701 18.323 10.498 18.323 11.591C18.323 15.451 16.031 16.322 13.841 16.549C14.206 16.854 14.532 17.461 14.532 18.385C14.532 19.665 14.521 20.748 14.521 21.041C14.521 21.291 14.694 21.586 15.201 21.496C19.175 20.16 22.0002 16.4183 22.0002 11.9918C22.0002 6.479 17.4917 2 12.026 2Z"
											fill="currentColor"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<p class=" text-center text-gray-500 text-sm">
						&copy; 2024 Freshcart. All rights reserved. by{" "}
						<a
							href="https://example.com"
							class="text-blue-500 hover:text-blue-700"
						>
							Mohamded Ayman
						</a>
					</p>
				</footer>
			)}
		</>
	);
}
