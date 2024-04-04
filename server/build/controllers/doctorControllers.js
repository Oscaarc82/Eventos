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
class DoctorController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctores = yield database_1.default.query('SELECT * FROM doctor');
            resp.json(doctores);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const doctores = yield database_1.default.query('SELECT * FROM doctor WHERE idDoctor=?', [id]);
            if (doctores.length > 0) {
                return res.json(doctores[0]);
            }
            res.status(404).json({ text: 'El doctor no existe, lo sentimos' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO doctor set ?', [req.body]);
            // console.log(req.body);
            resp.json({ message: 'DOCTOR GUARDADO CON EXITO' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('DELETE FROM doctor WHERE idDoctor=?', [id]);
            res.json({ message: 'EL DOCTOR HA SIDO ELIMINADA' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE doctor set ? WHERE idDoctor=?', [req.body, id]);
            res.json({ message: 'EL DOCTOR HA SIDO ACTUALIZADO' });
        });
    }
}
const DoctorControllers = new DoctorController();
exports.default = DoctorControllers;
