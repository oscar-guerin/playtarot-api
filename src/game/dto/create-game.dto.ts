import { ArrayMaxSize, ArrayMinSize, IsArray, IsInt, Max, Min, ValidateNested } from 'class-validator';
import { PlayerDto } from './player.dto';
import { Type } from 'class-transformer';

export class CreateGameDto {

	@IsInt()
	@Min(3)
	@Max(5)
	public slots: number;

	@IsArray()
	@ValidateNested({each: true})
	@ArrayMinSize(1)
	@ArrayMaxSize(1)
	@Type(() => PlayerDto)
	public players: PlayerDto[];
}
