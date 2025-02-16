import 'reflect-metadata';

function MyControllerOrService() {
  return function (target: any) {
    const paramTypes = Reflect.getMetadata('design:paramtypes', target) || [];
    const classNames = paramTypes.map((type: any) => type?.name || 'Unknown');

    // Store or log extracted class names
    Reflect.defineMetadata('extracted:paramtypes', classNames, target);
  };
}

// Example Classes
@MyControllerOrService()
export class AppService {}
@MyControllerOrService()
export class AdService {}

@MyControllerOrService()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly adService: AdService
) {}
}

// Function to retrieve stored metadata
export function getExtractedParamTypes(target: any): string[] {
  return Reflect.getMetadata('design:paramtypes', target).map((type: any) => type?.name || 'Unknown');
}

@MyControllerOrService()
export class KafkaService {}

@MyControllerOrService()
export class EventService {
    constructor(public readonly kafkaService: KafkaService) {}
}

@MyControllerOrService()
export class DBConnectorService {}

@MyControllerOrService()
export class WorkerService {
    constructor(
        public readonly dbConnectorService: DBConnectorService,
        public readonly eventService: EventService
    ) {}
}
@MyControllerOrService()
export class ReservationService {
    constructor(
        public readonly dbConnectorService: DBConnectorService,
        public readonly eventService: EventService
    ) {}
}
@MyControllerOrService()
export class ChefService {
    constructor(
        public readonly dbConnectorService: DBConnectorService,
    ) {}
}

@MyControllerOrService()
export class TableController {
    constructor(
        public readonly workerService: WorkerService,
        public readonly reservationService: ReservationService
    ) {}
}

@MyControllerOrService()
export class WaiterController {
    constructor(
        public readonly workerService: WorkerService,
    ) {}
}

@MyControllerOrService()
export class MenuItemController {
    constructor(
        public readonly chefService: ChefService,
        public readonly tableController: TableController
    ) {}
}

@MyControllerOrService()
export class MenuController {
    constructor(
        public readonly chefService: ChefService
    ) {}
}

export const myModule = {
  providers: [
    AppService,
    AdService,
    AppController,
    KafkaService,
    EventService,
    DBConnectorService,
    WorkerService,
    ReservationService,
    ChefService,
  ],
  controllers: [
    AppController,
    TableController,
    WaiterController,
    MenuItemController,
    MenuController,
  ]
}
export type Service = AppService | AdService | KafkaService | EventService | DBConnectorService | WorkerService | ReservationService | ChefService;
export type Controller = AppController | TableController | WaiterController | MenuItemController | MenuController;
export type Module = typeof myModule;

export function getModuleSingleton(module: Module, myClass: Module['controllers'][0] | Module['providers'][0]): Service | Controller {
  // TODO: implement me
  return null as unknown as Service | Controller;
}