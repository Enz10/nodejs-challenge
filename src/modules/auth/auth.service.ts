import {Injectable, UnauthorizedException} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'

import {User} from '../user/entities/user.entity'
import {UsersService} from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne(username)
    if (user && password === user.password) {
      const {password, ...result} = user
      return result
    }
    return null
  }

  async signIn(
    username: string,
    password: string
  ): Promise<{access_token: string}> {
    const user = await this.validateUser(username, password)

    if (!user) {
      throw new UnauthorizedException()
    }

    const payload = {username: user.username, sub: user.id}
    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  async login(user: any) {
    const payload = {username: user.username, sub: user.id}
    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  async refreshToken(user: User): Promise<{access_token: string}> {
    const payload = {username: user.username, sub: user.id}
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
