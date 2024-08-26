import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function Categories() {
	const [categoryList, updateCategoryList] = useState([]);
	const [isLoading, toggleLoading] = useState(false);

	async function fetchCategories() {
		try {
			toggleLoading(true);
			const response = await axios.get(
				"https://ecommerce.routemisr.com/api/v1/categories"
			);
			updateCategoryList(response.data.data);
		} catch (err) {
			console.error(err);
		} finally {
			toggleLoading(false);
		}
	}
	const [subCategoryList, updateSubCategoryList] = useState(null);
	const [selectedCategory, updateSelectedCategory] = useState(null);
	const [isSubLoading, toggleSubLoading] = useState(false);

	async function fetchSubCategories(catId) {
		try {
			toggleSubLoading(true);
			const response = await axios.get(
				`https://ecommerce.routemisr.com/api/v1/categories/${catId}/subcategories`
			);
			updateSubCategoryList(response.data.data);
		} catch (err) {
			console.error(err);
		} finally {
			toggleSubLoading(false);
		}
	}

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<>
			<h2 className="text-center font-bold mb-10 text-2xl">All Categories</h2>
			{isLoading ? (
				<LoadingScreen />
			) : categoryList ? (
				<div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
					{categoryList.map((item) => (
						<div
							key={item._id}
							onClick={() => {
								fetchSubCategories(item._id);
								updateSelectedCategory(item.name);
							}}
							className="w-full border bg-white dark:bg-gray-800 border-gray-200 rounded-md shadow-sm dark:border-gray-700 cursor-pointer hover:scale-[1.01] hover:shadow-md transition-transform duration-300"
						>
							<img
								loading="lazy"
								className="h-[300px] object-contain w-full rounded-t-md"
								src={item.image}
								alt="category"
							/>
							<div className="p-3">
								<h5 className="font-medium tracking-tight text-lg text-center dark:text-white text-blue-600">
									{item.name}
								</h5>
							</div>
						</div>
					))}
				</div>
			) : null}

			{subCategoryList ? (
				<h2 className="text-center text-2xl text-blue-600 my-6 py-4 border-t">
					{selectedCategory}
				</h2>
			) : null}

			{isSubLoading ? (
				<LoadingScreen />
			) : subCategoryList ? (
				<div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{subCategoryList.map((subItem) => (
						<p
							key={subItem._id}
							className="flex justify-center items-center shadow-sm p-3 text-lg rounded-md hover:scale-[1.01] hover:shadow-md transition-transform duration-300"
						>
							{subItem.name}
						</p>
					))}
				</div>
			) : null}
		</>
	);
}
