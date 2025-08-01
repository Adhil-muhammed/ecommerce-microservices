import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { PrismaService } from "../prisma/prisma.service";
import { AuthModule} from "./modules/auth/auth.module";
import { UserModule } from "./modules/user/user.module";
import { CollateralModule } from "./modules/collateral/collateral.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes ConfigService available app-wide
      envFilePath: ".env",
    }),
    UserModule,
    AuthModule,
    CollateralModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
