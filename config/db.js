const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb+srv://joze:3cyIkdMcSOBxGyiM@cluster0.ccljz.mongodb.net/demo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Base de Datos Online");
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo establecer la conexion a la Base de Datos");
  }
};

module.exports = { dbConnection };
