export class Game {
	public players?: string[];
	public closed?: boolean;

	public constructor(data: Partial<Game>) {
		Object.assign(this, data);
	}
}

export const gameConverter: any = {
	toFirestore: (game: Game) => ({
		players: game.players,
		closed: game.closed
	}),
	fromFirestore: (snapshot: any, options: any) => new Game(snapshot.data(options))
};
