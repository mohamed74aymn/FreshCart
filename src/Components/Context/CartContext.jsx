import axios from "axios";
import { createContext } from "react";
import { toast, Bounce } from "react-toastify";

export let CartContext = createContext();

export default function CartContextProvider({ children }) {
	let headers = {
		token: localStorage.getItem("token"),
	};

	async function addProductToCart(productId, userToken) {
		let { data } = await axios.post(
			"https://ecommerce.routemisr.com/api/v1/cart",
			{
				productId: productId,
			},
			{
				headers: {
					token: localStorage.getItem("token"),
				},
			}
		);

		toast.success(data.message, {
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
	}

	return (
		<CartContext.Provider
			value={{
				addProductToCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
