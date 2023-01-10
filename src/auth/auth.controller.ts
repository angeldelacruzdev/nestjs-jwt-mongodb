import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from './auth.service';

import { Tokens } from './../types';
import { RtGuard } from './../common/guards';
import {
  GetCurrentUserId,
  GetCurrentUser,
  Public,
} from './../common/decorators';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response) {
    const token = await this.authService.login(dto);
    res.cookie('access_cookies', token.access_token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      path: '/',
      sameSite: 'none',
      secure: true,
    });
    res.send({
      success: true,
    });
  }

  @Public()
  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() dto: AuthDto): Promise<Tokens> {
    return await this.authService.register(dto);
  }

  @Post('/logout')
  @HttpCode(HttpStatus.OK)
  async logout(@GetCurrentUserId() userId: string) {
    return await this.authService.logout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  async refreshTokens(
    @GetCurrentUser('refreshToken') refreshToken: string,
    @GetCurrentUserId() userId: string,
  ) {
    return await this.authService.refreshTokens(userId, refreshToken);
  }

  @Get('profile')
  async profile(@GetCurrentUserId() userId: string) {
    return await this.authService.getProfile(userId);
  }
}
