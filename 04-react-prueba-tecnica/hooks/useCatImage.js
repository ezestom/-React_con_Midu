import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export const useCatImage = ({ fact }) => {
	const [imageUrl, setImageUrl] = useState();
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
	return { imageUrl : `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
};
