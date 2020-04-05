import { ValidateNested } from 'class-validator';
import { PlayerDto } from './player.dto';
import { Type } from 'class-transformer';

export class UpdateGameDto {

	@ValidateNested({each: true})
	@Type(() => PlayerDto)
	public player: PlayerDto;
}
