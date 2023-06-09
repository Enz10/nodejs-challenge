import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {plainToInstance} from 'class-transformer'
import {Repository} from 'typeorm'

import {CreateDirectorDto} from './dtos/create-director.dto'
import {MovieDto} from './dtos/movie.dto'
import {TVShowDto} from './dtos/tvshow.dto'
import {Director} from './entities/director.entity'
import {Movie} from './entities/movie.entity'
import {TVShow} from './entities/tvshow.entity'

@Injectable()
export class EntertainmentService {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesRepository: Repository<Movie>,
    @InjectRepository(TVShow)
    private readonly tvShowsRepository: Repository<TVShow>,
    @InjectRepository(Director)
    private readonly directorRepository: Repository<Director>
  ) {}

  async getMovies(options: any) {
    const movies = await this.moviesRepository.find({
      ...options,
      relations: ['director', 'actors']
    })

    return plainToInstance(MovieDto, movies)
  }

  async getTvShows(options: any) {
    const tvshows = await this.tvShowsRepository.find({
      ...options,
      relations: ['director']
    })

    return plainToInstance(TVShowDto, tvshows)
  }

  async createDirector(createDirectorDto: CreateDirectorDto) {
    const newDirector = this.directorRepository.create(createDirectorDto)
    return this.directorRepository.save(newDirector)
  }
}
