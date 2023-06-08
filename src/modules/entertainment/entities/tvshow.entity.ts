import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm'
import {Season} from './season.entity'
import {Actor} from './actor.entity'

@Entity()
export class TVShow {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  genre: string

  @Column()
  premiere_date: Date

  @Column()
  number_of_seasons: number

  @OneToMany(() => Season, season => season.tvshow)
  seasons: Season[]

  @ManyToMany(() => Actor, actor => actor.tvshows)
  @JoinTable()
  actors: Actor[]
}
