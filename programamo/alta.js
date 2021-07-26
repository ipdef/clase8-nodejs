const pelicula = require('./peliculas.js');

const rsPelicula = new pelicula(
    {
    titulo: 'rambo',director:"ni idea", genero:"accion",año:"1998"
    }
);

rsPelicula.save();