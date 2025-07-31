import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { AuthEntity, VerifyEntity } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(data: RegisterDto): Promise<AuthEntity> {
   
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: data.email },
          { phone: data.phone },
        ],
      },
    });

    if (existingUser) {
      return {
        message: 'Email or phone already exists',
        statusCode: 400,
        error: 'Bad Request'
      };
    }
    // Hash password
    const passwordHash = await bcrypt.hash(data.password, 12);
    // Create user
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        phone: data.phone,
        firstName: data.firstName,
        lastName: data.lastName,
        status: 'ACTIVE',
        kycStatus: 'NOT_STARTED',
        passwordHash
      },
    });
    // Generate OTP (mocked here)
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    await this.prisma.oTPCode.create({
      data: {
        userId: user.id,
        code: otpCode,
        type: 'EMAIL_VERIFICATION',
        expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 min expiry
      },
    });
    // TODO: Send OTP via email/SMS
    return { message: 'Registration successful. Please verify your email.', userId: user.id };
  }
}
