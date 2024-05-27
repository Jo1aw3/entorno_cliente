document.addEventListener("DOMContentLoaded", function() {
    
    var navImg = document.getElementById("barraImagenes");
    var navCir = document.getElementById("barraCirculos");
    var niveles = document.getElementById("niveles");
    var content = document.getElementById("content");
    var resp = document.getElementById("verResultados");
    var test = document.getElementById("realizarTest");
    
    var facil = document.getElementById("facil");
    var medio = document.getElementById("medio");
    var dificil = document.getElementById("dificil");

    var resultado={};
    var resulNivel=[];
    var contHtml = "";
    var nivel;
    
    niveles.style.display="none";
    cargar_imagenes();
    
    resp.addEventListener("click", function() {
        ver_respuestas();
    });
    test.addEventListener("click", function() {
        ver_niveles();
    });

    // niveles
    facil.addEventListener("click", function() {
        ver_preguntas(0);
    });
    medio.addEventListener("click", function() {
        ver_preguntas(1);
    });
    dificil.addEventListener("click", function() {
        ver_preguntas(2);
    });
    

    // [Funciones]

    function cargar_imagenes() {
        fetch('json/animales.json')
        .then(respuesta => respuesta.json())
        .then(respuesta => resultado = Array.from(respuesta))
        .then(ver_imagenes)
        .catch(err => console.error(err))
    }
    function ver_imagenes() {
        var imagenSup = "";
        console.log(resultado);
        resultado.forEach(dato => {
            imagenSup += "<img src = '";
            imagenSup += dato.imgAnimal;
            imagenSup += "'> "
        });
        console.log(imagenSup);
        navImg.innerHTML = imagenSup;
    }


    function ver_respuestas() {
        navCir.innerHTML = "";
        ver_imagenes();
        niveles.style.display="none";
        contHtml = `<table id="tablaResultados">`;
        resultado.forEach(dato => {
            let respGood = "";
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
    
    function ver_preguntas(n) {
        if (n == 0) {
            console.log("seleccion: facil");
            filtrar_test(n);
        } else if (n == 1) {
            console.log("seleccion: medio");
            filtrar_test(n);
        } else {
            console.log("seleccion: dificil");
            filtrar_test(n);
        }
    }

    function filtrar_test(n) {
        // limpiamos el Array antes cargarlo con nuevo datos (por si se cambia de nivel)
        resulNivel=[];
        resultado.forEach(dato => {
            if (dato.tipo == n) {           
                resulNivel.push(dato);
            }
        });
        console.log(resulNivel);
        mostrar_test();
    }

    function mostrar_test() {
        test_imagenes();
        test_numeros();
        test_preguntas();
    }

    function test_imagenes() {
        let imagenSup = "";
        resulNivel.forEach(dato => {
            imagenSup += "<img src = '";
            imagenSup += dato.imgAnimal;
            imagenSup += "'>"
        });
        console.log(imagenSup);
        navImg.innerHTML = imagenSup;
    }

    function test_numeros() {
        var numSub = "";
        for (i=1;i<resulNivel.length+1;i++) {
            numSub += `<div><a href="">${i}</a></div>`;
        }
        navCir.innerHTML = numSub;
    }

    function test_preguntas() {
        contHtml="";
        var nq = 1;
        var totalpregunta = resulNivel.length;

        resulNivel.forEach(dato => {
            contHtml += `
                <div class="zonaCentro">
                    <img src="${dato.imgAnimal}" alt="image">
                    <div id="numeracion">${nq} / ${totalpregunta}</div>
                    <ul>
                        <li class="respuesta" data-id='${nq}' data-i='0'>${dato.R1}</li> 
                        <li class="respuesta" data-id='${nq}' data-i='1'>${dato.R2}</li>
                        <li class="respuesta" data-id='${nq}' data-i='2'>${dato.R3}</li>
                    </ul>
                </div>
            `;
           nq ++;
        });

        console.log(contHtml);    
        content.innerHTML = contHtml;
        content.addEventListener("click", (e) => {
            // console.log(e);
            // console.log(e.target);

            if (e.target.nodeName == "LI") {
                var nPregunta = e.target.getAttribute("data-id");
                var nRespuesta = e.target.getAttribute("data-i");
                console.log(nPregunta + " / " + nRespuesta);
                
                var respuestaCorrecta = false;
                resulNivel.forEach(dato => {
                    if (dato.correcto == nRespuesta) {
                            console.log("correcto " + dato.correcto);
                            respuestaCorrecta = true;
                        } else {
                            respuestaCorrecta = false;
                        }
                });

                if (respuestaCorrecta) {
                    e.target.classList.add('acierto');
                } else {
                    e.target.classList.add('error');
                }
            }
        });
    }

});