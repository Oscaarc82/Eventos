"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultorioControllers_1 = require("../controllers/consultorioControllers");
class ConRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', consultorioControllers_1.conController.list);
        this.router.post('/', consultorioControllers_1.conController.create);
        this.router.get('/:id', consultorioControllers_1.conController.getOne);
        this.router.put('/:id', consultorioControllers_1.conController.update);
    }
}
const consultorioRoutes = new ConRoutes();
exports.default = consultorioRoutes.router;
