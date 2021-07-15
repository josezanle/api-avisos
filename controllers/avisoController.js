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
  try {
    const aviso = await Aviso.findById({ _id: req.params.id });
    res.status(200).json(aviso);
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
  try {
    const aviso = await Aviso.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(aviso);
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
    const aviso = await Aviso.findOneAndDelete({_id:id});
    res.status(200).json(aviso);
  } catch (error) {
    res.status(400).json({
      ok: false,
      mensaje: "No se pudo eliminar avisos",
    });
  }
};
