
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RouteA } from './routeA';
import { RouteB } from './routeB';
import { RoutePlanner } from './route-planner';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://kruhlikov:Kruhlikov!12@kobernyk.com:27017/students'),
    ],
    providers: [RouteA, RouteB, RoutePlanner],
})
export class AppModule {}
