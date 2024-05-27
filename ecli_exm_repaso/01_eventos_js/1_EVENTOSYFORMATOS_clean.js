document.addEventListener("DOMContentLoaded", function() {

    var imgTop = document.querySelectorAll("#topDiv>img");
    var imgMiddle = document.querySelectorAll("#middleDiv>img");
    
    for (var i = 0; i < imgTop.length; i++) {
        console.log(imgTop[i]);
    }
    for (var i = 0; i < imgMiddle.length; i++) {
        console.log(imgMiddle[i]);
    }
    
    imgTop[0].addEventListener("mouseover", function() {
        imgTop[0].setAttribute("src", "images/animal2.jpg");
    });
    imgTop[0].addEventListener("mouseout", function() {
        imgTop[0].src = "images/animal1.jpg";
    });
    
    imgTop[1].addEventListener("click", function() {
        if (imgTop[1].getAttribute("src") == "images/paisaje1.jpg") {
            imgTop[1].src = "images/paisaje2.jpg"; 
            
        } else {
            imgTop[1].src = "images/paisaje1.jpg";
        }
    });
    
    imgMiddle.forEach((imagen, index) => {
        imagen.addEventListener("mouseover",fondoBlanco);
        imagen.addEventListener("mouseout",fondoNegro);
        imagen.addEventListener("click", function() {
            selectImg(index);
        });
    });

    cuerpo = document.querySelector("body");

    function fondoBlanco() {
        cuerpo.style.backgroundColor = 'white';
        cuerpo.style.color = 'black';
    }
    function fondoNegro() {
        cuerpo.style.backgroundColor = 'black';
        cuerpo.style.color = 'white';
    }

    var animales = ["images/animal1.jpg","images/animal2.jpg","images/animal3.jpg"]
    var paisajes = ["images/paisaje1.jpg","images/paisaje2.jpg","images/paisaje3.jpg"]
    var personas = ["images/persona1.jpg","images/persona2.jpg","images/persona3.jpg"]
    
    contenedor = document.getElementById("bottomDiv");
    
    function selectImg(numIndex) {
      console.log("seleccionado: " + numIndex);
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
      listaImg.forEach((imagen, index) => {
        contenedor.innerHTML += `<img src="${imagen}">`;
      });
    }

    var contBottom = document.querySelector("#bottomDiv");

    contBottom.addEventListener("click", (e) => {
      console.log(e);
      console.log(e.target);
      if (e.target.nodeName == "IMG") {
        let newWin = window.open(
          "about:blank",
          "Imagen Seleccionada",
          "width=720,height=720"
        );
        let texto = `<h1>Has seleccionado esta imagen:</h1>
                    <img src="${e.target.getAttribute("src")}"></img>`;
        newWin.document.write(texto);
      }
    });

});