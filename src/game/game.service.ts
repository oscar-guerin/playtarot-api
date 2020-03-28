import { Injectable } from '@nestjs/common';
import { GameRepository } from './game.repository';
import { Game } from './interfaces/game.interface';

@Injectable()
export class GameService {

	public constructor(private readonly gameRepository: GameRepository) {
	}

	public async save(game: Game): Promise<void> {
		return this.gameRepository.save(game);
	}
}
