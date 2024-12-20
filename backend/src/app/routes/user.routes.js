const express = require('express');
const { crearUser, getUserById, loginUser, updateStatusUserById, updateUserById } = require('../controllers/user.controller');

const router = express.Router();

router.post('/crear', crearUser);  // Ruta para crear un usuario
router.post('/login', loginUser);  // Ruta para login de usuario
router.get('/getbyid/:iduser', getUserById); // Ruta para obtener usuario por ID
router.put('/update-status/:iduser', updateStatusUserById); // Ruta para actualizar el estado del usuario
router.put('/update/:iduser', updateUserById); // Ruta para actualizar usuario

module.exports = router;

