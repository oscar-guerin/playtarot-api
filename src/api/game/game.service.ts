import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GameRepository } from './game.repository';
import { Game } from './models/game.model';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { DocumentReference } from '../../@core/document-reference';
import { GameStatus } from './models/game-status.enum';
import { Player } from './models/player.interface';

@Injectable()
export class GameService {

	public constructor(private readonly gameRepository: GameRepository) {
	}

	public async create(createGameDto: CreateGameDto): Promise<DocumentReference> {
		return this.gameRepository.create(new Game({
			status: GameStatus.WAITING_FOR_PLAYERS,
			slots: createGameDto.slots,
			players: [createGameDto.player]
		}));
	}

	public async update(id: string, updateGameDto: UpdateGameDto): Promise<void> {
		return this.gameRepository.read(id).then(
			(game: Game) => {
				this.beforeAddPlayer(game, updateGameDto.player);
				game.players.push(updateGameDto.player);

				return this.gameRepository.update(id, game);
			}
		);
	}

	private beforeAddPlayer(game: Game, player: Player): void {
		if (game.isFull()) {
			throw new HttpException('MAXIMUM_NUMBER_OF_PLAYERS_REACHED', HttpStatus.BAD_REQUEST);
		}
		if (game.hasJoined(player)) {
			throw new HttpException('PLAYER_HAS_ALREADY_JOINED', HttpStatus.BAD_REQUEST);
		}
	}
}
