
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
//    var show1 = document.getElementById("sala1");
//    var show2 = document.getElementById("sala2");
//    var show3 = document.getElementById("sala3");
//    var show4 = document.getElementById("sala4");
//    var show0 = document.getElementById("compraentradas");
//    
//    var hide1 = document.getElementById("sala1");
//    var hide2 = document.getElementById("sala2");
//    var hide3 = document.getElementById("sala3");
//    var hide4 = document.getElementById("sala4");

    var infoButacas = document.querySelector("#info");
    infoButacas.innerHTML = `
    <h3>PROXIMA SESION ${numfilm}</h3>
    <h4>TOTAL BUTACAS: ${TotalButacas[0]}, BUTACAS LIBRES: ${ButacasLibres[0]}</H4>
    `;
    
    // !! hay que reducir el contenido de codigo que hay en esta funcion
//    if (numfilm == 1) {
//        hide2.style.display = "none";
//        hide3.style.display = "none";
//        hide4.style.display = "none";
//        show1.style.display = "block";
//        show0.style.display = "block";
//    } else if (numfilm == 2) {
//        hide1.style.display = "none";
//        hide3.style.display = "none";
//        hide4.style.display = "none";
//        show2.style.display = "block";
//        show0.style.display = "block";
//    } else if (numfilm == 3) {
//        hide1.style.display = "none";
//        hide2.style.display = "none";
//        hide4.style.display = "none";
//        show3.style.display = "block";
//        show0.style.display = "block";
//    } else {
//        hide1.style.display = "none";
//        hide2.style.display = "none";
//        hide3.style.display = "none";
//        show4.style.display = "block";
//        show0.style.display = "block";
//    }   
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
