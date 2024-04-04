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
class ClinicaController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const clinica = yield database_1.default.query('SELECT * FROM clinica');
            resp.json(clinica);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const clinica = yield database_1.default.query('SELECT * FROM clinica WHERE id=?', [id]);
            if (clinica.length > 0) {
                return res.json(clinica[0]);
            }
            res.status(404).json({ text: 'La clinica no existe, lo sentimos' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO clinica set ?', [req.body]);
            // console.log(req.body);
            resp.json({ message: 'CLINICA GUARDADA CON EXITO' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('DELETE FROM clinica WHERE id=?', [id]);
            res.json({ message: 'LA CLINICA HA SIDO ELIMINADA' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE clinica set ? WHERE id=?', [req.body, id]);
            res.json({ message: 'EL JUEGO HA SIDO ACTUALIZADO' });
        });
    }
}
const clinicaControllers = new ClinicaController();
exports.default = clinicaControllers;
