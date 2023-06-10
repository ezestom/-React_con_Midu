import { useEffect, useState } from "react";
import "/App.css";
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
	const [fact, setFact] = useState();
	const [imageUrl, setImageUrl] = useState();
	// para recuperar la cita al cargar la página
	useEffect(() => {
		fetch(CAT_ENDPOINT_RANDOM_FACT)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				const { fact } = data;
				setFact(fact);
			});
	},[]);

	// para recuperar la imagen cada vez que tenemos una nueva cita
	useEffect(() => {
		if (!fact) return;
		const threeFirstWords = fact.split(" ", 3).join(" ");
		console.log(threeFirstWords);

		fetch(
			`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
		)
			.then((res) => res.json())
			.then((response) => {
				console.log(response);
				const { url } = response;
				setImageUrl(url);
			});
	}, [fact]);

	return (
		<main>
			<h1>App de gatitos</h1>
			<article>
				{fact && <p>{fact}</p>}
				{imageUrl && (
					<img
						src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
						alt={`imgage extracted using the first three words for ${fact}`}
					/>
				)}
			</article>
		</main>
	);
}
