import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from 'typeorm'
import {TVShow} from './tvshow.entity'
import {Episode} from './episode.entity'

@Entity()
export class Season {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  season_number: number

  @Column()
  premiere_date: Date

  @Column()
  number_of_episodes: number

  @ManyToOne(() => TVShow, tvshow => tvshow.seasons)
  tvshow: TVShow

  @OneToMany(() => Episode, episode => episode.season)
  episodes: Episode[]
}
