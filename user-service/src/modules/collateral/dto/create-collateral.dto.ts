import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  IsEnum,
} from "class-validator";
import { CollateralType, CollateralStatus } from "@prisma/client";

export class CreateCollateralDto {
  @IsEnum(CollateralType)
  type: CollateralType;

  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @IsNumber()
  purity?: number;

  @IsNumber()
  estimatedValue: number;

  @IsNumber()
  currentValue: number;

  @IsDateString()
  appraisalDate: string;

  @IsOptional()
  @IsString()
  appraisedBy?: string;

  @IsOptional()
  photos?: any;

  @IsOptional()
  certificates?: any;

  @IsOptional()
  @IsString()
  storageLocation?: string;

  @IsOptional()
  @IsEnum(CollateralStatus)
  status?: CollateralStatus;
}
