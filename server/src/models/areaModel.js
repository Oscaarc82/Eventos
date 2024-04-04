const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
    NomArea : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Area', areaSchema);