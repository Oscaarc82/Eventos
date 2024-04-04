"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioControllers_1 = require("../controllers/usuarioControllers");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuarioControllers_1.usuarioController.list);
        this.router.post('/', usuarioControllers_1.usuarioController.create);
        this.router.get('/:id', usuarioControllers_1.usuarioController.getOne);
        this.router.put('/:id', usuarioControllers_1.usuarioController.update);
        this.router.delete('/:id', usuarioControllers_1.usuarioController.delete);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
