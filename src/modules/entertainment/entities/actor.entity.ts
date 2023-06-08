import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from 'typeorm'
import {Movie} from './movie.entity'
import {TVShow} from './tvshow.entity'

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  date_of_birth: Date

  @ManyToMany(() => Movie, movie => movie.actors)
  movies: Movie[]

  @ManyToMany(() => TVShow, tvshow => tvshow.actors)
  tvshows: TVShow[]
}
