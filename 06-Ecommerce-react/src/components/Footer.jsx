import { useFilters } from "../hooks/useFilters";
import { useCart } from ".././hooks/useCart.js";
import "./Footer.css";

export function Footer() {
	const { filters } = useFilters();
	const { cart } = useCart();
	return (
		<footer className="footer">
			{/* {JSON.stringify(filters, null, 2)}
			{JSON.stringify(cart, null, 2)} */}
			<>
				<div>
					<h3>Compañía Imaginaria</h3>
				</div>
				<div>
					<h3>Contacto</h3>
					<p>
						<i class="fa fa-map-marker"></i> 123 Calle Ficticia,
						Ciudad Imaginaria
					</p>
					<p>
						<i class="fa fa-phone"></i> +1 234 567 890
					</p>
					<p>
						<i class="fa fa-envelope"></i> info@imaginaria.com
					</p>
				</div>

				<p>
					&copy; 2023 Compañía Imaginaria. Todos los derechos
					reservados.
				</p>
			</>
		</footer>
	);
}
