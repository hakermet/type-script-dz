// routeA.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class RouteA {
    public calculateRoute(start: string, end: string): string {
        return `Маршрут A з ${start} до ${end}`;
    }
}