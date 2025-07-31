import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { AuthEntity } from './entities/auth.entity';
import { AuthExamples } from './swagger/response-examples';
import { RegisterRequest, RegisterResponse } from './swagger/auth.swagger';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import {ApiErrorResponse, ApiSuccessResponse  } from '../../common/dto/index';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: RegisterRequest })
  @ApiResponse({ status: 201, type: RegisterResponse, schema: { example: AuthExamples.RegisterSuccess } })
  @ApiResponse({ status: 400, description: 'Email or phone already exists', schema: { example: AuthExamples.RegisterConflict } })
  async register(@Body() registerDto: RegisterDto): Promise<ApiSuccessResponse<AuthEntity>> {
    const result = await this.authService.register(registerDto);
    return {
    status: true,
    message: 'Registration successful',
    data: result,
  };
  }
}
