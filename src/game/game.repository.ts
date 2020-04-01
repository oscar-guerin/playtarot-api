import { Injectable } from '@nestjs/common';
import { Game } from './interfaces/game.interface';
import { RealtimeRepository } from '../@core/realtime.repository';

@Injectable()
export class GameRepository extends RealtimeRepository<Game> {
	protected path: string = 'games';
}
