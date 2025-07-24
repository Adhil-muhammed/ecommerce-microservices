import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { CreateCollateralDto } from "./dto/create-collateral.dto";
import { UpdateCollateralDto } from "./dto/update-collateral.dto";

@Injectable()
export class CollateralService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCollateralDto: CreateCollateralDto) {
    return this.prisma.collateral.create({ data: createCollateralDto });
  }

  findAll() {
    return this.prisma.collateral.findMany();
  }

  findOne(id: string) {
    return this.prisma.collateral.findUnique({ where: { id } });
  }

  update(id: string, updateCollateralDto: UpdateCollateralDto) {
    return this.prisma.collateral.update({
      where: { id },
      data: updateCollateralDto,
    });
  }

  remove(id: string) {
    return this.prisma.collateral.delete({ where: { id } });
  }
}
