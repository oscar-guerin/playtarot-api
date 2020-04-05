import { Injectable } from '@nestjs/common';
import { FirestoreRepository } from '../../@core/firestore.repository';
import { Game } from './models/game.model';
import { DocumentReference } from '../../@core/document-reference';

@Injectable()
export class GameRepository extends FirestoreRepository {
	protected path: string = 'games';

	public async create(data: Game): Promise<DocumentReference> {
		return await this.client.collection(this.path).add(JSON.parse(JSON.stringify(data))).then(
			(ref: FirebaseFirestore.DocumentReference) => new DocumentReference(ref.id, this.path)
		);
	}

	public async read(id: string): Promise<Game> {
		return await this.client.collection(this.path).doc(id).get().then(
			(ref: FirebaseFirestore.DocumentSnapshot) => new Game(ref.data())
		);
	}

	public async update(id: string, data: Game): Promise<void> {
		await this.client.collection(this.path).doc(id).set(data, {merge: true});
	}
}
