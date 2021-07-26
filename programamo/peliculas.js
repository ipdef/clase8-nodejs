const mongoose = require('./conexion.js');

const pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    año: Date
});

module.exports = pelicula;