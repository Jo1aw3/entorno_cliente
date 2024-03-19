// Importante, dejar que carge el DOM (cuando el link no esta al final del body, sino dentro del head)
document.addEventListener("DOMContentLoaded", function() {
    // Selecciono las imagenes del contenedor por medio de su id
    var imgTop = document.querySelectorAll("#topDiv>img");
    var imgMiddle = document.querySelectorAll("#middleDiv>img");

    // No es necesario recorrer los "querySelector", nomás para saber si se han seleccionado correctante (en este caso las imagenes)
    for (var i = 0; i < imgTop.length; i++) {
        // Imprimo por consola el recorrido
        console.log(imgTop[i]);
    }
    for (var i = 0; i < imgMiddle.length; i++) {
        console.log(imgMiddle[i]);
    }

    // Genero los Eventos, teniendo en mano los elementos (imagenes) que quiero usar
    imgTop[0].addEventListener("mouseover", function() {
        // alert("funciona");
        // Con la funcion de "setAttribute"
        imgTop[0].setAttribute("src", "images/animal2.jpg");
    });
    imgTop[0].addEventListener("mouseout", function() {
        // Directamente con el atributo del elemento
        imgTop[0].src = "images/animal1.jpg";
    });

    imgTop[1].addEventListener("click", function() {
        if (imgTop[1].getAttribute("src") == "images/paisaje1.jpg") {
            imgTop[1].src = "images/paisaje2.jpg"; 
        } else {
            imgTop[1].src = "images/paisaje1.jpg";
        }
        
    });

});
