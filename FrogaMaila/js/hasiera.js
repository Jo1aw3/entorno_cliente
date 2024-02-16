// obtengo elementos por medio de su Id
var anteriorFoto = document.getElementById("anterior");
var siguienteFoto = document.getElementById("siguiente");
var imagen = document.getElementById("imgContenedor");
var botonesDiv = document.getElementById("buttonDIV");
var indexFoto = 0;

// genero botones dentro de un div con un bucle for
for (let i = 0; i < 6; i++) {
  // crearemos un nuevo elemento (button), difiniendolo en una nueva variable
  var boton = document.createElement("button");
  // le damos el numero actual del contador como contenido del elemento
  boton.textContent = i;
  // le asignamos un atributo para identificarlo por medio de una id
  boton.setAttribute("id", i);
  // agregamos el elemento dentro del div
  botonesDiv.appendChild(boton);
  // se repitira el proceso 6 veces
}

/**
 * genero un evento cuando se haga click en alugnos de los botones,
 * en la funcion se pasara por parametro el elemento que genero respectivo evento,
 * verifica que el elemento sea de tipo button con target.tagName,
 * si el elemento es de tipo button, se obtiene el id del boton,
 * para asi concatenar el id al src de la imagen.
 */
botonesDiv.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    var idDelBoton = event.target.id;
    imagen.setAttribute("src", "img/wallpaper_" + idDelBoton + ".jpg");
  }
});

/**
 * genero eventos para pasar a la imagen anterior y siguiente
 * 
 * @function anteriorFoto.addEventListener
 * al clickear en el boton izquierdo disminuye el numero de indexFoto,
 * concatenando al src de la imagen.
 * teniendo en cuenta de que si llega a -1 se reasigna el valor a 5 para poder navegar en bucle
 * 
 * @function siguienteFoto.addEventListener
 * al clickear en el boton derecho aumenta el numero de indexFoto,
 * concatenando al src de la imagen.
 * teniendo en cuenta de que si llega a 6 se reasigna el valor a 0 para poder navegar en bucle
 * 
 */
anteriorFoto.addEventListener("click", function () {
  indexFoto--;
  if (indexFoto == -1) {
    indexFoto = 5;
  }
  imagen.setAttribute("src", "img/wallpaper_" + indexFoto + ".jpg");
});

siguienteFoto.addEventListener("click", function () {
  indexFoto++;
  if (indexFoto == 6) {
    indexFoto = 0;
  }
  imagen.setAttribute("src", "img/wallpaper_" + indexFoto + ".jpg");
});
