import {env} from 'process'

import {Module} from '@nestjs/common'
import {JwtModule} from '@nestjs/jwt'
import {PassportModule} from '@nestjs/passport'

import {AuthController} from './auth.controller'
import {AuthService} from './auth.service'
import {JwtStrategy} from './jwt/jwt.strategy'
import {UsersModule} from '../user/user.module'

@Module({
  imports: [
    UsersModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: env.JWT_SECRET || 'supersecretsecretdonotsharethiswithanyone!!!',
      signOptions: {expiresIn: 1800}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
