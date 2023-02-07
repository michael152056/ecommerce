const mongoose = require('mongoose');
const moment = require("moment-timezone");

const UsuarioSchema = mongoose.Schema({
    token:{
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

module.exports = mongoose.model('Usuario',UsuarioSchema);

