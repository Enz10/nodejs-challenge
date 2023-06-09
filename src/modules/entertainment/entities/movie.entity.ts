import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable
} from 'typeorm'

import {Actor} from './actor.entity'
import {Director} from './director.entity'

@Entity('movie')
export class Movie {
  @PrimaryGeneratedColumn({})
  id: number

  @Column()
  name: string

  @Column({nullable: true})
  genre: string

  @Column({type: 'date', nullable: true})
  release_date: Date

  @Column({type: 'decimal', precision: 2, scale: 1, nullable: true})
  rating: number

  @ManyToOne(() => Director, director => director.movies, {eager: true})
  @JoinColumn({name: 'director_id'})
  director: Director

  @ManyToMany(() => Actor, actor => actor.movies, {eager: true})
  @JoinTable({
    name: 'movie_actor',
    joinColumn: {
      name: 'movie_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'actor_id',
      referencedColumnName: 'id'
    }
  })
  actors: Actor[]
}
