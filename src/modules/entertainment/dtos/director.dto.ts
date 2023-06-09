import {ApiProperty} from '@nestjs/swagger'

export class DirectorDto {
  @ApiProperty({
    description: 'Filters by Director id.',
    example: '1'
  })
  id: string

  @ApiProperty({
    description: 'Name of director.',
    example: 'Quentin Tarantino'
  })
  name: string

  @ApiProperty({
    description: 'Birthdate.',
    example: '1982-10-06'
  })
  birthdate: Date

  @ApiProperty({
    description: 'Nationality.',
    example: 'American'
  })
  nationality: string
}
