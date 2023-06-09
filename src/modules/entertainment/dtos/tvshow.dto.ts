import {ApiProperty} from '@nestjs/swagger'
import {Type} from 'class-transformer'

import {DirectorDto} from './index'

export class TVShowDto {
  @ApiProperty({
    description: 'TVShow ID.',
    example: '1'
  })
  id: string

  @ApiProperty({
    description: 'Name of TVShow.',
    example: 'Jaws'
  })
  name: string

  @ApiProperty({
    description: 'Date of start.',
    example: 'Crime'
  })
  start_date: string

  @ApiProperty({
    description: 'Date of end.',
    example: '2006-10-06'
  })
  end_date: Date

  @ApiProperty({
    description: 'Seasons.'
  })
  seasons: number

  @ApiProperty({
    description: 'Number of rating.',
    example: '3.5'
  })
  rating: number

  @ApiProperty({
    description: 'Directors.',
    example: '1'
  })
  @Type(() => DirectorDto)
  director: DirectorDto
}
