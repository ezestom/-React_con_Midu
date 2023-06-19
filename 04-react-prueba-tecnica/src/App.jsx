import { useEffect, useState } from "react";
import "/App.css";
import { Otro } from "../Components/Otro.jsx"

import { useCatImage } from "../hooks/useCatImage.js";
import { useCatFact } from "../hooks/useCatFact.js";


export function App() {
	const { fact, refreshFact } = useCatFact();
	const { imageUrl } = useCatImage({ fact });

	const handleClick = async () => {
		refreshFact();
	};

	return (
		<main>
			<h1>App de gatitos</h1>
			<button onClick={handleClick}>Click to new fact</button>
			<article>
				{fact && <p>{fact}</p>}
				{imageUrl && 
					<img
						src= {imageUrl}
						alt={`imgage extracted using the first three words for ${fact}`}
					/>
				}
			</article>
			
		</main>
	);
}
