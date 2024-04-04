const mongoose = require('mongoose');

const ciudadSchema = new mongoose.Schema({
    NomCiudad : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Ciudad", ciudadSchema, "ciudades");