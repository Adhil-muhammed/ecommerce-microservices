import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from "@nestjs/common";
import { CollateralService } from "./collateral.service";
import { CreateCollateralDto } from "./dto/create-collateral.dto";
import { UpdateCollateralDto } from "./dto/update-collateral.dto";
import { 
  ApiTags, 
  ApiBody, 
  ApiResponse, 
  ApiOperation,
  ApiParam 
} from "@nestjs/swagger";
import { CollateralResponse, CollateralListResponse } from "./dto/collateral-response.dto";
import { Collateral } from "./entities/collateral.entity";
import { CollateralExamples } from './swagger/response-examples';

@ApiTags("collateral")
@Controller("collateral")
export class CollateralController {
  constructor(private readonly collateralService: CollateralService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new collateral' })
  @ApiBody({ type: CreateCollateralDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Collateral has been successfully created',
    type: CollateralResponse,
    schema: { example: CollateralExamples.CreateSuccess }
  })
  async create(@Body() createCollateralDto: CreateCollateralDto): Promise<CollateralResponse> {
    const data = await this.collateralService.create(createCollateralDto);
    return {
      success: true,
      message: 'Collateral created successfully',
      data
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all collaterals' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of all collaterals',
    type: CollateralListResponse,
    schema: { example: CollateralExamples.ListSuccess }
  })
  async findAll(): Promise<CollateralListResponse> {
    const data = await this.collateralService.findAll();
    return {
      success: true,
      message: 'Collaterals retrieved successfully',
      data
    };
  }

  @Get(":id")
  @ApiOperation({ summary: 'Get a collateral by id' })
  @ApiParam({ name: 'id', description: 'Collateral ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Collateral found',
    type: CollateralResponse,
    schema: { example: CollateralExamples.SingleSuccess }
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Collateral not found',
    schema: { example: CollateralExamples.NotFound }
  })
  async findOne(@Param("id") id: string): Promise<CollateralResponse> {
    const data = await this.collateralService.findOne(id);
    return {
      success: true,
      message: 'Collateral retrieved successfully',
      data
    };
  }

  @Patch(":id")
  @ApiOperation({ summary: 'Update a collateral' })
  @ApiParam({ name: 'id', description: 'Collateral ID' })
  @ApiBody({ type: UpdateCollateralDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Collateral has been successfully updated',
    type: CollateralResponse,
    schema: { example: CollateralExamples.UpdateSuccess }
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Collateral not found',
    schema: { example: CollateralExamples.NotFound }
  })
  async update(
    @Param("id") id: string,
    @Body() updateCollateralDto: UpdateCollateralDto
  ): Promise<CollateralResponse> {
    const data = await this.collateralService.update(id, updateCollateralDto);
    return {
      success: true,
      message: 'Collateral updated successfully',
      data
    };
  }

  @Delete(":id")
  @ApiOperation({ summary: 'Delete a collateral' })
  @ApiParam({ name: 'id', description: 'Collateral ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Collateral has been successfully deleted',
    type: CollateralResponse,
    schema: { example: CollateralExamples.DeleteSuccess }
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Collateral not found',
    schema: { example: CollateralExamples.NotFound }
  })
  async remove(@Param("id") id: string): Promise<CollateralResponse> {
    const data = await this.collateralService.remove(id);
    return {
      success: true,
      message: 'Collateral deleted successfully',
      data
    };
  }
}
