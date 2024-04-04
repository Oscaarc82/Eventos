"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductosController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield database_1.default.query('Select * From Productos');
            resp.json(productos);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO Productos set ?', [req.body]);
            resp.json({ message: 'Producto guardado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveProducto } = req.params;
            yield database_1.default.query('DELETE FROM Productos WHERE cveProducto = ?', [cveProducto]);
            resp.json({ message: 'Producto eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveProducto } = req.params;
            yield database_1.default.query('UPDATE Productos set ? WHERE cveProducto = ?', [req.body, cveProducto]);
            resp.json({ message: 'Producto actualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveProducto } = req.params;
            const producto = yield database_1.default.query('SELECT * FROM Productos WHERE cveProducto = ?', [cveProducto]);
            if (producto.length > 0) {
                return resp.json(producto[0]);
            }
            console.log(producto);
            resp.status(404).json({ Text: 'Producto inexistente' });
        });
    }
}
const productosController = new ProductosController();
exports.default = productosController;
