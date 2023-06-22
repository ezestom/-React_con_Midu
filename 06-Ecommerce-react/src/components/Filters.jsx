import { useId, useState } from "react";
import { useFilters } from "../hooks/useFilters.js";
import "./filters.css";

export function Filters() {
	const { setFilters } = useFilters();

	const [minPrice, setMinPrice] = useState(0);
	const minPriceFilterId = useId();
	const categoryFilterId = useId();

	const handlePriceChange = (event) => {
		setMinPrice(event.target.value);
		setFilters((prevState) => ({
			...prevState,
			minPrice: event.target.value,
		}));
	};
	const handleChangeCategory = (event) => {
		setFilters((prevState) => ({
			...prevState,
			category: event.target.value,
		}));
	};

	return (
		<section className="filters">
			<div>
				<label htmlFor="price">A partir de: </label>
				<input
					type="range"
					id={minPriceFilterId}
					min="0"
					max="1000"
					onChange={handlePriceChange}
				/>
				<span>{minPrice}</span>
			</div>

			<div>
				<label htmlFor="category">Categoría</label>
				<select
					name="category"
					id={categoryFilterId}
					onChange={handleChangeCategory}>
					<option value="all">Todas</option>
					<option value="smartphones">Celulares</option>
					<option value="laptops">Portátiles</option>
				</select>
			</div>
		</section>
	);
}
