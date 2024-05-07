document.addEventListener("DOMContentLoaded", function() {
    
    var navImg = document.getElementById("barraImagenes");
    var navCir = document.getElementById("barraCirculos");
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

    // niveles v01
    // facil.addEventListener("click", function() {
    //     ver_facil();
    // });
    // medio.addEventListener("click", function() {
    //     ver_medio();
    // });
    // dificil.addEventListener("click", function() {
    //     ver_dificil();
    // });
    
    // niveles v02
    facil.addEventListener("click", function() {
        ver_preguntas(0);
    });
    medio.addEventListener("click", function() {
        ver_preguntas(1);
    });
    dificil.addEventListener("click", function() {
        ver_preguntas(2);
    });
    
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
        // console.log(imagenSup);
        navImg.innerHTML = imagenSup;
    }

    function ver_respuestas() {
        // var contHtml = "";
        navCir.innerHTML = "";
        cargar_imagenes();
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
    // function ver_facil() {
    //     console.log("seleccion: facil");
    //     // contHtml = "0";
    //     nivel = 0;
    //     filtrar_test(nivel);
    //     content.innerHTML = contHtml;
    // }
    // function ver_medio() {
    //     console.log("seleccion: medio");
    //     // contHtml = "1";
    //     nivel = 1;
    //     filtrar_test(nivel);
    //     content.innerHTML = contHtml;
    // }
    // function ver_dificil() {
    //     console.log("seleccion: dificil");
    //     // contHtml = "2";
    //     nivel = 2;
    //     filtrar_test(nivel);
    //     content.innerHTML = contHtml;
    // }
    
    // niveles v02 & v03
    function ver_preguntas(num) {
        if (num == 0) {
            console.log("seleccion: facil");
            nivel = 0;
            filtrar_test(nivel);
            content.innerHTML = contHtml;
        } else if (num == 1) {
            console.log("seleccion: medio");
            nivel = 1;
            filtrar_test(nivel);
            content.innerHTML = contHtml;
        } else {
            console.log("seleccion: dificil");
            nivel = 2;
            filtrar_test(nivel);
            content.innerHTML = contHtml;
        }
    }

    function filtrar_test(nivel) {
        resulNivel=[];
        // alert("Nivel: " + nivel);
        resultado.forEach(dato => {
            if (dato.tipo == nivel) {
                console.log("dato del nivel: " + nivel);
                resulNivel.push(dato);
            } else {
                console.log("dato de otro nivel");
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
        var imagenSup = "";
        resulNivel.forEach(dato => {
            imagenSup += "<img src = '";
            imagenSup += dato.imgAnimal;
            imagenSup += "'>"
        });
        // console.log(imagenSup);
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
            
            // contHtml+="planetas";
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
        content.innerHTML = contHtml;
        console.log(content);
        content.addEventListener("click", (e) => {
            // console.log(e);
            // console.log(e.target);

            if (e.target.nodeName == "LI") {
                var nPregunta = e.target.getAttribute("data-id");
                var nRespuesta = e.target.getAttribute("data-i");
                console.log(nPregunta + " / " + nRespuesta);
                // alert("Opcion Seleccionada");
                
                var respuestaCorrecta = false;
                resulNivel.forEach(dato => {
                    if (dato.correcto == nRespuesta) {
                            console.log("correcto " + dato.correcto);
                            respuestaCorrecta = true;
                            // alert("la respuesta es correcta")
                        } else {
                            respuestaCorrecta = false;
                            // alert("la respuesta es incorrecta")   
                        }
                });
                if (respuestaCorrecta) {
                    // alert("Bien");
                    e.target.classList.add('acierto');
                } else {
                    // alert("Mal");
                    e.target.classList.add('error');
                }
            }
        });
    }

});