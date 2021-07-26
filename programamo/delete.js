const pelicula = require('./pelicula.js');

pelicula.deleteOne({_id: '60139158babeb41ec296a57'}).then(function (resp) {
    console.log(resp);
});