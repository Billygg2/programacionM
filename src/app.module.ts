import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VentasModule } from './ventas/ventas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasController } from './ventas/ventas.controller';
import { VentasService } from './ventas/ventas/ventas.service';

@Module({
  imports: [VentasModule,
  TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port: 5432,
    username:'postgres',
    password:'123',
    database:'ventas',
    autoLoadEntities: true,
    synchronize: true,
    dropSchema: true
  })],
  controllers: [AppController,
  VentasController],
  providers: [AppService, VentasService],
})
export class AppModule { }
