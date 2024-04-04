"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const citasRoutes_1 = __importDefault(require("./routes/citasRoutes"));
const doctorRoutes_1 = __importDefault(require("./routes/doctorRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const clinicaRoutes_1 = __importDefault(require("./routes/clinicaRoutes"));
const departamentoRoutes_1 = __importDefault(require("./routes/departamentoRoutes"));
const espRoutes_1 = __importDefault(require("./routes/espRoutes"));
const consultaRoutes_1 = __importDefault(require("./routes/consultaRoutes"));
const consultorioRoutes_1 = __importDefault(require("./routes/consultorioRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/citas', citasRoutes_1.default);
        this.app.use('/api/doctor', doctorRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
        this.app.use('/api/usuario', usuarioRoutes_1.default);
        this.app.use('/api/clinica', clinicaRoutes_1.default);
        this.app.use('/api/departamento', departamentoRoutes_1.default);
        this.app.use('/api/especialidad', espRoutes_1.default);
        this.app.use('/api/consultorio', consultorioRoutes_1.default);
        this.app.use('/api/consulta', consultaRoutes_1.default);
        this.app.use('/api/productos', productosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
