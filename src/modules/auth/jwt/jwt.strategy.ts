import {Injectable, UnauthorizedException} from '@nestjs/common'
import {PassportStrategy} from '@nestjs/passport'
import {InjectRepository} from '@nestjs/typeorm'
import {Strategy, ExtractJwt} from 'passport-jwt'
import {Repository} from 'typeorm'

import {User} from '~/modules/user/entities/user.entity'

import {JwtPayload} from '../interfaces/jwt-payload.interface'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'supersecretsecretdonotsharethiswithanyone!!!'
    })
  }

  async validate(payload: JwtPayload): Promise<User> {
    const {username} = payload
    const user = await this.userRepository.findOne({where: {username}})

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}
