import { firestore } from 'firebase-admin';

export abstract class FirestoreRepository<T> {

	protected abstract readonly path: string;
	private client: FirebaseFirestore.Firestore = new firestore.Firestore();

	public async save(data: T): Promise<void> {
		await this.client.collection(this.path).add(data);
	}
}
