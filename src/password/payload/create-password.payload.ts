import { IsString } from "class-validator";

export class CreatePasswordPaylaod{
  @IsString()
  password : string;

  @IsString()
  userUuid: string;
}
