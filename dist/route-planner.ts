
import { Injectable } from '@nestjs/common';

interface Location {
    id: string;
    name: string;
    coordinates: { lat: number; lng: number };
}

@Injectable()
export class RoutePlanner {
    private locations: Location[] = [];

    public addLocation(location: Location): void {
        this.locations.push(location);
    }

    public findRoute(startId: string, endId: string): Location[] | null {
        const startLocation = this.locations.find(loc => loc.id === startId);
        const endLocation = this.locations.find(loc => loc.id === endId);

        if (!startLocation || !endLocation) {
            return null;
        }
        return [startLocation, endLocation];
    }
}