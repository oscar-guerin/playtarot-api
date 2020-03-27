import { Controller, Get } from '@nestjs/common';

@Controller('game')
export class GameController {

	@Get()
	public findAll(): string {
		return 'This action returns all cats';
	}
}
