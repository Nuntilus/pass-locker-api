import { IsString } from "class-validator";

export class CreateUserPayload {
  @IsString()
  name: string;
  @IsString()
  password: string;
}
