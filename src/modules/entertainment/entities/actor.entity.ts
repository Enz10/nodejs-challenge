import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm'

import {Episode} from './episode.entity'
import {Movie} from './movie.entity'
import {TVShow} from './tvshow.entity'

@Entity('actor')
export class Actor {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({type: 'date'})
  birthdate: Date

  @Column()
  nationality: string

  @Column()
  awards: number

  @ManyToMany(() => Movie, movie => movie.actors)
  @JoinTable({name: 'movie_actor'})
  movies: Movie[]

  @ManyToMany(() => TVShow, tvshow => tvshow.actors)
  @JoinTable({name: 'tvshow_actor'})
  tvShows: TVShow[]

  @ManyToMany(() => Episode, episode => episode.actors)
  @JoinTable({name: 'episode_actor'})
  episodes: Episode[]
}
