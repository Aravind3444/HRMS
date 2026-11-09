import {
  Controller,
  Post,
  Get,
  Body,
  Res,
  Req,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCookieAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { Public } from '../../../common/decorators/public.decorator';
import { Response, Request } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login with email + password — sets HttpOnly cookies (CF-10)' })
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(dto, res);
  }

  @Public()
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiCookieAuth()
  @ApiOperation({ summary: 'Clear session cookies' })
  async logout(@Res({ passthrough: true }) res: Response, @Req() req: Request) {
    const userId = req.cookies?.['hrms_access_token'];
    return this.authService.logout(userId, res);
  }

  @Get('me')
  @ApiCookieAuth()
  @ApiOperation({ summary: 'Get current authenticated user + permissions' })
  async me(@Req() req: Request) {
    const userId = req.cookies?.['hrms_access_token'];
    if (!userId) throw new UnauthorizedException('Not authenticated');
    return this.authService.getAuthUser(userId);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh access token using refresh cookie' })
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies?.['hrms_refresh_token'];
    if (!refreshToken) throw new UnauthorizedException('No refresh token');
    return this.authService.refresh(refreshToken, res);
  }

  @Public()
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Request password reset email' })
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto.email);
  }

  @Public()
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset password with token from email' })
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto.token, dto.newPassword);
  }

  @Public()
  @Get('verify-email')
  @ApiOperation({ summary: 'Verify email with single-use token (TEN-002)' })
  async verifyEmail(@Req() req: Request) {
    const token = req.query['token'] as string;
    return this.authService.verifyEmail(token);
  }
}
