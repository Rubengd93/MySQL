// const express = require('express');
// const router = Router();
const {Router} = require('express');
const router = Router();
const userController = require('../controller/users.controllers');

// // Obtiene los datos del alumno con el id pasado por parámetro
// router.get('/alumnos', userController.getStudentById); // Parámetro de ruta: /5

// // Obtiene toda la lista de los alumnos
// router.get('/alumnos', userController.getAllStudents);

// // Añade un nuevo alumno
// router.post('/alumnos', userController.createStudent);

// // Modifica los datos de un alumno
// router.put('/alumnos', userController.updateStudent);

// // Elimina a un alumno
// router.delete('/alumnos', userController.deleteStudent);

// Obtiene la nota media del id del alumno pasado por parámetro
router.get('/media', userController.getAverageMark);

// La lista de las asignaturas a la que están apuntadas el  alumno del id pasado por parámetro
router.get('/apuntadas', userController.getSubjectsByStudentId);

// Devuelve los nombres y apellidos de todos los alumnos y los nombres de las  asignaturas a la que están apuntadas. 
router.get('/asignaturas', userController.getStudentsAndSubjects);

// La lista de las asignaturas que imparte el profesor cuyo  id es pasado por parámetro, 
router.get('/impartidas', userController.getSubjectsTaughtByTeacher);

// Devuelve los nombres y apellidos de todos los profesores y los nombres de las  asignaturas a la que imparten.
router.get('/teachersubject', userController.getTeachersAndSubjects);





module.exports = router;