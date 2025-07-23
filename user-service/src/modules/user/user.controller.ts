import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user.entity";

@ApiTags("users")
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: "Create user" })
  @ApiResponse({ status: 201, description: "User created", type: UserEntity })
  create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({
    status: 200,
    description: "List of users",
    type: [UserEntity],
  })
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get user by ID" })
  @ApiParam({ name: "id", type: String })
  @ApiResponse({ status: 200, description: "User found", type: UserEntity })
  @ApiResponse({ status: 404, description: "User not found" })
  findOne(@Param("id") id: string): Promise<UserEntity> {
    return this.userService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update user" })
  @ApiParam({ name: "id", type: String })
  @ApiResponse({ status: 200, description: "User updated", type: UserEntity })
  @ApiResponse({ status: 404, description: "User not found" })
  update(
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<UserEntity> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete user" })
  @ApiParam({ name: "id", type: String })
  @ApiResponse({ status: 200, description: "User deleted", type: UserEntity })
  @ApiResponse({ status: 404, description: "User not found" })
  remove(@Param("id") id: string): Promise<UserEntity> {
    return this.userService.remove(id);
  }
}
