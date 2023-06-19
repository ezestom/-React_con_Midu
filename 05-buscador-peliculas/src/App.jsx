import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/movies";
import { useEffect, useState } from "react";
import { useSearch } from "./hooks/useSearch";

function App() {
	const { search, updateSearch, error } = useSearch();
	const { movies, loading, getMovies } = useMovies({ search });

	const handleSubmit = (event) => {
		event.preventDefault();
		getMovies();
	};

	const handleChange = (event) => {
		updateSearch(event.target.value);
	};

	return (
		<div className="page">
			<header>
				<h1>Bucador de Películas</h1>
				<form className="form" onSubmit={handleSubmit}>
					<input
						style={{
							border: error ? "1px solid red" : "transparent",
						}}
						onChange={handleChange}
						name="query"
						placeholder="Avengers, Star Wars, The Matrix .."
					/>
					<button type="submit">Search</button>
				</form>
				{error && (
					<p
						style={{
							color: "red",
						}}>
						{" "}
						{error}
					</p>
				)}
			</header>

			<main>
				{loading ? <p>Loading...</p> : <Movies movies={movies} />}
			</main>
		</div>
	);
}

export default App;
