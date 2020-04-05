import { Player } from './player.interface';

export class Game {
	public slots: number;
	public players: Player[];

	public constructor(data: Partial<Game> = {}) {
		Object.assign(this, data);
	}

	public isFull(): boolean {
		return this.players.length === this.slots;
	}
}
