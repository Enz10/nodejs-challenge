import {Body, Controller, Get, Post, Query, UseGuards} from '@nestjs/common'
import {AuthGuard} from '@nestjs/passport'

import {CreateDirectorDto} from './dtos/create-director.dto'
import {EntertainmentService} from './entertainment.service'
import {QueryOptions} from './interfaces/query-options.interface'

@Controller('entertainment')
export class EntertainmentController {
  constructor(private readonly entertainmentService: EntertainmentService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('movies')
  async getMovies(@Query() query: QueryOptions) {
    return this.entertainmentService.getMovies(query)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('tvshows')
  async getTvShows(@Query() query: QueryOptions) {
    return this.entertainmentService.getTvShows(query)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('directors')
  createDirector(@Body() createDirectorDto: CreateDirectorDto) {
    return this.entertainmentService.createDirector(createDirectorDto)
  }
}
