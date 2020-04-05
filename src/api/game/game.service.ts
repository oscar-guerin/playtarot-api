import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GameRepository } from './game.repository';
import { Game } from './models/game.model';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { DocumentReference } from '../../@core/document-reference';

@Injectable()
export class GameService {

	public constructor(private readonly gameRepository: GameRepository) {
	}

	public async create(createGameDto: CreateGameDto): Promise<DocumentReference> {
		return this.gameRepository.create(new Game({
			slots: createGameDto.slots,
			players: [createGameDto.player]
		}));
	}

	public async update(id: string, updateGameDto: UpdateGameDto): Promise<void> {
		this.gameRepository.read(id).then(
			(game: Game) => {
				if (!game.isFull()) {
					game.players.push(updateGameDto.player);
				} else {
					throw new HttpException('MAXIMUM_NUMBER_OF_PLAYERS_REACHED', HttpStatus.BAD_REQUEST);
				}

				return this.gameRepository.update(id, game);
			}
		);
	}
}
