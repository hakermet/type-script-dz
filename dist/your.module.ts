import { Module } from '@nestjs/common';
import { RouteB } from './routeB';
import { RouteBController } from './routeB.controller';

@Module({
    controllers: [RouteBController],
    providers: [RouteB],
})
export class YourModule {} 