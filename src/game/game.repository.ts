import { Injectable } from '@nestjs/common';
import { FirestoreRepository } from '../@firestore/firestore.repository';
import { Game } from './interfaces/game.interface';
import { FirestoreService } from '../@firestore/firestore.service';

@Injectable()
export class GameRepository extends FirestoreRepository<Game> {
	protected collectionPath: string = 'games';

	public constructor(protected readonly firestoreService: FirestoreService) {
		super(firestoreService);
	}
}
