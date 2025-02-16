import { Module } from '@nestjs/common';
import { RouteB } from './routeB';
import { RouteBController } from './routeB.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://kruhlikov:Kruhlikov!12@kobernyk.com:27017/students'),
    ],
    controllers: [RouteBController],
    providers: [RouteB],
})
export class AppModule {}
