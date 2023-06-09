import {ApiProperty} from '@nestjs/swagger'
import {Type} from 'class-transformer'

import {ActorDto, DirectorDto} from './index'

export class MovieDto {
  @ApiProperty({
    description: 'Movie ID.',
    example: '1'
  })
  id: string

  @ApiProperty({
    description: 'Name of movie.',
    example: 'Jaws'
  })
  name: string

  @ApiProperty({
    description: 'Name of genre.',
    example: 'Crime'
  })
  genre: string

  @ApiProperty({
    description: 'Date of release.',
    example: '2006-10-06'
  })
  release_date: Date

  @ApiProperty({
    description: 'Number of rating.',
    example: '3.5'
  })
  rating: number

  @ApiProperty({
    description: 'Directors.'
  })
  @Type(() => DirectorDto)
  director: DirectorDto

  @ApiProperty({
    description: 'Actors.'
  })
  @Type(() => ActorDto)
  actors: ActorDto[]
}
