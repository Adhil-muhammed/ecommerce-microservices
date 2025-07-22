import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, // makes ConfigService available app-wide
    envFilePath: '.env',
  }),],
  controllers: [AppController,],
  providers: [PrismaService],
})
export class AppModule {} 