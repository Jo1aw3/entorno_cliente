// Importante, dejar que carge el DOM (cuando el link no esta al final del body, sino dentro del head).
document.addEventListener("DOMContentLoaded", function() {

    //** Elementos */

    /* Para seleccionar las imagenes de los 2 contenedores, usaremos para cada uno un "querySelectorAll"
    en donde le indicaremos el tipo de elemnento que queremos seleccionar; en nuestro caso las imagenes
    que hay dentro de cada contenedor. Le indicaremos por medio de la id que tiene el contenedor 
    y el tipo de elemento que queremos sacar dentro de este: */
    var imgTop = document.querySelectorAll("#topDiv>img");
    // Se pueden seleccionar los elementos por separado de esta manera (en el primer contenedor):
    // var imgTopL = document.querySelector("#topDiv>img:first-child");
    // var imgTopR = document.querySelector("#topDiv>img:last-child");
    // Pero es más comodo usar el "querySelectorAll" y recorrelos con un bucle para poder utilizarlos:
    var imgMiddle = document.querySelectorAll("#middleDiv>img");
    
    /* No es necesario recorrer los "querySelector", 
    nomás para saber si se han seleccionado correctante (en este caso las imagenes). */
    for (var i = 0; i < imgTop.length; i++) {
        // Imprime por consola el recorrido:
        console.log(imgTop[i]);
    }
    for (var i = 0; i < imgMiddle.length; i++) {
        // Imprime por consola el recorrido:
        console.log(imgMiddle[i]);
    }

    // Se puede obtener el elemento de "body", y usarlo...
    cuerpo = document.querySelector("body");
    
    //** Eventos */

    // Teniendo los elementos definidos, llamaré a cada uno por medio de un evento con una determinada acción.
    // Creare dos Eventos para la primera imagen:
    // (1) Uno con "mouseover" para cuando el cursor este sobre la imagen.
    // (2) Otro con "mouseout" para cuando el cursos este fuera de la imagen.
    imgTop[0].addEventListener("mouseover", function() {
        // Con la funcion de "setAttribute" cambio el atributo del elemento (src) para cambiar la dirección de la imagen
        imgTop[0].setAttribute("src", "images/animal2.jpg");
    });
    imgTop[0].addEventListener("mouseout", function() {
        // También se puede cambiar la ruta de la imagen, especificando directamente el atributo (Sin la necesidad de usar setAttribute).
        imgTop[0].src = "images/animal1.jpg";
    });
    
    // Creare un evento para la segunda imagen; se activara con un click a la imagen:
    // Esta vez, usare dentro de la llamada un condicional.
    imgTop[1].addEventListener("click", function() {
        // Si la propiedad "src" contiene la ruta de la primera imagen se cambiara a la segunda:
        // para optener el valor de "src" en vez de usar "setAttribute" se usa "getAttribute".  
        if (imgTop[1].getAttribute("src") == "images/paisaje1.jpg") {
            imgTop[1].src = "images/paisaje2.jpg"; 
            
        } 
        // Si no, significa que "src" contiene la ruta de la segunda imagen, y cambiara a la primera:
        else {
            imgTop[1].src = "images/paisaje1.jpg";
        }
    });
    
    // Con un bucle diferente (forEach) recorre
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