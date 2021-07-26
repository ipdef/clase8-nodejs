const pelicula = require('./peliculas.js');

pelicula.find().then(function (resultado) {
    console.log(resultado);
});