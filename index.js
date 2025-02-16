"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myModule = exports.MenuController = exports.MenuItemController = exports.WaiterController = exports.TableController = exports.ChefService = exports.ReservationService = exports.WorkerService = exports.DBConnectorService = exports.EventService = exports.KafkaService = exports.AppController = exports.AdService = exports.AppService = void 0;
exports.getExtractedParamTypes = getExtractedParamTypes;
exports.getModuleSingleton = getModuleSingleton;
require("reflect-metadata");
function MyControllerOrService() {
    return function (target) {
        const paramTypes = Reflect.getMetadata('design:paramtypes', target) || [];
        const classNames = paramTypes.map((type) => (type === null || type === void 0 ? void 0 : type.name) || 'Unknown');
        // Store or log extracted class names
        Reflect.defineMetadata('extracted:paramtypes', classNames, target);
    };
}
// Example Classes
let AppService = class AppService {
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    MyControllerOrService()
], AppService);
let AdService = class AdService {
};
exports.AdService = AdService;
exports.AdService = AdService = __decorate([
    MyControllerOrService()
], AdService);
let AppController = class AppController {
    constructor(appService, adService) {
        this.appService = appService;
        this.adService = adService;
    }
};
exports.AppController = AppController;
exports.AppController = AppController = __decorate([
    MyControllerOrService(),
    __metadata("design:paramtypes", [AppService,
        AdService])
], AppController);
// Function to retrieve stored metadata
function getExtractedParamTypes(target) {
    return Reflect.getMetadata('design:paramtypes', target).map((type) => (type === null || type === void 0 ? void 0 : type.name) || 'Unknown');
}
let KafkaService = class KafkaService {
};
exports.KafkaService = KafkaService;
exports.KafkaService = KafkaService = __decorate([
    MyControllerOrService()
], KafkaService);
let EventService = class EventService {
    constructor(kafkaService) {
        this.kafkaService = kafkaService;
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    MyControllerOrService(),
    __metadata("design:paramtypes", [KafkaService])
], EventService);
let DBConnectorService = class DBConnectorService {
};
exports.DBConnectorService = DBConnectorService;
exports.DBConnectorService = DBConnectorService = __decorate([
    MyControllerOrService()
], DBConnectorService);
let WorkerService = class WorkerService {
    constructor(dbConnectorService, eventService) {
        this.dbConnectorService = dbConnectorService;
        this.eventService = eventService;
    }
};
exports.WorkerService = WorkerService;
exports.WorkerService = WorkerService = __decorate([
    MyControllerOrService(),
    __metadata("design:paramtypes", [DBConnectorService,
        EventService])
], WorkerService);
let ReservationService = class ReservationService {
    constructor(dbConnectorService, eventService) {
        this.dbConnectorService = dbConnectorService;
        this.eventService = eventService;
    }
};
exports.ReservationService = ReservationService;
exports.ReservationService = ReservationService = __decorate([
    MyControllerOrService(),
    __metadata("design:paramtypes", [DBConnectorService,
        EventService])
], ReservationService);
let ChefService = class ChefService {
    constructor(dbConnectorService) {
        this.dbConnectorService = dbConnectorService;
    }
};
exports.ChefService = ChefService;
exports.ChefService = ChefService = __decorate([
    MyControllerOrService(),
    __metadata("design:paramtypes", [DBConnectorService])
], ChefService);
let TableController = class TableController {
    constructor(workerService, reservationService) {
        this.workerService = workerService;
        this.reservationService = reservationService;
    }
};
exports.TableController = TableController;
exports.TableController = TableController = __decorate([
    MyControllerOrService(),
    __metadata("design:paramtypes", [WorkerService,
        ReservationService])
], TableController);
let WaiterController = class WaiterController {
    constructor(workerService) {
        this.workerService = workerService;
    }
};
exports.WaiterController = WaiterController;
exports.WaiterController = WaiterController = __decorate([
    MyControllerOrService(),
    __metadata("design:paramtypes", [WorkerService])
], WaiterController);
let MenuItemController = class MenuItemController {
    constructor(chefService, tableController) {
        this.chefService = chefService;
        this.tableController = tableController;
    }
};
exports.MenuItemController = MenuItemController;
exports.MenuItemController = MenuItemController = __decorate([
    MyControllerOrService(),
    __metadata("design:paramtypes", [ChefService,
        TableController])
], MenuItemController);
let MenuController = class MenuController {
    constructor(chefService) {
        this.chefService = chefService;
    }
};
exports.MenuController = MenuController;
exports.MenuController = MenuController = __decorate([
    MyControllerOrService(),
    __metadata("design:paramtypes", [ChefService])
], MenuController);
exports.myModule = {
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
};
function getModuleSingleton(module, myClass) {
    // TODO: implement me
    return null;
}
