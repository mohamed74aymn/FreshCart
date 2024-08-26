import axios from "axios";
import { createContext, useState } from "react";
import { toast, Bounce } from "react-toastify";

export let WishlistContext = createContext();

export default function WishlistContextProvider({ children }) {
	const [loading, setLoading] = useState(false);
	const [wishlistCount, setWishlistCount] = useState(0);
	const [wishlist, setWishlist] = useState([]);
	const [wishlistCheck, setWishlistCheck] = useState([]);
	const headers = {
		token: localStorage.getItem("token"),
	};

	async function getWishlist() {
		try {
			setLoading(true);
			let { data } = await axios.get(
				"https://ecommerce.routemisr.com/api/v1/wishlist",
				{
					headers,
				}
			);

			setWishlistCount(data.count);
			setWishlist(data.data);
			setWishlistCheck(data.data.map((item) => item.id));
		} catch (error) {
			setWishlistCount(0);
			setWishlist([]);
			setWishlistCheck([]);
		} finally {
			setLoading(false);
		}
	}
	async function addToWishlist(productId) {
		try {
			setLoading(true);
			await axios.post(
				"https://ecommerce.routemisr.com/api/v1/wishlist",
				{ productId },
				{ headers }
			);

			await getWishlist();

			toast.success("Product added to wishlist");
		} catch (error) {
			toast.error("Failed to add to wishlist");
		} finally {
			setLoading(false);
		}
	}

	async function removeFromWishlist(productId) {
		setLoading(true);
		try {
			await axios.delete(
				`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
				{
					headers: {
						token: localStorage.getItem("token"),
					},
				}
			);

			await getWishlist();

			toast.success("Product has been removed", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				transition: Bounce,
			});
		} catch (error) {
			toast.error("Failed to remove product from wishlist");
		} finally {
			setLoading(false);
		}
	}

	return (
		<WishlistContext.Provider
			value={{
				loading,
				getWishlist,
				wishlist,
				wishlistCount,
				addToWishlist,
				wishlistCheck,
				removeFromWishlist,
			}}
		>
			{children}
		</WishlistContext.Provider>
	);
}
