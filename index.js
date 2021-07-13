const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./config/db");
const routes = require("./routes");

// init
const app = express();

// base de datos
dbConnection();

// parseo de data
app.use(express.json());

// habilitando el routing
app.use('/', routes())

// inicio de la REST
app.get("/", (req, res) => {
  res.send("Hola desde el inicio");
});

// seteo del puerto
const port = process.env.PORT || "0.0.0.0";

// listen del server
app.listen(port, () => {
  console.log(`Server corriendo en el puerto ${port}`);
});
