import { IsEmail, IsString } from "class-validator";

export class CreateUserPayload {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
