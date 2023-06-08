import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
  ManyToMany
} from 'typeorm'
import {Director} from './director.entity'
import {Actor} from './actor.entity'

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  genre: string

  @Column()
  release_date: Date

  @Column()
  duration_in_minutes: number

  @ManyToOne(() => Director, director => director.movies)
  director: Director

  @ManyToMany(() => Actor, actor => actor.movies)
  @JoinTable()
  actors: Actor[]
}
