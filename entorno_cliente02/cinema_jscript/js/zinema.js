// numero de butacas y numero de la sala
var TotalButacas =[100,150,75,50];
var ButacasLibres=[100,150,75,50];
numSala=0;

// peliculas que estan en cartelera (imagenes)
// la ruta de la imagen es segun la perspectiva del html
document.getElementById("sa1").src="IMG/mechanic.jpg";
document.getElementById("sa2").src="IMG/unmonstruo.jpg";
document.getElementById("sa3").src="IMG/missperegrine.jpg";
document.getElementById("sa4").src="IMG/ozzy.jpg";

// funcion para mostrar la informacion de la palicula y su compra
function showfilm(numfilm) {

    var infoButacas = document.querySelector("#info");
    infoButacas.innerHTML = `
    <h3>PROXIMA SESION ${numfilm}</h3>
    <h4>TOTAL BUTACAS: ${TotalButacas[0]}, BUTACAS LIBRES: ${ButacasLibres[0]}</H4>
    `;

    var show = document.getElementById("sala"+numfilm);
    var show0 = document.getElementById("compraentradas");
    for (var i = 1; i <= 4; i++) {
        var id = "sala"+i;
        var elemento = document.getElementById(id);
        if (elemento) {
            elemento.style.display = "none";
        }
        show.style.display = "block";
        show0.style.display = "block";
    }
}

// funcion que calcula y muestra por el html el coste de la estradas seleccionadas (desde el input del html)
var valorAnterior = "";
function showEntradas() {
    var cantidadEntradas = document.getElementById("numeroent").value;
    var tipoEntradas = document.getElementById("tipo").value;
    var totalPrecio = cantidadEntradas * tipoEntradas;
    var totalEntradas = document.getElementById("total").value = totalPrecio;
    var precioEntradas = document.getElementById("precio").value = tipoEntradas;
}

// funcion para verificar que el caracter que se introduce en numero de boletas sean solamente numero enteros
function onlyNum() {
    var cantidadEntradas = document.getElementById("numeroent");
    var valorEntradas = cantidadEntradas.value;
    if (!/^\d*$/.test(valorEntradas)) {
        alert("Solo se permiten Números Enteros");
        cantidadEntradas.value = valorAnterior;
    } else {
        valorAnterior = valorEntradas;
    }
}

// segunda funcion que calcula y muestra por el html el coste de la estradas seleccionadas (desde el select del html)
function showPrecio() {
    var cantidadEntradas = document.getElementById("numeroent").value;
    var tipoEntradas = document.getElementById("tipo").value;
    var totalPrecio = cantidadEntradas * tipoEntradas;
    var totalEntradas = document.getElementById("total").value = totalPrecio;
    var tipoEntradas = document.getElementById("tipo").value;
    var precioEntradas = document.getElementById("precio").value = tipoEntradas;
}
