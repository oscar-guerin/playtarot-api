import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { DocumentReference } from '../../@core/document-reference';

@Controller('game')
export class GameController {

	public constructor(private readonly gameService: GameService) {
	}

	@Post()
	public async create(@Body() createGameDto: CreateGameDto): Promise<DocumentReference> {
		return this.gameService.create(createGameDto);
	}

	@Put(':id')
	public async update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto): Promise<void> {
		return this.gameService.update(id, updateGameDto);
	}
}
