import { Body, Controller, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './interfaces/game.interface';

@Controller('game')
export class GameController {

	public constructor(private readonly gameService: GameService) {
	}

	@Post()
	public async create(@Body() game: Game): Promise<void> {
		await this.gameService.save(game);
	}
}
