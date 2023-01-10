import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from './../users/users.service';

import { Tokens } from './../types';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  //iniciar sesión
  async login(dto: AuthDto): Promise<Tokens> {
    const user: any = await this.userService.findUserByEmail(dto.email);

    if (!user) throw new ForbiddenException('Access Denied.');

    const passwordMatches = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatches) throw new ForbiddenException('Access Denied.');

    const tokens = await this.getTokens(user);

    const rtHash = await this.hashPassword(tokens.refresh_token);

    await this.userService.updateOne(user._id, { hashdRt: rtHash });

    return tokens;
  }

  //Cerrar sesión
  async logout(userId: string) {
    await this.userService.updateOne(userId, { hashdRt: null });
  }

  //Refrescar sesión
  async refreshTokens(userId: string, rt: string) {
    const user = await this.userService.findById(userId);

    if (!user || !user.hashdRt) throw new ForbiddenException('Access Denied.');

    const rtMatches = await bcrypt.compare(rt, user.hashdRt);

    if (!rtMatches) throw new ForbiddenException('Access Denied.');

    const tokens = await this.getTokens(user);

    const rtHash = await this.hashPassword(tokens.refresh_token);

    await this.userService.updateOne(user._id, { hashdRt: rtHash });
    return tokens;
  }

  //Registro de usuario
  async register(dto: AuthDto): Promise<Tokens> {
    const user: any = await this.userService.create(dto);

    const tokens = await this.getTokens(user);

    const rtHash = await this.hashPassword(tokens.refresh_token);

    await this.userService.updateOne(user._id, { hashdRt: rtHash });
    return tokens;
  }

  async getProfile(id: string) {
    const user = await this.userService.findById(id);

    user.password = null;
    user.hashdRt = null;

    return user;
  }

  //Generar tokens de acceso y de refrescar.
  async getTokens(user: any) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: user._id,
          email: user.email,
        },
        {
          secret: 'at-secret',
          expiresIn: '24h',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: user._id,
          email: user.email,
        },
        {
          secret: 'rt-secret',
          expiresIn: '30d',
        },
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  //Encriptación de la copntraseña
  async hashPassword(data: string) {
    return bcrypt.hash(data, 10);
  }
}
