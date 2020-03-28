import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameRepository } from './game.repository';
import { GameService } from './game.service';
import { FirestoreModule } from '../@firestore/firestore.module';

@Module({
	controllers: [GameController],
	providers: [
		GameRepository,
		GameService
	],
	imports: [
		FirestoreModule
	]
})
export class GameModule {
}
