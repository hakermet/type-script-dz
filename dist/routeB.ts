import { Injectable } from '@nestjs/common';
import { RouteBDto } from './dto/routeB.dto';

@Injectable()
export class RouteB {
    private routes: { id: string; start: string; end: string }[] = [];

    public calculateRoute(start: string, end: string): string {
        return `Маршрут B з ${start} до ${end}`;
    }

    public updateRoute(id: string, updateData: RouteBDto): string {
        const route = this.routes.find(route => route.id === id);
        if (!route) {
            throw new Error(`Маршрут з id ${id} не знайдено`);
        }
        route.start = updateData.start;
        route.end = updateData.end;
        return `Маршрут оновлено: ${route.start} до ${route.end}`;
    }

    public deleteRoute(id: string): string {
        const index = this.routes.findIndex(route => route.id === id);
        if (index === -1) {
            throw new Error(`Маршрут з id ${id} не знайдено`);
        }
        this.routes.splice(index, 1);
        return `Маршрут з id ${id} видалено`;
    }
}