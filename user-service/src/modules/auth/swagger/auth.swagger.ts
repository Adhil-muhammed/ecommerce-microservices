import { ApiProperty } from '@nestjs/swagger';

export class RegisterRequest {
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @ApiProperty({ example: '+91-9876543210', required: false })
  phone?: string;

  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({ example: 'SecurePass123!' })
  password: string;
}

export class RegisterResponse {
  @ApiProperty({ example: 'Registration successful. Please verify your email.' })
  message: string;

  @ApiProperty({ example: 'ckv1l2z8g0000v7v8z1q2x1w2' })
  userId: string;
}

export class VerifyRequest {
  @ApiProperty({ example: 'EMAIL_VERIFICATION' })
  type: string;

  @ApiProperty({ example: '123456' })
  code: string;

  @ApiProperty({ example: 'user@example.com' })
  email: string;
}

export class VerifyResponse {
  @ApiProperty({ example: 'Email verified successfully.' })
  message: string;
}
