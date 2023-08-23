import { Link } from "../components/Link";

const i18n = {
	es: {
		title: "Sobre nosotros",
		button: "Ir a la home",
		description:
			"¡Hola! Me llamo Ezequiel y estoy creando un clon de React Router.",
	},
	en: {
		title: "About us",
		button: "Go to home page",
		description:
			"Hi! My name is Ezequiel and I am creating a clone of React Router.",
	},
};

const useI18n = (lang) => {
	return i18n[lang] || i18n.en;
};

export default function AboutPage({ routeParams }) {
	const i18n = useI18n(routeParams.lang ?? "es");

	return (
		<>
			<h1>{i18n.title}</h1>
			<div>
				<img
					style={{ width: "200px" }}
					src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png"
					alt="Foto de eze"
				/>
				<p>{i18n.description}</p>
			</div>
			<Link to="/">{i18n.button}</Link>
		</>
	);
}
