import { Body, Controller, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('game')
export class GameController {

	public constructor(private readonly gameService: GameService) {
	}

	@Post()
	public async create(@Body() game: CreateGameDto): Promise<void> {
		await this.gameService.create(game);
	}
}
