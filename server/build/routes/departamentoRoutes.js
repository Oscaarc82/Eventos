"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentoControllers_1 = __importDefault(require("../controllers/departamentoControllers"));
class DepartamentoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', departamentoControllers_1.default.list);
        this.router.get('/:id', departamentoControllers_1.default.getOne);
        this.router.post('/', departamentoControllers_1.default.create);
        this.router.delete('/:id', departamentoControllers_1.default.delete);
        this.router.put('/:id', departamentoControllers_1.default.update);
    }
}
const departamentoRoutes = new DepartamentoRoutes();
exports.default = departamentoRoutes.router;
