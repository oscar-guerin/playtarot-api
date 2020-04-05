import { IsInt, Max, Min, ValidateNested } from 'class-validator';
import { PlayerDto } from './player.dto';
import { Type } from 'class-transformer';

export class CreateGameDto {

	@IsInt()
	@Min(3)
	@Max(5)
	public slots: number;

	@ValidateNested({each: true})
	@Type(() => PlayerDto)
	public player: PlayerDto;
}
