var path = require('path');
const express = require('express');
const cors = require("cors");
const app = express();
const http = require('http').createServer(app);
const bodyparser = require('body-parser');
require('dotenv').config({ path: 'variables.env' });

require('./config/db');

app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({limit: '50mb', extended: false }));
app.use(express.static('cliente'));

app.use('/api', require('./routes/sesion'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'cliente/index.html'));
});


http.listen(process.env.PORT || 4000, () => {
    console.log("El servidor está corriendo")
})


module.exports = app;