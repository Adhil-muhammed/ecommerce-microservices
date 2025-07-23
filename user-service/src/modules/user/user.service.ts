import {
  Injectable,
  NotFoundException,
  ConflictException,
} from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { User, UserStatus as PrismaUserStatus } from "@prisma/client";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity, UserStatus } from "./entities/user.entity";

function toUserEntity(user: User): UserEntity {
  return {
    ...user,
    status: user.status as UserStatus,
  };
}

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const existingByEmail = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existingByEmail) {
      throw new ConflictException("A user with this email already exists");
    }

    if (createUserDto.phone) {
      const existingByPhone = await this.prisma.user.findUnique({
        where: { phone: createUserDto.phone },
      });

      if (existingByPhone) {
        throw new ConflictException(
          "A user with this phone number already exists"
        );
      }
    }

    const {
      email,
      phone,
      firstName,
      lastName,
      address,
      documents,
      creditScore,
      status,
    } = createUserDto;

    const user = await this.prisma.user.create({
      data: {
        email,
        phone,
        firstName,
        lastName,
        address,
        documents,
        creditScore,
        status,
      },
    });
    return toUserEntity(user);
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();
    return users.map(toUserEntity);
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException("User not found");
    return toUserEntity(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    await this.findOne(id); // Throws if not found
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    return toUserEntity(user);
  }

  async remove(id: string): Promise<UserEntity> {
    await this.findOne(id); // Throws if not found
    const user = await this.prisma.user.delete({ where: { id } });
    return toUserEntity(user);
  }
}
