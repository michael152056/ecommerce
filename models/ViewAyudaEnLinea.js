const mongoose = require('mongoose');

const AyudaSchema = mongoose.Schema({
    _id:{
        type: String
    },
    funcionesAyuda:{
        type: Number
    }
});

module.exports = mongoose.model('cant_ayudas',AyudaSchema);

