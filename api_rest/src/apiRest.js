const app = require('./app');

app.listen(app.get('port'), function() {
    console.log(`La API se ejecuta en el puerto ${app.get('port')}`);
});