const mongoose = require('mongoose');

const participanteSchema = new mongoose.Schema({
    NomParticipante: String,
    ApePaterno: String,
    ApeMaterno: String,
    Edad: Number,
    Genero: String,
    Telefono: String,
    Correo: String,
    Ciudad: String,
    Cargo: String,
    Contrasenia: String,
    Eventos: {
        NombreEvento: String,
        Area: String
    }
});

module.exports = mongoose.model("Participante", participanteSchema);