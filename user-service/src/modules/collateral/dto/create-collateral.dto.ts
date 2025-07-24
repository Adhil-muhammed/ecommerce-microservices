import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  IsEnum,
} from "class-validator";
import { CollateralType, CollateralStatus } from "@prisma/client";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateCollateralDto {
  @ApiProperty({ enum: CollateralType, description: "Type of the collateral" })
  @IsEnum(CollateralType)
  type: CollateralType;

  @ApiProperty({ description: "Description of the collateral" })
  @IsString()
  description: string;

  @ApiPropertyOptional({
    type: Number,
    description: "Weight of the collateral (if applicable)",
  })
  @IsOptional()
  @IsNumber()
  weight?: number;

  @ApiPropertyOptional({
    type: Number,
    description: "Purity of the collateral (if applicable)",
  })
  @IsOptional()
  @IsNumber()
  purity?: number;

  @ApiProperty({
    type: Number,
    description: "Estimated value of the collateral",
  })
  @IsNumber()
  estimatedValue: number;

  @ApiProperty({ type: Number, description: "Current value of the collateral" })
  @IsNumber()
  currentValue: number;

  @ApiProperty({
    type: String,
    format: "date-time",
    description: "Appraisal date",
  })
  @IsDateString()
  appraisalDate: string;

  @ApiPropertyOptional({ type: String, description: "Name of the appraiser" })
  @IsOptional()
  @IsString()
  appraisedBy?: string;

  @ApiPropertyOptional({ description: "Photos of the collateral" })
  @IsOptional()
  photos?: any;

  @ApiPropertyOptional({ description: "Certificates of authenticity" })
  @IsOptional()
  certificates?: any;

  @ApiPropertyOptional({
    type: String,
    description: "Storage location of the collateral",
  })
  @IsOptional()
  @IsString()
  storageLocation?: string;

  @ApiPropertyOptional({
    enum: CollateralStatus,
    description: "Status of the collateral",
  })
  @IsOptional()
  @IsEnum(CollateralStatus)
  status?: CollateralStatus;
}
