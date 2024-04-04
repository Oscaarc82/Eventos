const Participante = require('../models/participanteModel');

async function getUser(req, res) {
    try {
        const email = req.params.correo        
        const users = await Participante.find({ Correo: email })
        res.json(users)        
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

async function getEventosArea(req, res) {
    try {
        const area = req.params.area
        const eventos = await Evento.find({ Area: area });
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {
    getUser
}