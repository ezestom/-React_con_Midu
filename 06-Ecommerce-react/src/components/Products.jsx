import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export function Products({ products }) {
	const { addToCart, removeFromCart, cart } = useCart();

	const checkProductInCart = (product) => {
		return cart.some((item) => item.id === product.id);
	};

	return (
		<main className="products">
			<ul>
				{products.map((product) => {
					const isProductInCart = checkProductInCart(product);
					return (
						<li key={product.id}>
							<div className="price">{`$${product.price}`}</div>
							<img src={product.thumbnail} alt={product.title} />
							<div>
								<strong className="title">
									{product.title}
								</strong>
								<p className="description">
									{product.description}
								</p>
							</div>

							<div className="btn-container">
								<button
									style={{
										backgroundColor: isProductInCart
											? "red"
											: "green",
									}}
									onClick={() => {
										isProductInCart
											? removeFromCart(product)
											: addToCart(product);
									}}>
									{isProductInCart ? (
										<AddToCartIcon />
									) : (
										<RemoveFromCartIcon />
									)}
								</button>
								<p className="rating">{`Rating: ${product.rating}%`}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
