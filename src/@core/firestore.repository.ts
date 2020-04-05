import { firestore } from 'firebase-admin';

export abstract class FirestoreRepository {

	protected abstract readonly path: string;
	protected client: FirebaseFirestore.Firestore = new firestore.Firestore();
}
