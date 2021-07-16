const Aviso = require("../models/Aviso");

exports.nuevoAviso = async (req, res) => {
  // crear objeto con info del aviso
  const aviso = new Aviso(req.body);
  try {
    await aviso.save();
    res.status(200).json({
      ok: true,
      mensaje: "Aviso agregado con exito",
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      mensaje: "No se pudo agregar el aviso",
    });
  }
};
// ====================================================================
// get de todos los avisos

exports.getAvisos = async (req, res) => {
  try {
    const avisos = await Aviso.find({});
    res.status(201).json(avisos);
  } catch (error) {
    res.status(400).json({
      ok: false,
      mensaje: "No se puede consultar avisos",
    });
  }
};
//=======================================================================

// get aviso por :id
exports.getAviso = async (req, res) => {
  const { id } = req.params;
  try {
    const aviso = await Aviso.findById(id);
    if (res.body === null) {
      res.status(500).json({
        ok: true,
        mensaje: "El aviso ha sido Borrado o no existe con ese id",
      });
    } else {
      res.status(200).json({
        ok: true,
        mensaje: "Consulta exitosa, resultado:",
        body: aviso,
      });
    }
  } catch (error) {
    res.status(400).json({
      ok: false,
      mensaje: "No se puede consultar aviso por id",
    });
  }
};

// =======================================================================

// put aviso por :id
exports.actualizarAviso = async (req, res) => {
  const { id } = req.params;
  try {
    const aviso = await Aviso.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      ok: true,
      mensaje: `Actualizacion exitosa, resultado:`,
      body: aviso,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      mensaje: "No se puede actualizar aviso",
    });
  }
};

// =======================================================================

// delete aviso por :id
exports.borrarAviso = async (req, res) => {
  const { id } = req.params;
  try {
    const aviso = await Aviso.findByIdAndRemove(id);
    res.status(200).json({
      ok: true,
      mensaje: `Se ha borrado el aviso: ${aviso.titulo}, con el Id: ${aviso.id}`,
    });
    console.log(JSON.stringify(res, null, 3));
  } catch (error) {
    res.status(400).json({
      ok: false,
      mensaje: "No se pudo eliminar avisos",
    });
  }
};
