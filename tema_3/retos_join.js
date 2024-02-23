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

// Obtén los nombres y apellidos de los alumnos y los nombres de las 
// asignaturas en las que están apuntados.

const getStudentsAndSubjects = `
  SELECT st.first_name, st.last_name, su.title
  FROM schools.students st
  INNER JOIN schools.marks m ON st.student_id = m.student_id
  INNER JOIN schools.subjects su ON m.subject_id = su.subject_id;`;


// RETO 2

// Obtén todos los nombres y apellidos de los profesores y los 
// nombres de las asignaturas que imparten.

const getTeachersAndSubjects = `
  SELECT t.first_name, t.last_name, s.title
  FROM schools.teacher t
  INNER JOIN schools.subject_teacher st ON t.teacher_id = st.teacher_id
  INNER JOIN schools.subjects s ON st.subject_id = s.subject_id;`;


// RETO 3 

const sql = `
  SELECT s.title AS Nombre_de_la_Asignatura,
         CONCAT(t.first_name, ' ', t.last_name) AS Nombre_del_Profesor,
         COUNT(DISTINCT m.student_id) AS Numero_Total_de_Alumnos
  FROM schools.subjects s
  JOIN schools.subject_teacher st ON s.subject_id = st.subject_id
  JOIN schools.teacher t ON st.teacher_id = t.teacher_id
  JOIN schools.marks m ON s.subject_id = m.subject_id
  GROUP BY s.subject_id, t.teacher_id
`;

main();