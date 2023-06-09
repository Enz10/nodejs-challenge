import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn
} from 'typeorm'

import {Episode} from './episode.entity'
import {TVShow} from './tvshow.entity'

@Entity('season')
export class Season {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  season_number: number

  @Column({type: 'date'})
  start_date: Date

  @Column({type: 'date'})
  end_date: Date

  @ManyToOne(() => TVShow, tvShow => tvShow.seasons)
  @JoinColumn({name: 'tv_show_id'})
  tvShow: TVShow

  @OneToMany(() => Episode, episode => episode.season)
  episodes: Episode[]
}
