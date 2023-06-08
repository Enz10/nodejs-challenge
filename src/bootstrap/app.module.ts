import {env} from 'process'

import {Module} from '@nestjs/common'
import {EnvModule} from '~/lib/env'
import {TypeOrmModule} from '@nestjs/typeorm'
import {TypeOrmConfig} from './config/typeorm-config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      async useFactory() {
        const {username, password, host, database, port} =
          await TypeOrmConfig.parseAsync(env)

        console.log('DB config:', {
          username,
          password,
          host,
          database,
          port
        })

        return {
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
          entities: ['**/*.entity.js'],
          synchronize: true,
          logger: 'debug',
          logging: 'all'
        }
      }
    }),
    EnvModule.forRoot()
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
