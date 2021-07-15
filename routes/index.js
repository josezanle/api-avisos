const express = require('express')
const { nuevoAviso, getAvisos, getAviso, actualizarAviso, borrarAviso } = require('../controllers/avisoController')
const router = express.Router()


module.exports = function(){
    router.post('/nuevo-aviso',nuevoAviso)
    router.get('/avisos',getAvisos)
    router.get('/aviso/:id',getAviso)
    router.put('/aviso/:id',actualizarAviso)
    router.delete('/aviso/:id',borrarAviso)

    return router

}