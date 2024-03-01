function handleError(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('¡Ups! Algo salió mal.');
}

module.exports = handleError;