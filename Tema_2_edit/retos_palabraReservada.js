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
        const result = await connection.query(countTeachersPerSubject)
        console.log(result);
        connection.end();
    }
    catch(err)
    {
        console.log(err);
    }
}

// RETO 1
// ----------------------------------------------------------------------------------


// Usando el ejemplo de base de datos que tenemos ya implementado desde 
// unidades anteriores, calcular la nota media de los alumnos de la asignatura 1.

// La función AVG en SQL es una función de agregado que calcula el valor promedio de un conjunto de valores numéricos.

const calculateAverageMarkSubject1 = `
SELECT * FROM schools.marks;
SELECT AVG(mark) FROM schools.marks WHERE subject_id = 1;`;


// Calcular el número total de alumnos que hay en el bootcamp.

const calculateTotalStudents = `
SELECT COUNT(*) FROM schools.students;`;

// Listar todos los campos de la tabla “groups”

const listAllGroupsFields = `
  SELECT * FROM schools.groupe;`;

//   Elimina todas las notas de la base de datos que estén por 
//   encima de 5 y que sean del año pasado (no utilices BETWEEN).

const deleteHighMarksFromLastYear = `
  DELETE FROM schools.marks
  WHERE mark > 5 AND YEAR(date) = YEAR(CURDATE()) - 1;`;

// Obtén los datos de todos los estudiantes que estén en el bootcamp este año. 
// Para ello la tabla de estudiantes debe tener un campo que sea el año de ingreso.

const getStudentsFromCurrentYear = `
  SELECT * FROM schools.students
  WHERE year_income = YEAR(CURDATE());`;



//   Calcular el numero de profesores que hay por cada asignatura.

const countTeachersPerSubject = `
  SELECT subject_id, COUNT(teacher_id)
  FROM schools.subject_teacher
  GROUP BY subject_id;`;


//   RETO 2
// -------------------------------------------------------------------

// Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que 
// tenga una nota mayor de 8 y la nota tenga fecha del año pasado.

const getSpecificStudentsMarks = `
  SELECT student_id, mark FROM schools.marks
  WHERE (student_id BETWEEN 1 AND 20)
  OR (mark > 8 AND YEAR(date) = YEAR(CURDATE()) - 1);`;

//   Obtén la media de las notas que se han dado en el último año por asignatura.

const getAverageMarksLastYearBySubject = `
  SELECT subject_id, AVG(mark)
  FROM schools.marks
  WHERE YEAR(date) = YEAR(CURDATE()) - 1
  GROUP BY subject_id;`;

  // Obtén la media aritmética de las notas que se han dado en el último año por alumno

  const getStudentAverageMarksLastYear = `
  SELECT student_id, AVG(mark)
  FROM schools.marks
  WHERE YEAR(date) = YEAR(CURDATE()) - 1
  GROUP BY student_id;`;


main();