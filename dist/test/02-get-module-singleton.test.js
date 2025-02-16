"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
(0, globals_1.it)("Should create a singleton for the MenuController", () => {
    const firstInstance = (0, index_1.getModuleSingleton)(index_1.myModule, index_1.MenuController);
    const secondInstance = (0, index_1.getModuleSingleton)(index_1.myModule, index_1.MenuController);
    (0, globals_1.expect)(firstInstance).toBe(secondInstance);
});
(0, globals_1.it)("Should create a singleton for the AppController", () => {
    const firstInstance = (0, index_1.getModuleSingleton)(index_1.myModule, index_1.AppController);
    const secondInstance = (0, index_1.getModuleSingleton)(index_1.myModule, index_1.AppController);
    (0, globals_1.expect)(firstInstance).toBe(secondInstance);
});
(0, globals_1.it)("Make sure that TableController and MenuController use the same instance of DBConnectorService", () => {
    const tableController = (0, index_1.getModuleSingleton)(index_1.myModule, index_1.TableController);
    const menuController = (0, index_1.getModuleSingleton)(index_1.myModule, index_1.MenuController);
    (0, globals_1.expect)(tableController.workerService.dbConnectorService).toBe(menuController.chefService.dbConnectorService);
});
