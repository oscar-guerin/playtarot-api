import * as admin from 'firebase-admin';
import * as serviceAccount from '../service-account.json';
import * as functions from 'firebase-functions';
import { TriggerAnnotated } from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import express from 'express';
import e, { Express } from 'express';
import { INestApplication, ValidationPipe } from '@nestjs/common';

const params: any = {
	type: serviceAccount.type,
	projectId: serviceAccount.project_id,
	privateKeyId: serviceAccount.private_key_id,
	privateKey: serviceAccount.private_key,
	clientEmail: serviceAccount.client_email,
	clientId: serviceAccount.client_id,
	authUri: serviceAccount.auth_uri,
	tokenUri: serviceAccount.token_uri,
	authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
	clientC509CertUrl: serviceAccount.client_x509_cert_url
};

admin.initializeApp({
	credential: admin.credential.cert(params),
});

const server: Express = express();

const createNestServer: (expressInstance: Express) => Promise<INestApplication> = async (expressInstance: Express) => {
	const app: INestApplication = await NestFactory.create(
		AppModule,
		new ExpressAdapter(expressInstance),
		{cors: true}
	);
	app.useGlobalPipes(new ValidationPipe());

	return app.init();
};

createNestServer(server)
	.then((app: INestApplication) => console.log('[Cloud Functions] Nest Ready'))
	.catch((err: string) => console.error('[Cloud Functions][ERROR] Nest broken', err));

export const api: TriggerAnnotated & ((req: e.Request, resp: e.Response) => void) = functions.https.onRequest(server);
