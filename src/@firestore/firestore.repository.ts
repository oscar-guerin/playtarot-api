import { FirestoreService } from './firestore.service';

export abstract class FirestoreRepository<T> {

	protected abstract collectionPath: string;

	protected constructor(protected readonly firestoreService: FirestoreService) {
	}

	public async save(data: T): Promise<void> {
		await this.firestoreService.save<T>(this.collectionPath, data);
	}
}
