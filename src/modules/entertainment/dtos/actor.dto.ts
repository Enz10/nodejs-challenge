import {ApiProperty} from '@nestjs/swagger'

export class ActorDto {
  @ApiProperty({
    description: 'Filters by Director id.',
    example: '1'
  })
  id: string

  @ApiProperty({
    description: 'Name of actor.',
    example: 'Bradd Pitt'
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

  @ApiProperty({
    description: 'Number of awards.',
    example: '2'
  })
  awards: number
}
