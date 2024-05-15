document.addEventListener("DOMContentLoaded", function() {
    
    // VARIABLES
    var user="user"
    var passwd= "user"
    var palabra ="ELEFANTE";
    var intentos = 5;
    
    // VECTORES
    var listaPalabras=['AZTERKETA','ORNITORRINCO','CEFALORAQUIDEO','MENDIKATEA'];
    
    // ELEMENTOS
    // elementos del contenido
    const btnBegin = document.getElementById("idBegin");
    const divAttemps = document.getElementById("idAttempts");
    const divWord = document.getElementById("idWord");
    const divLetters = document.getElementById("idLetters");
    // elementos de los input
    const inpLetra = document.getElementById("idLetra");
    const inpPalabra = document.getElementById("palabraadiv");
    // elementos de los botones
    const btnchange = document.getElementById("idChange");
    const btnLogin = document.getElementById("idLogin");
    const btnTry = document.getElementById("btnTry");
    // elementos del forum
    const divLogin = document.getElementById("divForms");

    // EVENTOS
    // Dentro de un addEventListener; la Funcion se llama sin los parentesis

    // Para cargar el contenido
    btnBegin.addEventListener("click", cargar);
    // Para verificar la palabra
    btnTry.addEventListener("click", intentar_palabra);
    // Para verificar la letra
    inpLetra.addEventListener("keypress", function(e) {
        verificar_letra(e);
    });
    // Para cambiar la letra aleatoriamente
    btnchange.addEventListener("click", changeWord);
    // Para iniciar sesión
    btnLogin.addEventListener("click", login);

    // FUNCIONES
    
    // Cargar contenido de la pagina
    function cargar() { 
        console.log("click: btnBegin; cargando contenido...")
        divWord.style.display = 'flex';
        // Tener en cuenta el tipo de display que tiene el contenedor segun sus propiedades en CSS 
        divLetters.style.display = 'block';
        divAttemps.style.display = 'block';
        btnBegin.style.display = 'none';
        cargarCuadritos();
    };    
    
    function cargarCuadritos() {
        console.log("Respuesta: " + palabra);
        console.log("Numero de Letras: " + palabra.length);
        // ".length" también sirven para variables de tipo string. 
        var cuadritos = "";
        for (i = 0; i < palabra.length; i++) {
            cuadritos += `<div id="${i}" class="cuadritos"></div>`;
        }
        divWord.innerHTML = cuadritos;
        // Crear una variable para que guarde el contenido en cada bucle. Cuando termine: implementar el contenido de la variable dentro del HTML. 
    }
    
    // Para verificar la palabra
    function intentar_palabra() {
        // var palabraMayus = inpPalabra.value.toUpperCase();
        var valorPalabra = inpPalabra.value;
        // var valorLetra = inpPalabra.value;
        var palabraMayus = valorPalabra.toUpperCase();
        console.log("Palabra introducida: " + palabraMayus);
        
        if (valorPalabra == "") {
          // if (!valorLetra == "") {
          //     if (!intentos == 0) {

          //     } else {
          //         setTimeout(function() {
          //         alert("No tienes mas intentos");
          //         }, 1000);
          //     }
          // } else {
          //     console.log("Introduce una letra o una palabra")
          // }
          alert("No haz introducido nada...");
        } else {
          if (palabraMayus == palabra) {
            let newWindow = window.open("about:blank","Resultado..!","width=720,height=720");
            let newText = `<h1>Palabra Correcta!</h1>`;
            newWindow.document.write(newText);
          } else {
            let newWindow = window.open("about:blank","Resultado..!","width=720,height=720");
            let newText = `<h1>Inténtalo de nuevo!</h1>`;
            newWindow.document.write(newText);
          }
        }
    }
    
    // function restarIntentos() {
    // }

    // Verificar las letras e intentos
    function verificar_letra(e) {
        // intentos = 0;
        var letra = e.key;
        var letraM = letra.toUpperCase();
        if (!intentos == 0) {
            console.log("Tienes: " + intentos + " intentos");
            console.log(letraM);
            if (palabra.includes(letraM)) {
                // let letraN = palabra.indexOf(letraM);
                // console.log(letraN);
            for (i = 0; i < palabra.length; i++) {
                var element = palabra[i];
                if (letraM == element) {
                    console.log("pintamos " + i);
                    document.querySelectorAll(".cuadritos")[i].innerHTML = element;
                }
            }
        }
        intentos--;
        divAttemps.innerHTML = `<h2>remaining attempts : ${intentos}</h2>`;
        } else {
            inpLetra.disabled = true;
            setTimeout(function() {
                alert("No tienes mas intentos");
            }, 1000);
        }
    }

    function changeWord() {
        console.log("cambiando palabra")
        // Renovar los puntos
        intentos = 5;
        inpLetra.disabled = false;
        divAttemps.innerHTML = `<h2>remaining attempts : ${intentos}</h2>`;
        // Elegir la palabra aleatoriamente
        var max = listaPalabras.length -1;
        var indice = Math.round(Math.random() * (max - 0) + 0);
        var newPalabra = listaPalabras[indice];
        console.log(indice + ": " + newPalabra);
        // Renovando la palabra y el numero de cuadros
        palabra = newPalabra;
        divWord.innerHTML = "";
        cargarCuadritos();
    }
    
    function login() {
        divLogin.style.display = block;
    }

    

});



