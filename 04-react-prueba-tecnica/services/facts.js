const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
	const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
	const data = await res.json();
	console.log(data);
	const { fact } = data;
	return fact;
};
