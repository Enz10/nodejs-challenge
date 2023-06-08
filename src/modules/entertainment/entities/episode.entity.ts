import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable
} from 'typeorm'
import {Season} from './season.entity'
import {Director} from './director.entity'

@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  episode_number: number

  @Column()
  title: string

  @Column()
  duration_in_minutes: number

  @ManyToOne(() => Season, season => season.episodes)
  season: Season

  @ManyToMany(() => Director, director => director.episodes)
  @JoinTable()
  directors: Director[]
}
