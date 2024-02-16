// obtenemos los elementos por medio de su id
var tabla = document.getElementById("hemen");
var btnCrear = document.getElementById("CREAR");
var inputNombre = document.getElementById("Izena");
var inputApellido = document.getElementById("Abizena");
var inputNota = document.getElementById("Nota");

/**
 * @function btnCrear.addEventListener
 * genero un evento al clickear el boton,
 * en la funcion se creara una nueva fila
 * con sus respectivas celdas y se agregaran a la tabla
 * con los valores de los inputs anteriormente definidos
 */
btnCrear.addEventListener("click", function () {
    var fila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");

    var textoCelda1 = document.createTextNode(inputNombre.value);
    var textoCelda2 = document.createTextNode(inputApellido.value);
    var textoCelda3 = document.createTextNode(inputNota.value);

    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    
    tabla.appendChild(fila);
});