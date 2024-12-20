const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ProyectoUsach");
    console.log("Base de datos ProyectoUsach conectada");
  } catch (error) {
    console.error("Error a la hora de iniciar la base de datos ProyectoUsach:", error);
    throw new Error("Error a la hora de iniciar la base de datos ProyectoUsach");
  }
};

module.exports = dbConnection;