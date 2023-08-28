import "./App.css";
import { useMovies } from "./hooks/useMovies";
import {Movies} from "./components/Movies";

import { useCallback, useEffect, useState } from "react";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";

function App() {
	const [sort, setSort] = useState(false);
	const { search, updateSearch, error } = useSearch();
	const { movies, loading, getMovies } = useMovies({ search, sort });

	const handleSubmit = (event) => {
		event.preventDefault();
		getMovies({ search });
	};
	const debounceGetMovies = useCallback(
		debounce((search) => getMovies({ search }), 500),
		[getMovies]
	);

	const handleChange = (event) => {
		const newSearch = event.target.value;
		updateSearch(newSearch);
		getMovies({ search: newSearch });
	};

	const handleSort = () => {
		setSort(!sort);
	};

	return (
		<div className="page">
			<header>
				<h1>Movie Search</h1>

				<form className="form" onSubmit={handleSubmit}>
					<legend>Search your movie: </legend>
					<input
						style={{
							border: error ? "1px solid red" : "transparent",
						}}
						onChange={handleChange}
						name="query"
						placeholder="Avengers, Star Wars, ..."
					/>
					<input
						type="checkbox"
						onChange={handleSort}
						checked={sort}
					/>
					<button type="submit">Search</button>
					{error && (
						<p
							style={{
								color: "red",
							}}>
							{" "}
							{error}
						</p>
					)}
				</form>
			</header>

			<main>
				{loading ? <p>Loading...</p> : <Movies movies={movies} />}
			</main>
		</div>
	);
}

export default App;
