document.addEventListener("DOMContendLoaded", function() {

    var fragmentos = [];

    fetch('json/iirudiak.js')
    .then(respuesta => respuesta.json)
    .then(respuesta => fragmentos = respuesta)
    .then(ver_imagenes)
    .catch(err => console.error(err));

});

// array[].splice(indice, cuantos)