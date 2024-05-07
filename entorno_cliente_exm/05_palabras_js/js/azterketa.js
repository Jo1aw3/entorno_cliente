document.addEventListener("DOMContentLoaded", function() {
    
    // Variables
    var user="user"
    var passwd= "user"
    var palabra ="ELEFANTE";
    var intentos = 5;
    
    // Vectores
    var listaPalabras=['AZTERKETA','ORNITORRINCO','CEFALORAQUIDEO','MENDIKATEA'];
    
    // Elementos
    const btnBegin = document.getElementById("idBegin");
    const divAttemps = document.getElementById("idAttempts");
    const divWord = document.getElementById("idWord");
    const divLetters = document.getElementById("idLetters");
    
    const inpLetra = document.getElementById("idLetra");
    const inpPalabra = document.getElementById("palabraadiv");
    const btnTry = document.getElementById("btnTry");

    // Eventos
    btnBegin.addEventListener("click", cargar);
    // Dentro de un addEventListener; la Funcion se llama sin los parentesis
    btnTry.addEventListener("click", intentar_palabra);
    inpLetra.addEventListener("keypress", verificar_letra);

    // Funciones

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
            cuadritos += `<div id="${i} class="cuadritos"></div>`;
        }
        divWord.innerHTML = cuadritos;
        // Crear una variable para que guarde el contenido en cada bucle. Cuando termine: implementar el contenido de la variable dentro del HTML. 
   }

   // Intentos para adivinar la palabra
    function intentar_palabra() {
        // var palabraMayus = inpPalabra.value.toUpperCase();
        var valorPalabra = inpPalabra.value;
        var valorLetra = inpPalabra.value;
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
            alert("No haz introducido nada...")
        } else {
            if (palabraMayus == palabra) {
                let newWindow = window.open("about:blank", "Resultado..!", "width=720,height=720");
                let newText = `<h1>Palabra Correcta!</h1>`;
                newWindow.document.write(newText);
                
            } else {
                let newWindow = window.open("about:blank", "Resultado..!", "width=720,height=720");
                let newText = `<h1>Inténtalo de nuevo!</h1>`;
                newWindow.document.write(newText);
                
            }
        }
            
        
    }

    // function restarIntentos() {
    // }

    function verificar_letra() {
        var letra = inpLetra.value;
        if (!intentos == 0) {
            console.log("Tienes: " + intentos + " intentos")
            // hacer un bucle y verificar si esta la palabra
            if (letra.contents(palabra)) {
                console.log("pintamos")
            }
            intentos--;
        } else {
            setTimeout(function() {
            alert("No tienes mas intentos");
            }, 1000);
        }
    }

});



