"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clinicaControllers_1 = __importDefault(require("../controllers/clinicaControllers"));
class ClinicaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', clinicaControllers_1.default.list);
        this.router.get('/:id', clinicaControllers_1.default.getOne);
        this.router.post('/', clinicaControllers_1.default.create);
        this.router.delete('/:id', clinicaControllers_1.default.delete);
        this.router.put('/:id', clinicaControllers_1.default.update);
    }
}
const clinicaRoutes = new ClinicaRoutes();
exports.default = clinicaRoutes.router;
