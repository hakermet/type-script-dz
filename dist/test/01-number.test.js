"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
(0, globals_1.it)("Should extract the param types from the AppController", () => {
    (0, globals_1.expect)((0, index_1.getExtractedParamTypes)(index_1.AppController)).toEqual(['AppService', 'AdService']);
});
