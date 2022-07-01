const express = require('express')
const { nuevoAviso, getAvisos, getAviso, actualizarAviso, borrarAviso } = require('../controllers/avisoController')
const { nuevoUsuario, getUsuarios, getUsuario, actualizarUsuario, borrarUsuario } = require('../controllers/usuarioController')
const { nuevoPost, getPosts } = require('../controllers/postController')
const router = express.Router()


module.exports = function(){


    // Usuarios-----------------------------------
    router.post('/nuevo-usuario', nuevoUsuario)
    router.get('/usuarios', getUsuarios)
    router.get('/usuario/:id', getUsuario)
    router.put('/usuario/:id', actualizarUsuario)
    router.delete('/usuario/:id', borrarUsuario)

    // Avisos-----------------------------------
    router.post('/nuevo-aviso', nuevoAviso)
    router.get('/avisos', getAvisos)
    router.get('/aviso/:id', getAviso)
    router.put('/aviso/:id', actualizarAviso)
    router.delete('/aviso/:id', borrarAviso)

    // Posteos
    router.post('/nuevo-post', nuevoPost)
    router.get('/posteos', getPosts)
    // router.get('/post/:id', getAviso)
    // router.put('/post/:id', actualizarAviso)
    // router.delete('/post/:id', borrarAviso)
    return router

}