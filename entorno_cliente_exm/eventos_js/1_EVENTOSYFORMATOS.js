// Importante, dejar que carge el DOM (cuando el link no esta al final del body, sino dentro del head)
document.addEventListener("DOMContentLoaded", function() {
    // Selecciono las imagenes del contenedor por medio de su id
    var imgTop = document.querySelectorAll("#topDiv>img");
    // Se pueden seleccionar los elementos por separado de esta manera
    // var imgTopL = document.querySelector("#topDiv>img:first-child");
    // var imgTopR = document.querySelector("#topDiv>img:last-child");
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

    // Se puede crear una variable para obtener el elemento del body, y usarlo en las siguientes funciones
    cuerpo = document.querySelector("body");

    imgMiddle.forEach((imagen, index)=> {
        imagen.addEventListener("mouseover",fondoBlanco);
        imagen.addEventListener("mouseout",fondoNegro);
        imagen.addEventListener("click", function() {
            selectImg(index);
        });
    });

    function fondoBlanco() {
        // document.querySelector("body").style.backgroundColor = 'white';
        // document.querySelector("body").style.color = 'black';
        cuerpo.style.backgroundColor = 'white';
        cuerpo.style.color = 'black';
    }
    function fondoNegro() {
        cuerpo.style.backgroundColor = 'black';
        cuerpo.style.color = 'white';
    }

    // Creo Arrays para guardar las URL de la imagenes
    var animales = ["images/animal1.jpg","images/animal2.jpg","images/animal3.jpg"]
    var paisajes = ["images/paisaje1.jpg","images/paisaje2.jpg","images/paisaje3.jpg"]
    var personas = ["images/persona1.jpg","images/persona2.jpg","images/persona3.jpg"]
    
    contenedor = document.getElementById("bottomDiv");
    
    function selectImg(numIndex) {
        console.log(numIndex);
        switch (numIndex) {
            case 0:
                mostrarImagenes(animales);
                break;
                case 1:
                    mostrarImagenes(paisajes);
                    break;
                    case 2:
                        mostrarImagenes(personas);
                        break;
                    }
                }
                
                function mostrarImagenes(listaImg) {
                    contenedor.innerHTML = "";
                    listaImg.forEach((imagen, index)=> {
                        contenedor.innerHTML += `<img src="${imagen}">`;
                    });
                }
                
                var contBottom = document.querySelector("#bottomDiv");
                contBottom.addEventListener("click", (e) => {
                    console.log(e);
                    console.log(e.target);

                    if (e.target.nodeName == "IMG") {
                        let newWin = window.open("about:blank", "Imagen Seleccionada", "width=720,height=720");
                        let texto = `<h1>Has seleccionado esta imagen:</h1>
                                    <img src="${e.target.getAttribute("src")}"></img>`;
                        newWin.document.write(texto);
                    }
                });

                // imgBottom.forEach((imagen, index)=> {
                //     imagen.addEventListener("click", function() {
                //         window.open("Popup", "width=900, height=700")
                //         window.innerHTML = `<p>Hemos echo click en la imagen</p>`;
                //     });
                // });
                
            });