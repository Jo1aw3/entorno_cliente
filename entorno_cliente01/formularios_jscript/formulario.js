// defino una variable para llamar el imput del html por medio de su id
var inputCorreo = document.getElementById("correo");

 /*con el elemento anteriomente definido podremos usar un método para crear
 un evento en relacion con este mismo. Usamos el método "addEventListener":
 este permite detectar interacciones y lanzar una función especifica cuando 
 esta interaccion se produsca.
 en el caso siguiente, la interaccion/evento es" blur"
 se activa cuando me salgo del elemento especificado,
 con esto creamos la funcion y ponemo en ella lo que queremos que esta haga.*/
inputCorreo.addEventListener("blur", function() {
    // sacamos el valor que hay dentro del elemento con la propiedad ".value"
    var valorCorreo = inputCorreo.value;
    // definimos otra variable en donde especificamos por medio de expresiones regulares (RegEx)
    // la sintaxis que queremos que tenga el correo
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // ya con todo lo anterior verificamos con el método "test"
    // si el valor del correo cumple con la sintaxis especificada.
    if (!regexCorreo.test(valorCorreo)) {
        // si no cumple con la sintaxis saldra una alerta de advertencia y borrara el valor del elemento
        alert("la sintaxis del correo esta mal escrita: intente de nuevo");
        inputCorreo.value = '';
    }
});

// entendiendo lo anteriormente echo: haremos lo mismo pero para la contraseña
// con el añadido de que se pueda comprobrar si la contraseña 1 y 2 sean la mismas
// no usar los caracteres especiales para definir variables como por ejemplo la ñ
//var inputContraseña1 = document.getElementById("klabe1");
var inputPassword1 = document.getElementById("klabe1");
var inputPassword2 = document.getElementById("klabe2");

inputPassword1.addEventListener("blur", function() { 
    var valorPassword = inputPassword1.value; 
    var regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (!regexPassword.test(valorPassword)) {
        alert("la contraseña debe tener entre 0 y 16 caracteres, con almenos un numero, y una mayuscula");
        inputPassword1.value = '';
    }
});
inputPassword2.addEventListener("blur", function() {
   var valorPassword1 = inputPassword1.value;
   var valorPassword2 = inputPassword2.value;
   if (valorPassword1 !== valorPassword2) {
       alert("las contraseñas no son iguales");
       inputPassword1.value = '';
       inputPassword2.value = '';
   }
});

var inputNombre = document.getElementById("fname");
var inputApellido = document.getElementById("apellido");

// haremos otro addEventListener con otra interaccion: "keyup" el cual se activa cuando escribimos dentro del input
inputNombre.addEventListener("keyup", function() {
    var valorNombre = inputNombre.value;
    if (valorNombre !== "") {
        inputApellido.disabled = false;
    }
    else {
        inputApellido.disabled = true;
    }
});



