const Ciudad = require('../models/serverModels');
const Cargo = require('../models/serverModels');
const Area = require('../models/serverModels');

exports.getCiudades = async (req, res) => {
    try {
        const data = await Ciudad.find({});
        res.json({ success : true, data : data });
    } catch (error) {
        res.status(500).json({ success : false, message : error.message })
    }
}

exports.getOneCiu = async (req, res) => {
    try {
        const id = req.params._id;
        const result = await Ciudad.findById(id);
        if (!result) {
            return res.status(404).json({ success : false, message : "Not Found"});
        }
        res.json({ success : true, data : result });
    } catch (error) {
        res.status(500).json({ success : false, message : error.message });
    }
}

exports.getCargos = async (req, res) => {
    try {
        const data = await Cargo.find({});
        res.json({ success : true, data : data });
    } catch (error) {
        res.status(500).json({ success : false, message : error.message })
    }
}

exports.getOneCar = async (req, res) => {
    try {
        const id = req.params._id;
        const result = await Cargo.findById(id);
        if (!result) {
            return res.status(404).json({ success : false, message : "Not Found"});
        }
        res.json({ success : true, data : result });
    } catch (error) {
        res.status(500).json({ success : false, message : error.message });
    }
}

exports.getAreas = async (req, res) => {
    try {
        const data = await Area.find({});
        res.json({ success : true, data : data });
    } catch (error) {
        res.status(500).json({ success : false, message : error.message })
    }
}

exports.getOneArea = async (req, res) => {
    try {
        const id = req.params._id;
        const result = await Area.findById(id);
        if (!result) {
            return res.status(404).json({ success : false, message : "Not Found"});
        }
        res.json({ success : true, data : result });
    } catch (error) {
        res.status(500).json({ success : false, message : error.message });
    }
}