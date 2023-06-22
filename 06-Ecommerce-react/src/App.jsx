import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";

function App() {
	const [products] = useState(initialProducts);
	const { filters, filterProducts } = useFilters();

	const filteredProducts = filterProducts(products);

	return (
		<>
			<Header />
			<Products products={filteredProducts} />
		</>
	);
}

export default App;