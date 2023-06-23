import { createContext, useState } from "react";

// 1. crear contexto

export const CartContext = createContext();


// 2. crear provider
export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		// Check if the product is already in the cart

		const productInCartIndsex = cart.findIndex((item) => {
			return item.id === product.id;
		});
		if (productInCartIndsex >= 0) {
			// forma usando structuredClone
			const newCart = structuredClone(cart);
			newCart[productInCartIndsex].quantity += 1;
			return setCart(newCart);
		}

		// producto no está en el carrito
		setCart((prevState) => [
			...prevState,
			{
				...product,
				quantity: 1,
			},
		]);
	};
	const removeFromCart = (product) => {
		setCart((prevState) =>
			prevState.filter((item) => item.id !== product.id)
		);
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
			}}>
			{children}
		</CartContext.Provider>
	);
}
