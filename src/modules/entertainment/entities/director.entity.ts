import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany
} from 'typeorm'
import {Movie} from './movie.entity'
import {Episode} from './episode.entity'

@Entity()
export class Director {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  date_of_birth: Date

  @OneToMany(() => Movie, movie => movie.director)
  movies: Movie[]

  @ManyToMany(() => Episode, episode => episode.directors)
  episodes: Episode[]
}
