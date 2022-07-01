const Usuario = require("../models/Usuario");

exports.nuevoUsuario = async (req, res) => {
    // crear objeto con info del aviso
    const usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.status(200).json({
            ok: true,
            mensaje: "Usuario agregado con exito",
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            mensaje: "No se pudo agregar el Usuario",
        });
    }
};
// ====================================================================
// get de todos los Usuarios

exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find({});
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({
            ok: false,
            mensaje: "No se puede consultar Usuarios",
        });
    }
};
//=======================================================================

// get Usuario por :id
exports.getUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findById(id);
        if (res.body === null) {
            res.status(500).json({
                ok: true,
                mensaje: "El Usuario ha sido Borrado o no existe con ese id",
            });
        } else {
            res.status(200).json({
                ok: true,
                mensaje: "Consulta exitosa, resultado:",
                body: usuario,
            });
        }
    } catch (error) {
        res.status(400).json({
            ok: false,
            mensaje: "No se puede consultar Usuario por id",
        });
    }
};

// =======================================================================

// put Usuario por :id
exports.actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findOneAndUpdate(
            { _id: id },
            req.body,
            {
                new: true,
            }
        );
        res.status(200).json({
            ok: true,
            mensaje: `Actualizacion exitosa, resultado:`,
            body: usuario,
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            mensaje: "No se puede actualizar usuario",
        });
    }
};

// =======================================================================

// delete aviso por :id
exports.borrarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        await Usuario.findByIdAndRemove(id);
        res.status(200).json({
            ok: true,
            mensaje: `Se ha borrado el usuario`,
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            mensaje: "No se pudo eliminar usuario",
        });
    }
};
