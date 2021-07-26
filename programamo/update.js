const pelicula = require('./peliculas.js');

//Actualizamos los datos
pelicula.findOne({_id: '60139158babeb41ec296a57'}).then(function (resultado){
    resultado.titulo = 'Pesadilla en la calle del infierno';
    resultado.director = 'Wes Craven';
    resultado.genero = 'Terror';
    resultado.año = '1984';
    resultado.save();
    console.log(resultado);
});