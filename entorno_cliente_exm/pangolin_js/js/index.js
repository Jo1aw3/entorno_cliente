document.addEventListener("DOMContentLoaded", function() {
    
    var niveles = document.getElementById("niveles");
    var content = document.getElementById("content");
    var resp = document.getElementById("verResultados");
    var test = document.getElementById("realizarTest");
    // niveles v01 & v02
    var facil = document.getElementById("facil");
    var medio = document.getElementById("medio");
    var dificil = document.getElementById("dificil");
    // niveles v03
    // var nive = document.getElementsByClassName("tipoSelect");
    
    var resultado={};
    var contHtml = "";
    
    niveles.style.display="none";
    cargar_imagenes();
    
    resp.addEventListener("click", function() {
        ver_respuestas();
    });
    test.addEventListener("click", function() {
        ver_niveles();
    });

    // niveles v01
    facil.addEventListener("click", function() {
        ver_facil();
    });
    medio.addEventListener("click", function() {
        ver_medio();
    });
    dificil.addEventListener("click", function() {
        ver_dificil();
    });
    
    // niveles v02
    // facil.addEventListener("click", function() {
    //     ver_preguntas(0);
    // });
    // medio.addEventListener("click", function() {
    //     ver_preguntas(1);
    // });
    // dificil.addEventListener("click", function() {
    //     ver_preguntas(2);
    // });
    
    // niveles v03
    // for (i=0;i<nive.length;i++) {
    //     nive[i].addEventListener("click", function() {
    //         ver_preguntas(i);
    //     });
    // }

    // Funciones

    function cargar_imagenes() {
        fetch('json/animales.json')
        .then(respuesta => respuesta.json())
        // .then(respuesta => console.log(respuesta))
        .then(respuesta => resultado = Array.from(respuesta))
        .then(ver_imagenes)
        .catch(err => console.error(err))
    }
    function ver_imagenes() {
        // console.log("hola");
        var imagenSup = "";
        console.log(resultado);
        resultado.forEach(dato => {
            imagenSup += "<img src = '";
            imagenSup += dato.imgAnimal;
            imagenSup += "'>"
        });
        console.log(imagenSup);
        document.getElementById("barraImagenes").innerHTML = imagenSup;
    }

    function ver_respuestas() {
        // var contHtml = "";
        niveles.style.display="none";
        contHtml = `<table id="tablaResultados">`;
        resultado.forEach(dato => {
            var respGood = "";
            if (dato.correcto == 0) {
                respGood = dato.R1;
            } else if (dato.correcto == 1) {
                respGood = dato.R2;
            } else {
                respGood = dato.R3;
            }

            contHtml += `
                <tr id="listaAnimales">
                    <td class="ver"><img src="${dato.imgAnimal}"></td>
                    <td class="ver">${respGood}</td>
                </tr>
            `;
        });
        contHtml += `</table>`;
        console.log(contHtml);
        content.innerHTML = contHtml;
    }

    function ver_niveles() {
        content.innerHTML = "";
        niveles.style.display="block";
    }

    // niveles v01
    function ver_facil() {
        console.log("seleccion: facil");
        contHtml = "Facil";
        content.innerHTML = contHtml;
    }
    function ver_medio() {
        console.log("seleccion: medio");
        contHtml = "Medio";
        content.innerHTML = contHtml;
    }
    function ver_dificil() {
        console.log("seleccion: dificil");
        contHtml = "Dificil";
        content.innerHTML = contHtml;
    }
    
    // niveles v02 & v03
    // function ver_preguntas(num) {
    //     if (num == 0) {
    //         console.log("seleccion: facil");
    //     } else if (num == 1) {
    //         console.log("seleccion: medio");
    //     } else {
    //         console.log("seleccion: dificil");
    //     }
    // }

});