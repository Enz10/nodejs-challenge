import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  UnauthorizedException
} from '@nestjs/common'
import {Request} from 'express'

import {AuthService} from './auth.service'
import {JwtAuthGuard} from './jwt/jwt-auth.guard'
import {User} from '../user/entities/user.entity'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string
  ) {
    return this.authService.signIn(username, password)
  }

  @UseGuards(JwtAuthGuard)
  @Post('/refresh')
  async refresh(@Req() req: Request) {
    const user = req.user

    if (!user) {
      throw new UnauthorizedException()
    }

    return this.authService.refreshToken(user as User)
  }
}
