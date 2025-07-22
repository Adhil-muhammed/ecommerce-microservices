import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getHealth(): string {
    return "User service is healthy!";
  }
}
