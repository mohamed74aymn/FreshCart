import React, { useContext } from "react";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../cartServices";
import { WishlistContext } from "../Context/wishlistContext";

export default function Product({ product }) {
	const { addToWishlist, wishlistCheck, removeFromWishlist } =
		useContext(WishlistContext);

	const isLiked = wishlistCheck.includes(product.id);

	const toggleLike = () => {
		if (isLiked) {
			removeFromWishlist(product.id);
		} else {
			addToWishlist(product.id);
		}
	};

	return (
		<div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
			<Link to={`/productDetails/${product._id}`}>
				<img
					className="w-full h-64 object-cover rounded-t-lg"
					src={product.imageCover}
					alt="product image"
				/>
			</Link>
			<div className="flex flex-col justify-between flex-grow px-5 pb-5 relative">
				<div>
					<Link to={`/productDetails/${product._id}`}>
						<h3 className="text-gray-900 font-semibold text-lg sm:text-xl tracking-tight line-clamp-1 dark:text-white">
							{product.title}
						</h3>
						<p className="line-clamp-2 text-sm sm:text-base">
							{product.description}
						</p>
					</Link>
					<div className="mt-3 -mb-3 flex items-center justify-between">
						<Rating rating={product.ratingsAverage} />
						<button className="text-gray-400">
							{" "}
							<i
								onClick={toggleLike}
								className={`  fa-solid fa-heart ${
									isLiked ? "text-red-500" : "hover:text-red-500"
								}  -mt-2  duration-300 text-2xl`}
							></i>
						</button>
					</div>
				</div>
				<div className="flex items-center justify-between mt-4">
					<span className="text-3xl sm:text-2xl font-bold text-gray-900 dark:text-white">
						${product.price}
					</span>
					<button
						onClick={() => addProductToCart(product._id)}
						className="h-18 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 sm:px-5 sm:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
