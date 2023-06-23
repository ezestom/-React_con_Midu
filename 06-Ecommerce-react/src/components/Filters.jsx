import { useId } from "react";
import { useFilters } from '.././hooks/useFilters.js'
import "./Filters.css";

export function Filters() {
	const { filters, setFilters } = useFilters();

	const minPriceFilterId = useId();
	const categoryFilterId = useId();

	const handleChangeMinPrice = (event) => {
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
					onChange={handleChangeMinPrice}
					value={filters.minPrice}
				/>
				<span>${filters.minPrice}</span>
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
					<option value="fragrances">Perfumes</option>
					<option value="home-decoration">
						Decoraciones para tu hogar
					</option>
					<option value="skincare">Cremas</option>
					<option value="groceries">Golosinas</option>
				</select>
			</div>
		</section>
	);
}
