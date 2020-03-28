import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';

@Injectable()
export class FirestoreService {

	private client: FirebaseFirestore.Firestore = new firestore.Firestore();

	public async save<T>(collectionPath: string, data: T): Promise<FirebaseFirestore.DocumentReference> {
		return await this.client.collection(collectionPath).add(data);
	}
}
