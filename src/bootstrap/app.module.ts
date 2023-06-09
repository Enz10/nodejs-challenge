import {env} from 'process'

import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'

import {AuthModule} from '~/modules/auth/auth.module'
import {EntertainmentModule} from '~/modules/entertainment/entertainment.module'
import {UsersModule} from '~/modules/user/user.module'

import {TypeOrmConfig} from './config/typeorm-config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      async useFactory() {
        const {username, password, host, database, port} =
          await TypeOrmConfig.parseAsync(env)

        return {
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
          entities: ['**/*.entity.js'],
          logger: 'debug',
          logging: 'all'
        }
      }
    }),
    EntertainmentModule,
    AuthModule,
    UsersModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
