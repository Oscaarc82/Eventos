"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const doctorControllers_1 = __importDefault(require("../controllers/doctorControllers"));
class DoctoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', doctorControllers_1.default.list);
        this.router.get('/:id', doctorControllers_1.default.getOne);
        this.router.post('/', doctorControllers_1.default.create);
        this.router.delete('/:id', doctorControllers_1.default.delete);
        this.router.put('/:id', doctorControllers_1.default.update);
    }
}
const doctoresRoutes = new DoctoresRoutes();
exports.default = doctoresRoutes.router;
