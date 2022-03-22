import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constants';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refreshToken'),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.refreshSecret,
      passReqToCallback: true,
    });
  }

  async validate(req, payload: any) {
    const user = await this.usersService.findOne({ email: payload.email });
    if (!user) {
      throw new UnauthorizedException();
    }

    if (req.body.refreshToken != user.refreshToken) {
      throw new UnauthorizedException();
    }

    // if (new Date() > new Date(user.refreshTokenExpires)) {
    //   throw new UnauthorizedException();
    // }

    return { userId: user.id, email: payload.email };
  }
}
