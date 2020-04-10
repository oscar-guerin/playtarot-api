import { Player } from './player.interface';
import { GameStatus } from './game-status.enum';

export class Game {
	public status: GameStatus;
	public slots: number;
	public players: Player[];

	public constructor(data: Partial<Game> = {}) {
		Object.assign(this, data);
	}

	public isFull(): boolean {
		return this.players.length === this.slots;
	}

	public hasJoined(player: Player): boolean {
		return this.players.map((gamePlayer: Player) => gamePlayer.userUid).includes(player.userUid);
	}
}
