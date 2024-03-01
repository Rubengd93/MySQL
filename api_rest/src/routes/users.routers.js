// const express = require('express');
// const router = Router();
const {Router} = require('express');
const router = Router();
const userController = require('../controller/users.controllers');

// Obtiene los datos del alumno con el id pasado por parámetro
router.get('/alumnos', userController.getStudentById); // Parámetro de ruta: /5

// Obtiene toda la lista de los alumnos
router.get('/alumnos', userController.getAllStudents);

// Añade un nuevo alumno
router.post('/alumnos', userController.createStudent);

// Modifica los datos de un alumno
router.put('/alumnos', userController.updateStudent);

// Elimina a un alumno
router.delete('/alumnos', userController.deleteStudent);

module.exports = router;