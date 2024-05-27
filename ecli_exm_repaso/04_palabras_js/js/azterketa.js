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
    const cont = document.getElementById("content");
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
    // elementos del form
    const divLogin = document.getElementById("divForms");
    const inpUser = document.getElementById("uname");
    const inpPass = document.getElementById("psw");
    const btnForm = document.getElementById("btnLogin")
    const divNewWord = document.getElementById("divNewWord");
    const newWord = document.getElementById("newWord");
    const btnNewWord = document.getElementById("btnNewWord");

    // EVENTOS
    // Dentro de un addEventListener; la Funcion se llama sin los parentesis

    // Para cargar el contenido
    btnBegin.addEventListener("click", cargar);
    // Para verificar la palabra
    btnTry.addEventListener("click", intentar_palabra);
    // Para verificar la letra
    inpLetra.addEventListener("keyup", function(e) {
        // keypress (cuando simplemente presionas una tecla), keydown (cuando presionas una tecla), keyup (cuando sueltas una tecla)
        // pasamos por parametro el elmento del evento, para poder saber cual tecla fue la que se pulso
        verificar_letra(e);
        inpLetra.value = '';
    });
    // Para cambiar la letra aleatoriamente
    btnchange.addEventListener("click", changeWord);
    // Para iniciar sesión
    btnLogin.addEventListener("click", login);
    // para validar el login
    btnForm.addEventListener("click", validar);
    // para agregar la palabra
    btnNewWord.addEventListener("click", agregar_palabra);

    // FUNCIONES
    
    // Cargar contenido de la pagina
    function cargar() {
        cont.style.display = "flex";
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

    // cambiar la pregunta y reiniciar los intentos
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
    
    // cargar el formulario de login
    function login() {
        console.log("iniciando sesion");
        cont.style.display = "none"
        divLogin.style.display = "block";
    }

    // verifica el inicio de sesion
    function validar() {
        if (inpUser.value == "user" && inpPass.value == "pass") {
            divNewWord.style.display = "block";
        } else {
            alert("el usuario o la contraseña son incorrectos")
        }
    }

    // agregar una nueva palabra al array
    function agregar_palabra () {
        newWordMayus = newWord.value.toUpperCase();
        listaPalabras.push(newWordMayus);
        console.log(listaPalabras);
        divLogin.style.display = "none";
        cargar();
        alert("palabra introducida: " + newWordMayus);
    }

});



