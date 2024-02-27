const mysql = require('mysql2/promise');

async function main() {
    try{
        const connection = await mysql.createConnection(
            {
                host: "localhost",
                user: "root",
                password: "CorsairVone1993",
                database: "museum"
            }
        );
        const result = await connection.query(consultaPrestamos)
        console.log(result);
        connection.end();
    }
    catch(err)
    {
        console.log(err);
    }
}

// CONSULTA 1

// Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización 
// dentro de la exposición, la fecha de expiración de este, la información básica 
// (nombre, apellidos y email) de la persona que los ha prestado.

const consultaPrestamos = `
SELECT
    o.ObraID AS 'ID de la Obra',
    o.Descripcion AS 'Descripción de la Obra',
    l.Tipo AS 'Localización en la Exposición',
    e.FechaDevolucion AS 'Fecha de Expiración del Préstamo',
    p.Nombre AS 'Nombre del Propietario',
    p.Apellidos AS 'Apellidos del Propietario',
    p.Email AS 'Email del Propietario'
FROM
    obras o
INNER JOIN
    estados e ON o.EstadoID = e.EstadoID
INNER JOIN
    lugares l ON o.LugarID = l.LugarID
INNER JOIN
    propietarios p ON o.PropietarioID = p.PropietarioID
WHERE
    e.EstadoActual = 'Préstamo';
`;


// Consulta 2
// Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas 
// agrupados por su situación dentro de la organización, esto es, cuántos 
// hay expuestos, cuántos en itinerancia y cuántos almacenados.

const consultaSituacionObras = `
SELECT 
    e.EstadoActual AS 'Situación',
    COUNT(*) AS 'Total de Objetos'
FROM 
    obras o
INNER JOIN 
    estados e ON o.EstadoID = e.EstadoID
GROUP BY 
    e.EstadoActual
ORDER BY 
    'Total de Objetos' DESC;
`;


main();