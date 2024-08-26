import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../Rating/Rating";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Slider from "react-slick";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
import { addProductToCart } from "../../cartServices";
export default function ProductDetails() {
	let { id } = useParams();

	var settings = {
		dots: true,
		infinite: true,
		speed: 200,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	useEffect(() => {
		getProductsDetails();
	}, [id]);

	const [productDetails, setProductDetails] = useState(null);
	const [relatedProduct, setrelatedProduct] = useState([null]);
	const [isLoading, setIsLoading] = useState(true);

	async function getRelatedProduct(categoryID) {
		let { data } = await axios.get(
			"https://ecommerce.routemisr.com/api/v1/products/",
			{
				params: {
					category: categoryID,
				},
			}
		);
		setrelatedProduct(data.data);
	}

	async function getProductsDetails() {
		setIsLoading(true);
		let { data } = await axios.get(
			"https://ecommerce.routemisr.com/api/v1/products/" + id
		);
		setProductDetails(data.data);
		getRelatedProduct(data.data?.category._id);
		setIsLoading(false);
	}

	return (
		<>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<div className="bg-white">
					<main className="my-8">
						<div className="container mx-auto px-6">
							<div className="md:flex md:items-center">
								<div className="w-full  md:w-3/12 lg:h-96">
									{/* <img
										className="h-full mx-auto rounded-md object-contain "
										src={productDetails?.imageCover}
										alt=""
									/> */}
									<Slider {...settings}>
										{productDetails?.images.map((img) => {
											return (
												<img
													className="w-full mx-auto rounded-md object-contain "
													src={img}
													alt=""
												/>
											);
										})}
									</Slider>
								</div>
								<div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-9/12">
									<h3 className="text-gray-700 uppercase text-lg">
										{productDetails?.title}
									</h3>
									<span className="text-gray-500 mt-3">
										${productDetails?.price}
									</span>
									<hr className="my-3" />
									{/* <div className="mt-2">
								<label className="text-gray-700 text-sm" for="count">
									Count:
								</label>
								<div className="flex items-center mt-1">
									<button className="text-gray-500 focus:outline-none focus:text-gray-600">
										<svg
											className="h-5 w-5"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
										</svg>
									</button>
									<span className="text-gray-700 text-lg mx-2">20</span>
									<button className="text-gray-500 focus:outline-none focus:text-gray-600">
										<svg
											className="h-5 w-5"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
										</svg>
									</button>
								</div>
							</div> */}
									{/* <div className="mt-3">
								<label className="text-gray-700 text-sm" for="count">
									Color:
								</label>
								<div className="flex items-center mt-1">
									<button className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
									<button className="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
									<button className="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
								</div>
							</div> */}
									<div className="mt-3">
										<label className="text-gray-700 text-sm" for="count">
											Rating:
										</label>
										<Rating rating={productDetails?.ratingsAverage ?? 0} />
									</div>
									<div className="mt-3">
										<label className="text-gray-700 text-sm" for="count">
											Description:
										</label>
										<h3>{productDetails?.description}</h3>
									</div>
									<div className="mt-3">
										<label className="text-gray-700 text-sm" for="count">
											Brand:
										</label>
										<h3>{productDetails?.brand.name}</h3>
									</div>
									<div className="mt-3">
										<label className="text-gray-700 text-sm" for="count">
											Category:
										</label>
										<h3>{productDetails?.category.name}</h3>
									</div>
									<div className="mt-3">
										<label className="text-gray-700 text-sm" for="count">
											SubCategory:
										</label>
										<h3>{productDetails?.subcategory[0].name}</h3>
									</div>
									<div className="flex items-center mt-6">
										<Link
											to={"/cart"}
											onClick={() => {
												addProductToCart(productDetails._id);
											}}
											className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
										>
											Order Now
										</Link>
										<button
											onClick={() => {
												addProductToCart(productDetails._id);
											}}
											className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none"
										>
											<svg
												className="h-5 w-5"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
							<RelatedProduct products={relatedProduct} />
						</div>
					</main>
				</div>
			)}
		</>
	);
}
