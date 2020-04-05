export class DocumentReference {
	public id: string;
	public path: string;

	public constructor(id: string, path: string = null) {
		this.id = id;
		this.path = path;
	}
}
