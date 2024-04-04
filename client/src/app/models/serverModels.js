const mongoose = require('mongoose');

const eventoSchema = mongoose.Schema({
    NombreEvento: String,
    Ciudad: String,
    Area: String,
    Descripcion: String,
    FechaInicio: Date,
    FechaFinal: Date,
    Cupo: Number,
    Participantes: Number,
    Asistentes: Number,
    Imagen: String
});

const Evento = mongoose.model("Evento", eventoSchema);

const participanteSchema = mongoose.Schema({
    Nombres: String,
    ApePaterno: String,
    ApeMaterno: String,
    Edad: Number,
    Genero: String,
    Telefono: String,
    Correo: String,
    Ciudad: String,
    Contraseña: String,
    Eventos: {
        NombreEvento: String,
        Area: String
    }
});

const Participante = mongoose.model("Participante", participanteSchema);


const ciudadSchema = mongoose.Schema({
});

const Ciudad = mongoose.model("Ciudad", ciudadSchema);


const cargoSchema = mongoose.Schema({
});

const Cargo = mongoose.model("Cargo", cargoSchema);


const areaSchema = mongoose.Schema({
});

const Area = mongoose.model("Area", areaSchema);


module.exports = { Evento, Participante, Ciudad, Cargo, Area };
