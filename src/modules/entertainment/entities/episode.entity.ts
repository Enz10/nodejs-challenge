import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinTable
} from 'typeorm'

import {Actor} from './actor.entity'
import {Director} from './director.entity'
import {Season} from './season.entity'

@Entity('episode')
export class Episode {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  episode_number: number

  @Column()
  name: string

  @Column({type: 'date'})
  air_date: Date

  @Column({type: 'decimal', precision: 2, scale: 1})
  rating: number

  @ManyToOne(() => Season, season => season.episodes)
  season: Season

  @ManyToOne(() => Director, director => director.episodes)
  director: Director

  @ManyToMany(() => Actor, actor => actor.episodes)
  @JoinTable({name: 'episode_actor'})
  actors: Actor[]
}
