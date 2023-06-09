import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'

import {EntertainmentController} from './entertainment.controller'
import {EntertainmentService} from './entertainment.service'
import {Director} from './entities/director.entity'
import {Movie} from './entities/movie.entity'
import {TVShow} from './entities/tvshow.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Movie, TVShow, Director])],
  controllers: [EntertainmentController],
  providers: [EntertainmentService]
})
export class EntertainmentModule {}
