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


		if (search.match(/[!@#$%^&*(),.?":{}|<>]/g)) {
			setError(
				"Not found"			);
			return;
		}
		setError(null);
	}, [search]);

	return { search, updateSearch, error };
};
