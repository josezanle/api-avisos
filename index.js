const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./config/db");
const routes = require("./routes");
var cors = require("cors");

// init
const app = express();

app.use(cors());

// base de datos
dbConnection();

// parseo de data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// inicio de la REST
app.get("/", (req, res) => {
  res.send("Hola desde el inicio");
});

// habilitando el routing
app.use("/", routes());


// seteo del puerto
const port = process.env.PORT || "0.0.0.0";

// listen del server
app.listen(port, () => {
  console.log(`Server corriendo en el puerto ${port}`);
});
