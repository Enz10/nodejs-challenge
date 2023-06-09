import {IsDate, IsNotEmpty, IsString} from 'class-validator'

export class CreateDirectorDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsDate()
  birthdate: Date

  @IsNotEmpty()
  @IsString()
  nationality: string
}
