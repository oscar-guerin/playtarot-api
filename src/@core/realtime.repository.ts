import { database } from 'firebase-admin';

export abstract class RealtimeRepository<E> {

	protected abstract readonly path: string;
	private client: database.Database = database();

	public async push(data: E): Promise<void> {
		await this.client.ref(this.path).push(data);
	}
}
