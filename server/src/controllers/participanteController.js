const Participante = require('../models/participanteModel');

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

async function getUser(req, res) {
    try {
        const email = req.params.email        
        const users = await Participante.find({ Correo: email })
        res.json(users)        
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

async function saveEventos(req, res) {
    const { email, nomEvento, area } = req.body
    try {
        const participante = await Participante.findOne({ Correo : email })

        if (!participante) return res.status(404).json({ message : "User not found"})

        if (!participante.Eventos) participante.Eventos = []

        evento = {NomEvento : nomEvento, Area : area}
        participante.Eventos.push(evento)

        await participante.save()

        res.status(200).json({ message : "Evento agregado" })
    } catch (err) {
        res.status(500).json({ message: error.message });
    }
}

async function getGender(req, res) {
    const {gen, evento} = req.body
    try {
        const users = await Participante.find({ Genero : gen, 'Eventos.NomEvento' : evento })
        res.json(users);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

async function getPartEvento(req, res ){
    try {
        const evento = req.params.evento
        const participantes = await Participante.find({ "Eventos.NomEvento" : evento })
        res.json(participantes)
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

module.exports = {
    createPar,
    updatePar,
    deletePar,
    getParticipantes,
    getOnePar,
    getUser,
    saveEventos,
    getGender,
    getPartEvento
}
