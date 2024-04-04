"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultaControllers_1 = __importDefault(require("../controllers/consultaControllers"));
class ConsultaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', consultaControllers_1.default.list);
        this.router.get('/:id', consultaControllers_1.default.getOne);
        this.router.post('/', consultaControllers_1.default.create);
        this.router.delete('/:id', consultaControllers_1.default.delete);
        this.router.put('/:id', consultaControllers_1.default.update);
    }
}
const consultaRoutes = new ConsultaRoutes();
exports.default = consultaRoutes.router;
