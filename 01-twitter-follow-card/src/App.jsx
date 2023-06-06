import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
	{
		userName: "ezestom",
		name: "Ezequiel Stom",
		isFollowing: false,
	},
	{
		userName: "midudev",
		name: "Miguel Ángel Durán",
		isFollowing: true,
	},
	{
		userName: "juandc",
		name: "Juan Delgado",
		isFollowing: false,
	},
	{
		userName: "d4nidev",
		name: "Daniel de la Cruz",
		isFollowing: true,
	},
];

export function App() {
	return (
		<section className="app">
			{users.map(({ userName, name, isFollowing }) => (
				<TwitterFollowCard
					key={userName}
					userName={userName}
					initialIsFollowing={isFollowing}>
					{name}
				</TwitterFollowCard>
			))}
		</section>
	);
}
