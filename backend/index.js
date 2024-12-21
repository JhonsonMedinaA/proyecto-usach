require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const router = require("./src/app/routes/user.routes"); // Asegúrate de que esta ruta es correcta
const dbConnection = require('./src/app/database/conexion'); // Importa la configuración de la base de datos

const app = express();

// Conectar a la base de datos
dbConnection();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Manejo de rutas no encontradas
app.use("*", (req, res) => res.status(404).send("404 - ruta no encontrada"));

// Inicio del servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server conectado y corriendo en el puerto ${port}`));

module.exports = app;