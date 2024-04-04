"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const espControllers_1 = require("../controllers/espControllers");
class EspRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', espControllers_1.espController.list);
        this.router.post('/', espControllers_1.espController.create);
        this.router.get('/:id', espControllers_1.espController.getOne);
        this.router.put('/:id', espControllers_1.espController.update);
    }
}
const espRoutes = new EspRoutes();
exports.default = espRoutes.router;
