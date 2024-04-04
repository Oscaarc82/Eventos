const Evento = require('../models/serverModels');

async function createEve(req, res) {
    try {
        const nvo = new Evento(req.body);
        await nvo.save();
        res.status(201).json({ success : true, message : "Created"});
    } catch (error) {
        res.status(500).json({ success : true, message : "Failed"});
    }
}

async function updateEve(req, res) {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const result = await Evento.findByIdAndUpdate(id, updatedData, { new: true });
        if (!result) {
            return res.status(404).json({ success: false, message: "Not found" });
        }
        res.json({ success: true, message: "Updated", data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function deleteEve(req, res) {
    try {
        const id = req.params.id;
        const result = await Evento.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ success: false, message: "Not found" });
        }
        res.json({ success: true, message: "Deleted", data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function getEventos(req, res) {
    try {
        const eventos = await Evento.find({});
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

async function getOneEve(req, res) {
    try {
        const id = req.params.id;
        const evento = await Evento.findById(id);

        if (!evento) {
            return res.status(404).json({ message : "Not Found"});
        }
        res.json(evento);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

module.exports = {
    createEve,
    updateEve,
    deleteEve,
    getEventos,
    getOneEve
}
