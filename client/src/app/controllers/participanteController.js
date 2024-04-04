const Participante = require('../models/serverModels');

async function createPar(req, res) {
    try {
        const nvo = new Participante(req.body);
        await nvo.save();
        res.status(201).json({ success : true, message : "Created"});
    } catch (error) {
        res.status(500).json({ success : true, message : "Failed"});
    }
}

async function updatePar(req, res) {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const result = await Participante.findByIdAndUpdate(id, updatedData, { new: true });
        if (!result) {
            return res.status(404).json({ success: false, message: "Not found" });
        }
        res.json({ success: true, message: "Updated", data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function deletePar(req, res) {
    try {
        const id = req.params.id;
        const result = await Participante.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ success: false, message: "Not found" });
        }
        res.json({ success: true, message: "Deleted", data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function getParticipantes(req, res) {
    try {
        const participantes = await Participante.find({});
        res.json(participantes);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

async function getOnePar(req, res) {
    try {
        const id = req.params.id;
        const participante = await Participante.findById(id);

        if (!participante) {
            return res.status(404).json({ message : "Not Found"});
        }
        res.json(participante);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

module.exports = {
    createPar,
    updatePar,
    deletePar,
    getParticipantes,
    getOnePar
}
