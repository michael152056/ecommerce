const Usuario = require("../models/Usuario");
const Componente = require("../models/Componente");
const ViewAyudaEnLinea = require("../models/ViewAyudaEnLinea");
const jwt = require('jsonwebtoken');
const moment = require("moment-timezone");
const date = moment();
var newDate = (moment(date).subtract(5, 'hours')).toDate();

exports.crearUsuario = async(req,res) => {
    try { 
        let usuario = new Usuario(req.body);
        usuario.inicio = newDate;
        usuario.fin = newDate;
        
        usuario.token = jwt.sign({ _id: usuario._id }, 'ecommerce')
        await usuario.save(); 
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.crearComponente = async(req,res) => {
    try { 
        var token = req.params.token;
        let componente = new Componente(req.body);
        componente.token = token;
        componente.inicio = newDate;
        componente.fin = newDate;
        await componente.save(); 
        res.send(componente);
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}



/* exports.cerrarGlobalSesion = async(req,res) => {
    try {
        console.log('fsdfasdf');
        var token = req.params.token;
        let sesion = await Sesion.aggregate([{
            $match:{
                token: token
            }
        }])

        var global = sesion[0].componentes[0];
        global.fin = newDate;

        var actualizado = await Sesion.updateOne({token: token},{ $set: { componentes: global } })

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}
 */



/* Métrica de ENTENDIBILIDAD */

/* •	Cantidad de veces que el usuario final accede, durante una sesión, a las funciones de ayuda en línea */

exports.accederFuncionesAyuda = async(req,res) => {
    try {
        var usuario = req.params.usuario;
        let cantAyudas = await ViewAyudaEnLinea.aggregate([{
            $match:{
                _id:  usuario
            }
        }])
        if(cantAyudas.length > 0){
            res.json(cantAyudas[0].funcionesAyuda)
        }else{
            res.json(1);
        }
        
     
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}



/* •	Tiempo que necesita el usuario para pasar de una página web a otra */

exports.tiempoEntreComponentes = async(req,res) => {
    try {
        var usuario = req.params.usuario;
        let componentes = await Componente.aggregate([{
            $match:{
                usuario:  usuario
            }
        }])

        console.log(componentes);
        if(componentes.length > 1){
          var tiempo = calcularDiferencia(componentes[componentes.length-2].inicio,componentes[componentes.length-1].fin)
          var respuesta = tiempo + ' en ir del componente ' + componentes[componentes.length-2].componente + ' al ' + componentes[componentes.length-1].componente
          res.json(respuesta)
        }else{
          res.json('');
        }
        
     
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}



function calcularDiferencia(date1, date2) {
    const moment = require("moment");
    const inicio = moment(date1);
    const fin = moment(date2);
    const difference = moment.duration(fin.diff(inicio));

    const hours = difference.hours();
    const minutes = difference.minutes();
    const seconds = difference.seconds();
    const milliseconds = difference.milliseconds();

   var respuesta = `Se ha tardado ${hours} horas, ${minutes} minutos, ${seconds} segundos y ${milliseconds} milisegundos`;


    return respuesta

}
