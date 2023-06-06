import { WINNER_COMBOS } from "./../constants.js";
export const checkWinnerFrom = (boardToCkeck) => {
	// revisamos todas las combinaciones ganadoras
	// para ver si X u O ganó

	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo;
		if (
			boardToCkeck[a] &&
			boardToCkeck[a] === boardToCkeck[b] &&
			boardToCkeck[a] === boardToCkeck[c]
		) {
			return boardToCkeck[a];
		}
	}
	//si no hay ganador, retornamos null
	return null;
};

export const checkEndGame = (newBoard) => {
	// revisamos si hay empate
	// si no hay más espacios vacíos
	// en el tablero
	return newBoard.every((square) => square !== null);
};
