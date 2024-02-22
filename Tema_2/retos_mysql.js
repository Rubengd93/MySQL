const mysql = require('mysql2/promise');

async function main() {
    try{
        const connection = await mysql.createConnection(
            {
                host: "localhost",
                user: "root",
                password: "CorsairVone1993",
                database: "schools"
            }
        );
        const result = await connection.query(updateMarks)
        console.log(result);
        connection.end();
    }
    catch(err)
    {
        console.log(err);
    }
}


const insertGroups = `
INSERT INTO groupe (name) VALUES ("Grupo A"), ("Grupo B"), ("Grupo C"), ("Grupo D"), 
("Grupo E"), ("Grupo F"), ("Grupo G"), ("Grupo H"), ("Grupo I"), ("Grupo J");`;

const insertStudents = `
INSERT INTO students (first_name, last_name, group_id) VALUES  ("Ana", "García", 1), ("Luis", "Martínez", 2),
("Carlos", "Hernández", 3), ("María", "López", 4), ("David", "González", 5), ("Sara", "Pérez", 6), ("Juan", "Sánchez", 7),
("Elena", "Ramírez", 8), ("Pedro", "Díaz", 9), ("Laura", "Moreno", 10);`;

const insertTeachers = `
  INSERT INTO teacher (first_name, last_name) VALUES ("José", "Alvarez"), ("Marta", "Benítez"), ("Antonio", "Castillo"),
  ("Isabel", "Delgado"), ("Jorge", "Espinoza"), ("Carmen", "Fuentes"), ("Francisco", "Gutiérrez"),("Lucía", "Herrera"),
  ("Sergio", "Iglesias"), ("Teresa", "Jiménez");`;

const insertSubjects = `
  INSERT INTO subjects (title) VALUES  ("Matemáticas"), ("Lengua"), ("Historia"), ("Geografía"),
  ("Ciencias Naturales"), ("Física"), ("Química"), ("Educación Física"), ("Arte"), ("Música");`;

const insertSubjectTeacher = `
  INSERT INTO subject_teacher (subject_id, teacher_id, group_id) VALUES (1, 1, 1), (2, 2, 2), (3, 3, 3),
  (4, 4, 4), (5, 5, 5), (6, 6, 6), (7, 7, 7), (8, 8, 8), (9, 9, 9), (10, 10, 10);`;

const insertMarks = `
  INSERT INTO marks (student_id, subject_id, date, mark) VALUES (1, 1, '2024-01-10', 8), (2, 2, '2024-01-11', 7),
  (3, 3, '2024-01-12', 6), (4, 4, '2024-01-13', 9), (5, 5, '2024-01-14', 10), (6, 6, '2024-01-15', 5),
  (7, 7, '2024-01-16', 4), (8, 8, '2024-01-17', 7), (9, 9, '2024-01-18', 8), (10, 10, '2024-01-19', 9);`;

// Constante para añadir una columna 'provincia'
const addColumn = `
ALTER TABLE direccion
ADD COLUMN pais VARCHAR(255) NOT NULL;`;

// Constante para borrar una columna 'número'
const dropColumn = `
  ALTER TABLE direccion
  DROP COLUMN calle;`;


// Para eliminar la tabla direccion:
const dropTableDireccion = `
  DROP TABLE IF EXISTS direccion;`;

// Setear todas las notas de los alumnos a ‘0’
const setAllMarksToZero = `
  UPDATE marks
  SET mark = 0;`;

// Obtener el nombre y el primer apellido de todos los estudiantes.
const getStudentNames = `
  SELECT first_name, last_name FROM students;`;

// Obtener todos los datos de los profesores.
const getAllTeachersData = `
  SELECT * FROM teacher;`;


// RETO 2

// Eliminar de la base de datos todas las notas cuya fecha tenga más de 10 años.
const deleteOldMarks = `
  DELETE FROM marks
  WHERE date < CURDATE() - INTERVAL 10 YEAR;`;


// Haz una actualización de los datos en la tabla que corresponda teniendo en 
// cuenta que los profesores va a poner un 5 a los alumnos cuya nota sea inferior a 5.
const updateMarks = `
  UPDATE marks
  SET mark = 5
  WHERE mark < 5;`;


main();