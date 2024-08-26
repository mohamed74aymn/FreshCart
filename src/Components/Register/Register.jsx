import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setsuccessMsg] = useState("");
	const navigate = useNavigate();

	async function onSubmit() {
		setIsLoading(true);
		setErrorMsg("");
		setsuccessMsg("");

		await axios
			.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
			.then(({ data }) => {
				setIsLoading(false);
				setsuccessMsg(data.message);
				setTimeout(() => {
					navigate("/login");
				}, 500);
			})
			.catch((err) => {
				setIsLoading(false);
				setErrorMsg(err.response.data.message);
			});
	}

	let { handleSubmit, values, handleChange, errors, touched, handleBlur } =
		useFormik({
			initialValues: {
				name: "",
				email: "",
				password: "",
				rePassword: "",
				phone: "",
			},
			onSubmit,
			validate: validateData,
		});

	function validateData(values) {
		let errors = {};

		if (values.name == "") {
			errors.name = "Name is required";
		} else if (values.name.length < 2) {
			errors.name = " Name length must be more than 2 ";
		} else if (values.name.length > 20) {
			errors.name = " Name length must be less than 20 ";
		}

		if (values.email == "") {
			errors.email = "Email is required";
		}
		if (values.password == "") {
			errors.password = "Password is required";
		} else if (
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
				values.password
			) != true
		) {
			errors.password =
				"Minimum eight characters, at least one letter, one number and one special character";
		}

		if (values.rePassword == "") {
			errors.rePassword = "RePassword is required";
		} else if (values.rePassword != values.password) {
			errors.rePassword = "repassword dont match";
		}
		if (values.phone == "") {
			errors.phone = "Phone is required";
		}
		return errors;
	}

	return (
		<>
			<div className="min-h-screen items-center justify-center flex">
				<div className=" w-full  md:w-1/2 lg:w-1/3 mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
					<h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
						Welcome to FrechCart
					</h1>
					<form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
						<div className="flex items-start flex-col justify-start">
							<label
								htmlFor="Name"
								className="text-sm text-gray-700 dark:text-gray-200 mr-2"
							>
								name:
							</label>
							<input
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.name}
								type="text"
								id="Name"
								name="name"
								className="w-full px-3  dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
							/>
							{touched.name && errors.name && (
								<p className="text-red-500">{errors.name}</p>
							)}
						</div>

						<div className="flex items-start flex-col justify-start">
							<label
								htmlFor="email"
								className="text-sm text-gray-700 dark:text-gray-200 mr-2"
							>
								Email:
							</label>
							<input
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								type="email"
								id="email"
								name="email"
								className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
							/>
							{touched.email && errors.email && (
								<p className="text-red-500">{errors.email}</p>
							)}
						</div>

						<div className="flex items-start flex-col justify-start">
							<label
								htmlFor="password"
								className="text-sm text-gray-700 dark:text-gray-200 mr-2"
							>
								Password:
							</label>
							<input
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.password}
								type="password"
								id="password"
								name="password"
								className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
							/>
							{touched.password && errors.password && (
								<p className="text-red-500">{errors.password}</p>
							)}
						</div>

						<div className="flex items-start flex-col justify-start">
							<label
								htmlFor="confirmPassword"
								className="text-sm text-gray-700 dark:text-gray-200 mr-2"
							>
								Confirm Password:
							</label>
							<input
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.rePassword}
								type="password"
								id="confirmPassword"
								name="rePassword"
								className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
							/>
							{touched.rePassword && errors.rePassword && (
								<p className="text-red-500">{errors.rePassword}</p>
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
							disabled={isLoading}
							className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm  disabled:bg-gray-400"
						>
							Register {isLoading && <i className="fas fa-spinner fa-spin"></i>}
						</button>
						{errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
						{successMsg && (
							<p className="text-green-500 text-center">{successMsg}</p>
						)}
					</form>

					<div className="mt-4 text-center">
						<span className="text-sm text-gray-500 dark:text-gray-300">
							Already have an account?{" "}
						</span>
						<Link to={"/login"} className="text-blue-500 hover:text-blue-600">
							Login
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
