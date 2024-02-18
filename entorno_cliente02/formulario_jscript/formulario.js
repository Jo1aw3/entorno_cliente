// obtenemos los elementos del html
// inputs del formulario
var inputCorreo = document.getElementById("correo");
var inputPass01 = document.getElementById("klabe1");
var inputPass02 = document.getElementById("klabe2");
var inputNombre = document.getElementById("fname");
var inputApellido = document.getElementById("apellido");
var inputFecha = document.getElementById("fnacimiento");
var inputCursos = document.getElementsByClassName("Curso");
// botones del formulario
var btnEnviar = document.querySelector("input[type=submit]");
var btnPop = document.getElementsByName("fabrirPopup")[0];
var btnVentana = document.getElementsByName("fcrearVentana")[0];

// verificar correo
inputCorreo.addEventListener("blur", function () {
  var valorCorreo = inputCorreo.value;
  if (valorCorreo) {
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexCorreo.test(valorCorreo)) {
      alert("la sintaxis del correo esta mal escrita: intente de nuevo");
      inputCorreo.value = "";
    }
  }
});

// verificar contraseña
inputPass01.addEventListener("blur", function () {
  var valorPass01 = inputPass01.value;
  if (valorPass01) {
    var regexPass01 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (!regexPass01.test(valorPass01)) {
      alert(
        "la contraseña debe tener entre 0 y 16 caracteres, con almenos un numero, y una mayuscula"
      );
      inputPass01.value = "";
    }
  }
});

inputPass02.addEventListener("blur", function () {
  var valorPass01 = inputPass01.value;
  var valorPass02 = inputPass02.value;
  if (valorPass02) {
    if (valorPass01 !== valorPass02) {
      alert("las contraseñas no son iguales");
      inputPass01.value = "";
      inputPass02.value = "";
    }
  }
});

// verificar si hay algo en la entrada del nombre para habilitar la entrada del apellido
inputNombre.addEventListener("keyup", function () {
  var valorNombre = inputNombre.value;
  if (valorNombre) {
    inputApellido.disabled = false;
  }
});

// evento de botones
btnEnviar.addEventListener("click", function (event) {
  if (!validarFormulario()) {
    alert("Faltan datos por rellenar");
    event.preventDefault();
  } 
});

btnVentana.addEventListener("click", function () {
  if (validarFormulario()) {
    var cursoElegido = document.querySelector('input[name="Curso"]:checked').value;
    var nuevaVentana = window.open("", "Formulario", "width=400, height=400");
    nuevaVentana.document.write(`
      <h3>Bienvenido!</h3>
      <p>Tu nombre es: ${inputNombre.value}</p>
      <p>Naciste el: ${inputFecha.value}</p>
      <p>Elegiste el curso: ${cursoElegido}</p>
    `);
  }
});

btnPop.addEventListener("click", function () {
  if (validarFormulario()) {
    var elegidoCurso = document.querySelector('input[name="Curso"]:checked').value;
    var url = `bigarrenLehioa.html?ncorreo=${inputCorreo.value}&firstname=${inputNombre.value}&lastname=${inputApellido.value}&fnacimi=${inputFecha.value}&Curso=${elegidoCurso}`;
    window.open(url, "Popup", "width=900, height=700");
  }
});

function validarFormulario() {
  var valorCorreo = inputCorreo.value;
  var valorPass01 = inputPass01.value;
  var valorPass02 = inputPass02.value;
  var valorNombre = inputNombre.value;
  var valorApellido = inputApellido.value;
  var valorFecha = inputFecha.value;
  var valorCurso = inputCursos.value;
  if (
    valorCorreo === "" ||
    valorPass01 === "" ||
    valorPass02 === "" ||
    valorNombre === "" ||
    valorApellido === "" ||
    valorFecha === "" ||
    valorCurso === ""
  ) {
    alert("Faltan Datos por rellenar.");
    return false;
  } else {
    return true;
  }
}
