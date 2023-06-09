import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'

import {Episode} from './episode.entity'
import {Movie} from './movie.entity'
import {TVShow} from './tvshow.entity'

@Entity('director')
export class Director {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({type: 'date'})
  birthdate: Date

  @Column()
  nationality: string

  @OneToMany(() => Movie, movie => movie.director)
  movies: Movie[]

  @OneToMany(() => Episode, episode => episode.director)
  episodes: Episode[]

  @OneToMany(() => TVShow, tvShow => tvShow.director)
  tvShows: TVShow[]
}
