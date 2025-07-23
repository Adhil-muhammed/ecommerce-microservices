import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { UserStatus } from "../entities/user.entity";

export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  phone?: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiPropertyOptional({
    type: Object,
    description: "Flexible address structure",
  })
  address?: any;

  @ApiPropertyOptional({ type: Object, description: "KYC documents" })
  documents?: any;

  @ApiPropertyOptional()
  creditScore?: number;

  @ApiPropertyOptional({ enum: UserStatus, default: UserStatus.ACTIVE })
  status?: UserStatus;
}
