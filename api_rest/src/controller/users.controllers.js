// const express = require('express');
const { pool } = require('../database');
// const app = express();

// app.use(express.json());


// 1. Obtiene los datos del alumno con el id pasado por parámetro
const getStudentById = async (req, res) => {
    try {
        let sql =  `SELECT * FROM schools.students WHERE student_id=${req.query.student_id}`;
        let [result] = await pool.query(sql);
        res.send(result);
    } catch (err) {
        console.log(err);
    }
};

// 2. Obtiene toda la lista de los alumnos
const getAllStudents = async (req, res) => {
    try {
        let sql = 'SELECT * FROM schools.students';
        let [result] = await pool.query(sql);
        res.send(result);
    } catch (err) {
        console.log(err);
    }
};

// 3. Añade un nuevo alumno
const createStudent = async (req, res) => {
    try {
        let sql = `INSERT INTO students (first_name, last_name, group_id, year_income) VALUES ('${req.body.first_name}', 
        '${req.body.last_name}', '${req.body.group_id}', '${req.body.year_income}')`;
        let [result] = await pool.query(sql);
        res.send(result.insertId ? String(result.insertId) : '-1');
    } catch (err) {
        console.log(err);
    }
};

// 4. Modifica los datos de un alumno
const updateStudent = async (req, res) => {

        // Desestructuración para obtener los datos del cuerpo de la solicitud
    const { student_id, first_name, last_name, group_id, year_income } = req.body;
    try {
        // Preparación de la consulta SQL con parámetros de sustitución
        const sql = 'UPDATE students SET first_name = ?, last_name = ?, group_id = ?, year_income = ? WHERE student_id = ?';
        
        // Ejecución de la consulta con los valores proporcionados
        const [result] = await pool.query(sql, [first_name, last_name, group_id, year_income, student_id]);

        // Verificación de que la actualización afectó alguna fila
        if (result.affectedRows === 0) {
        // Si no se actualizó ninguna fila, se asume que el estudiante no existe
            return res.status(404).send('Estudiante no encontrado.');
        }
        // Si la actualización fue exitosa, se envía una confirmación al cliente
        res.send('Datos del estudiante actualizados correctamente.');
    } catch (err) {
        // En caso de un error durante la consulta, se captura y se envía una respuesta de error
        console.error(err);
        res.status(500).send('Error al actualizar los datos del estudiante.');
    }
};

// Elimina al alumno
const deleteStudent = async (req, res) => {
    // Obtener el student_id del query de la solicitud
    const studentId = req.query.student_id;

    // Verificar que se haya proporcionado el student_id
    if (!studentId) {
        return res.status(400).send('El student_id es requerido para eliminar al estudiante.');
    }

    try {
        // Preparar la consulta SQL para eliminar al estudiante
        const sql = 'DELETE FROM students WHERE student_id = ?';
        // Ejecutar la consulta con el student_id proporcionado
        const [result] = await pool.query(sql, [studentId]);

        // Verificar si se eliminó alguna fila
        if (result.affectedRows === 0) {
            // Si no se eliminó ninguna fila, el estudiante no existe
            return res.status(404).send('Estudiante no encontrado con el student_id proporcionado.');
        }

        // Si se eliminó el estudiante, enviar confirmación
        res.send('Estudiante eliminado con éxito.');
    } catch (err) {
        // En caso de error durante la consulta, capturar y enviar una respuesta de error
        console.error(err);
        res.status(500).send('Error al eliminar al estudiante.');
    }
};

module.exports = {
    getStudentById,
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent
};

