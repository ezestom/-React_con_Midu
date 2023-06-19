import { useState, useRef } from "react";
import { searchMovies } from "./../services/movies";

export function useMovies({ search }) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const previusSearch = useRef(search);

	const getMovies = async () => {
		if (search === previusSearch.current) return;
		try {
			setLoading(true);
			setError(null);
			previusSearch.current = search;
			const newMovies = await searchMovies({ search });
			setMovies(newMovies);
		} catch (e) {
			setError(e.error);
		} finally {
			setLoading(false);
		}
	};
	return { movies, getMovies, loading, error };
}
