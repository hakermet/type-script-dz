import { Controller, Delete, Param, Patch, Body } from '@nestjs/common';
import { RouteB } from './routeB';
import { RouteBDto } from './dto/routeB.dto';

@Controller('routeB')
export class RouteBController {
    constructor(private readonly routeB: RouteB) {}

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateData: RouteBDto) {
        return this.routeB.updateRoute(id, updateData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.routeB.deleteRoute(id);
    }
} 