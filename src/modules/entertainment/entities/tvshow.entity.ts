import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn
} from 'typeorm'

import {Actor} from './actor.entity'
import {Director} from './director.entity'
import {Season} from './season.entity'

@Entity('tvshow')
export class TVShow {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  genre: string

  @Column({type: 'date'})
  start_date: Date

  @Column({type: 'date'})
  end_date: Date

  @Column({type: 'decimal', precision: 2, scale: 1})
  rating: number

  @OneToMany(() => Season, season => season.tvShow, {eager: true})
  seasons: Season[]

  @ManyToMany(() => Actor, actor => actor.tvShows)
  @JoinTable({name: 'tvshow_actor'})
  actors: Actor[]

  @ManyToOne(() => Director, director => director.tvShows)
  @JoinColumn({name: 'director_id'})
  director: Director
}
