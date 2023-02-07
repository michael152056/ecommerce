const mongoose = require('mongoose');
const moment = require("moment-timezone");

const ComponenteSchema = mongoose.Schema({
    token:{
        type: String
    },
    componente:{
        type: String
    },
    usuario:{
        type: String
    },
    inicio: {
        type: Date
    },
    fin: {
        type: Date
    }
});

module.exports = mongoose.model('Componente',ComponenteSchema);

