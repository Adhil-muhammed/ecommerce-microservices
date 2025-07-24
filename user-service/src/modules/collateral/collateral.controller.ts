import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CollateralService } from "./collateral.service";
import { CreateCollateralDto } from "./dto/create-collateral.dto";
import { UpdateCollateralDto } from "./dto/update-collateral.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("collateral")
@Controller("collateral")
export class CollateralController {
  constructor(private readonly collateralService: CollateralService) {}

  @Post()
  create(@Body() createCollateralDto: CreateCollateralDto) {
    return this.collateralService.create(createCollateralDto);
  }

  @Get()
  findAll() {
    return this.collateralService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.collateralService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCollateralDto: UpdateCollateralDto
  ) {
    return this.collateralService.update(id, updateCollateralDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.collateralService.remove(id);
  }
}
