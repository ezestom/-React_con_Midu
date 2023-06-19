import { useEffect, useState, useRef } from "react";
export const useSearch = () => {
	const [search, updateSearch] = useState("");
	const [error, setError] = useState(null);
	const isFirstInput = useRef(true);

	useEffect(() => {
		if (isFirstInput.current) {
			isFirstInput.current = search === "";
			return 
		}

		if (search === "") {
			setError("No se puede buscar una película vacía");
			return;
		}
		if (search.length < 3) {
			setError(
				"No se puede buscar una película con menos de 3 caracteres"
			);
			return;
		}
		if (search.match(/[^a-zA-Z ]/g)) {
			setError(
				"No se puede buscar una película con caracteres especiales"
			);
			return;
		}
		setError(null);
	}, [search]);

	return { search, updateSearch, error };
};
