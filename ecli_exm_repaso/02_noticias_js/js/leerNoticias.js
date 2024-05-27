document.addEventListener("DOMContentLoaded", function() {

    var misUsuarios =["Mikel","Ane","Endika"];
    var misContrasenas=["11","22","33"];
    var misRoles=["usu","admin","usu"];

    var idUser = document.getElementById("idUsuario");
    var idPass = document.getElementById("idContrasena");
    var enviar = document.querySelector("#botones input[value='enviar']");
    var salir = document.querySelector("#botones input[value='salir']");
    var news = document.getElementById("elementos");
    var crear = document.getElementById("crearNoticia");
    var titulo = document.getElementById("idNoticiaNuevaTitulo");
    var texto = document.getElementById("idNoticiaNuevaTexto");
    var publicar = document.querySelector("#formuCrearNoticia input[value='enviar']")

    enviar.addEventListener("click", function() {
        var sesionUser = false;
        var sesionAdmin = false;
        var passBad = false;

        if (idUser.value != "" && idPass.value != "") {
            for (i=0; i<misUsuarios.length; i++) {
                if (idUser.value == misUsuarios[i] && idPass.value == misContrasenas[i]) {
                    if (misRoles[i] == "usu") {
                        sesionUser = true;
                    } else if (misRoles[i] == "admin") {
                        sesionAdmin = true;
                    } else {
                        console.log("Error, rol desconocido");
                    }
                }

                if (idUser.value == misUsuarios[i] && idPass.value != misContrasenas[i]) {
                    passBad = true;
                }              
            }

            if (sesionUser) {
                alert("Bienvenido!");
                news.style.display = "block";
            } else if (sesionAdmin) {
                alert("Bienvenido Admin!");
                news.style.display = "block";
                crear.style.display = "block";
            } else if (passBad) {
                alert("Introduzca bien la contraseña")
            } else {
                alert("Usuario no registrado");
            }
        } else {
            alert("Introduzca los datos");
        }
    });

    publicar.addEventListener("click", function() {
        if (titulo.value != "" && texto.value != "") {
            news.innerHTML += `
                <div class="texto">
                    <h3>${titulo.value}</h3>
                    <p>${texto.value}</p>       
                </div>
            `;
            alert("Noticia Publicada");
            titulo.value = "";
            texto.value = "";
        } else {
            alert("Completa la Noticia!");
        }
    });

    salir.addEventListener("click", function() {
        if (idUser.value != "" && idPass.value != "") {
            alert("Hasta la proxima!");
        }
        idUser.value = "";
        idPass.value = "";
        news.style.display = "none";
        crear.style.display = "none";
    });

});