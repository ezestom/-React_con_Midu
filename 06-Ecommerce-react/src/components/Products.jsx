import "./Products.css";
import { AddToCartIcon } from "./Icons";

export function Products({ products }) {
	return (
		<main className="products">
			<ul>
				{products.slice(0, 10).map((product) => (
					<li key={product.id}>
						<div className="price">{`$${product.price}`}</div>
						<img src={product.thumbnail} alt={product.title} />
						<div>
							<strong className="title">{product.title}</strong>
							<p className="description">{product.description}</p>
							<p className="rating">{`Rating: ${product.rating}%`}</p>
						</div>
						<div>
							<button>
								<AddToCartIcon />
							</button>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}
