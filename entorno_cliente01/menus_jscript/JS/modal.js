$(document).ready(function() {

var elemVolver = document.getElementById("elemVolver");
elemVolver.addEventListener("click", function() {
    window.location.href = "INDEX.html";
});

var url = window.location.href;
var recorte = url.split("/");

var platosSeleccionados = [];

if (recorte[recorte.length - 1] == "ELEGIR_PRODUCTO.html?view=platos" || recorte[recorte.length - 1] == "ELEGIR_PRODUCTO.html?view=platos#") {
    $('.navMenu').hide();
} else {
    $('.navMenu').show();
}

});