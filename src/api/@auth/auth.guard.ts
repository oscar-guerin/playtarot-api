import { CanActivate, ExecutionContext } from '@nestjs/common';
import { auth } from 'firebase-admin';

export class AuthGuard implements CanActivate {
	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const request: any = context.switchToHttp().getRequest();
		const authorizationHeader: string = request.headers.authorization;

		if (!authorizationHeader) {
			return false;
		}

		return auth().verifyIdToken(authorizationHeader.replace('Bearer ', '')).then(
			() => true,
			() => false
		);
	}
}
