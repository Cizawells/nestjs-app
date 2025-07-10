import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JWTGuard } from 'src/auth/guard';
import { AuthenticatedRequest } from 'src/types';

@Controller('users')
export class UserController {
  @UseGuards(JWTGuard)
  @Get('me')
  getMe(@Req() req: AuthenticatedRequest) {
    return req.user;
  }
}
