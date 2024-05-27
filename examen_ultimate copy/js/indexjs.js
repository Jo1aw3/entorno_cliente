document.addEventListener("DOMContentLoaded", function() {
      
      // [listas arrays]

      var listaHitzak =["oca","usoa","perro","hartza","ardilla","basurdea","cocodrilo","barraskiloa","rinoceronte","marigorringo","mantis religiosa","ornitorrinko"];
      var palabraLetras = [];
      var letrasTecleadas = [];

      // [variables globales]

      var numeroPuntos = 0;
      var cuentaPalabras = 0;
      var palabraNueva = "";
      var indiceLetra = 0;
      var palabraError = false;
      
      // [elementos de la barra de navegacion]

      const idBasic = document.getElementById("idBasic");
      const idAdvanced = document.getElementById("idAdvanced");
      const btnStart = document.getElementById("btnStart");

      // [elementos del contenido]

      const centro = document.getElementById("centro");

      const centroSup = document.getElementById("centro-sup");
      const wordNumber = document.getElementById("wordNumber");
      const pointsNumber = document.getElementById("pointsNumber");

      const centroInf = document.getElementById("centro-inf");
      const idHitza = document.getElementById("idHitza");
      const idHitzaTekleatu = document.getElementById("idHitzaTekleatu");

      // [eventos para los botones de navegacion]

      idBasic.addEventListener("click", function() {
            idBasic.classList.add('chosenlevel');
            idAdvanced.classList.remove('chosenlevel');
      });
      idAdvanced.addEventListener("click", function() {
            idAdvanced.classList.add('chosenlevel');
            idBasic.classList.remove('chosenlevel');
      });
      btnStart.addEventListener("click", function() {
            if (idAdvanced.className == "chosenlevel") {
                  centro.style.display = "block";
                  palabra_aleatoria();
            } else if (idBasic.className == "chosenlevel") {
                  alert("No hay Nivel Basic");
            } else {
                  alert("Selecciona alguno...")
            }
      });

      // [eventos para el contenido]

      document.addEventListener("keyup", function(e) {
            if (centro.style.display == "block") {
                  if (numeroPuntos < 50) {
                        if (indiceLetra < palabraLetras.length) {


                              console.log("palabra tecleada: " + e.key);
                              console.log("palabra correcta: " + palabraLetras[indiceLetra]);
                              if (e.key == palabraLetras[indiceLetra]) {
                                    idHitzaTekleatu.innerHTML = "BIEN";
                              } else {
                                    idHitzaTekleatu.innerHTML = "MAL";
                                    palabraError = true;
                                    // poner en rojo; alertar el fallo; quitar los puntos
                              }
                              indiceLetra++;                              

                        } else {
                              numeroPuntos = numeroPuntos + 20;
                              cuentaPalabras++;
                              palabra_aleatoria();
                              indiceLetra = 0;
                        }
                  } else {
                        idHitza.innerHTML = "You're Cool!";
                  }
            }
            
      });

      // [Funciones]

      function palabra_aleatoria() {
            var max = listaHitzak.length - 1;
            var ind = Math.round(Math.random() * (max - 0) + 0);
            palabraNueva = listaHitzak[ind];
            idHitza.innerHTML = palabraNueva;
            alistar_letras();
      }
      function alistar_letras() {
            palabraLetras = [];
            for (i = 0; i < palabraNueva.length; i++) {
                  palabraLetras.push(palabraNueva[i]);  
            }
            console.log(palabraLetras);
      }

});