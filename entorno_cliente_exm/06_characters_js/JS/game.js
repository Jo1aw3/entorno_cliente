
document.addEventListener("DOMContentLoaded", load, false);

imgAll=["IMAGES/allCharactersOpac.png","IMAGES/allPlayersOpac.png","IMAGES/allGamesOpac.png"]
txtAll=["CHARACTERS","PLAYERS","GAMES"]

var numBox = 2;
console.log("numero de selección: " + numBox + "; " + txtAll[numBox] + "; " + imgAll[numBox]);

function load() {

   var personajes = [];
   var jugadores = [];

   fetch('json/characters.json')
   .then(respuesta => respuesta.json())
   .then(respuesta => personajes = Array.from(respuesta))
   .then(respuesta => console.log(personajes))
   .catch(err => console.error(err));

   fetch('json/players.json')
   .then(respuesta => respuesta.json())
   .then(respuesta => jugadores = Array.from(respuesta))
   .then(respuesta => console.log(jugadores))
   .catch(err => console.error(err));

   const box = document.getElementById("idOptions");
   const txtBox = document.querySelector("#idOptions>h2");
   const divAbajo = document.getElementById("divAbajo");
   const imgAbajo = document.getElementById("imgAbajo");
   const btnFree = document.getElementById("btnCharacterFree");
   const btnAll = document.getElementById("btnCharacters");
   const btnTake = document.getElementById("btnTake");
   const divForms = document.getElementById("divForms");
   const user = document.getElementById("uname");
   const pass = document.getElementById("psw");
   const btnLogin = document.getElementById("btnLogin");
   const idPlayer = document.getElementById("idPlayer");
   const playerData = document.getElementById("playerData");
   // const imgPlayer = document.querySelector("#playerData>img");
   const btnDelete = document.getElementById("btnDelete");
   const btnSave = document.getElementById("btnSave");
   const btnCancel = document.getElementById("btnCancel");
   
   box.style.backgroundImage = `url('${imgAll[numBox]}')`;
   txtBox.textContent = txtAll[numBox];

   // para cambiar las opciones 
   document.addEventListener("keydown", function(e) {
      // console.log("entrando al evento")
      var tecla = e.key;
      // console.log(e.key);

      if (e.key == "Enter") {
         // alert("keydown: Enter");
         // box.style.borderColor = "white";
         box.classList.add('selected');
         if (numBox == 0) {
            // alert("mostrando personajes");
            divAbajo.style.display="block";
         }
      } else if (e.key == "ArrowLeft") {
         // alert("keydown: ArrowLeft");
         ocultar_contenido()
         if (numBox == 0) {
            numBox = 2
         } else {
            numBox--;
         }
         txtBox.textContent = txtAll[numBox];
         box.style.backgroundImage = `url('${imgAll[numBox]}')`;
         console.log("numero de selección: " + numBox + "; " + txtAll[numBox] + "; " + imgAll[numBox]);
      } else if (e.key == "ArrowRight") {
         // alert("keydown: ArrowRight");
         ocultar_contenido()
         if (numBox == 2) {
            numBox = 0
         } else {
            numBox++;
         }
         txtBox.textContent = txtAll[numBox];
         box.style.backgroundImage = `url('${imgAll[numBox]}')`;
         console.log("numero de selección: " + numBox + "; " + txtAll[numBox] + "; " + imgAll[numBox]);
      }

   });
   
   // para mostrar los personajes libres
   btnFree.addEventListener("click", function() {
      console.log("mostrando los personajes libres");
      var imgFree = "";
      personajes.forEach(dato => {
         if (dato.libre == "BAI") {
            imgFree += `
            <div class='caja'>
               <img class='abajo' id="${dato.id}" src="${dato.imgCharac}"/>
            </div>
            `;
         }
      });
      imgAbajo.innerHTML = imgFree;
   });
   // btnFree.addEventListener("click", personajes_libres);
   // function personajes_libres() {
   //    console.log("mostrando los personajes libres");
   //    var imgFree = "";
   //    personajes.forEach(dato => {
   //       if (dato.libre == "BAI") {
   //          imgFree += `
   //          <div class='caja'>
   //             <img class='abajo' id="${dato.id}" src="${dato.imgCharac}"/>
   //          </div>
   //          `;
   //       }
   //    });
   //    imgAbajo.innerHTML = imgFree;
   // }

   // para mostrar todos los personajes
   btnAll.addEventListener("click", function() {
      console.log("mostrando todos los personajes");
      var imgAll = "";
      personajes.forEach(dato => {
         imgAll += `
         <div class='caja'>
            <img class='abajo' id="${dato.id}" src="${dato.imgCharac}"/>
         </div>
         `;
      });
      imgAbajo.innerHTML = imgAll;
   });

   // para mostrar el formulario y elegir un personaje
   btnTake.addEventListener("click", function() {
      console.log("mostrando el formulario");
      imgAbajo.innerHTML = "";
      divAbajo.style.display = "none";
      divForms.style.display = "block";
   });
   
   // algunas variables para la informacion del jugador
   var chosen = "";
   var imgChosen = "";
   var idJugador = "";
   var idCharacter = "";

   // para validar el formulario
   btnLogin.addEventListener("click", function() {
      console.log("validando el formulario");
      
      var validar = false;
      var validarPersonaje = false;

      jugadores.forEach(dato => {
         if (user.value == dato.nick && pass.value == dato.password) {
            validar = true;
            idJugador = dato.id;

            personajes.forEach(datoC => {
               if (dato.character == datoC.id) {
                  idCharacter = datoC.id;
                  chosen = datoC.name;
                  imgChosen = datoC.imgCharac;
                  validarPersonaje = true;
               }
            });

            if (!validarPersonaje) {
               chosen = "";
               imgChosen = "IMAGES/noImage.png";
            }

            playerData.innerHTML = `
               <h2>PLAYER :  ${dato.nick}</h2>
               <h2>POINTS :  ${dato.points}</h2>
               <h2>CHARACTER CHOSEN : ${chosen}</h2>
               <img src="${imgChosen}" alt=""/>
            `;
         } 
      });
      if (validar) {
         divForms.style.display = "none";
         idPlayer.style.display = "block";
      } else {
         alert("usuario o constraseña incorrectos")
      }
   });

   // para soltar el personaje del jugador
   btnDelete.addEventListener("click", function() {
      
      let personajeLibre = false;
      
      jugadores.forEach(dato => {
         if (dato.id === idJugador) {
            // console.log("quitando personaje " + dato.character)
            dato.character = -1;
            personajeLibre = true;
            console.log(jugadores);
         }
      });
      
      if (personajeLibre) {
         personajes.forEach(dato => {
            if (dato.id === idCharacter) {
               dato.libre = "BAI";
               console.log("personaje libre: " + dato.name)
            }
         });
      }
      alert("soltando tu personaje, espere a que se guarden los cambios...");
      setTimeout(function() {
         alert("se han guardado correctamente los cambios");
         ocultar_contenido();
         divAbajo.style.display = "block";
      }, 1000);
   });

   // para elegir un personaje al jugador
   btnSave.addEventListener("click", function() {
      // console.log("eligiendo personaje");

      do {
         var max = personajes.length -1;
         var r = Math.round(Math.random() * (max - 0) + 0);
         console.log(personajes[r].libre);
      } while (personajes[r].libre == "EZ");
      
      jugadores.forEach(dato => {
         if (dato.id === idJugador) {
            dato.character = personajes[r].id;
            personajes[r].libre = "EZ";
            console.log(jugadores[idJugador]);
            alert("Mira!, " + personajes[r].name + " es tu nuevo personaje. Esperando a que se guarden los datos");
            setTimeout(function() {
               alert("se han guardado correctamente los cambios");
               ocultar_contenido();
               divAbajo.style.display = "block";
            }, 1000);
         }
      });
   });

   // para salir de la información del jugador
   btnCancel.addEventListener("click", function() {
      ocultar_contenido();
      divAbajo.style.display = "block";
   });
}

// para ocultar el contenido si se cambia de opcion
function ocultar_contenido() {
   imgAbajo.innerHTML = "";
   divAbajo.style.display = "none";
   divForms.style.display = "none";
   idPlayer.style.display = "none";
}