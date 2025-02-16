
import { Injectable } from '@nestjs/common';

@Injectable()
export class RouteB {
    public calculateRoute(start: string, end: string): string {
        return `Маршрут B з ${start} до ${end}`;
    }
}