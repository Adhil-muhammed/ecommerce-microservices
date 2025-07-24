import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { CreateCollateralDto } from "./dto/create-collateral.dto";
import { UpdateCollateralDto } from "./dto/update-collateral.dto";
import { Collateral } from "./entities/collateral.entity";

@Injectable()
export class CollateralService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCollateralDto: CreateCollateralDto): Promise<Collateral> {
    return this.prisma.collateral.create({ data: createCollateralDto });
  }

  async findAll(): Promise<Collateral[]> {
    return this.prisma.collateral.findMany();
  }

  async findOne(id: string): Promise<Collateral | null> {
    return this.prisma.collateral.findUnique({ where: { id } });
  }

  async update(id: string, updateCollateralDto: UpdateCollateralDto): Promise<Collateral> {
    return this.prisma.collateral.update({
      where: { id },
      data: updateCollateralDto,
    });
  }

  async remove(id: string): Promise<Collateral> {
    return this.prisma.collateral.delete({ where: { id } });
  }
}
