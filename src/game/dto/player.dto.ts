import { IsString, IsUrl, MaxLength, MinLength } from 'class-validator';

export class PlayerDto {

	@IsString()
	@MinLength(1)
	public userUid: string;

	@IsUrl()
	public userAvatarUrl: string;

	@IsString()
	@MinLength(2)
	@MaxLength(50)
	public userDisplayName: string;
}
