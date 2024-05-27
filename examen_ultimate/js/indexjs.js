document.addEventListener("DOMContentLoaded", function() {
      
      // [listas arrays]

      var listaHitzak =["oca","usoa","perro","hartza","ardilla","basurdea","cocodrilo","barraskiloa","rinoceronte","marigorringo","mantis religiosa","ornitorrinko"];
      var palabraLetras = [];

      // [variables globales]

      var numeroPuntos = 0;
      var cuentaPalabras = 1;
      var palabraNueva = "";
      var indiceLetra = 0;
      var letraCorrecta = true;
      
      // [elementos de la barra de navegacion]

      const idBasic = document.getElementById("idBasic");
      const idAdvanced = document.getElementById("idAdvanced");
      const btnStart = document.getElementById("btnStart");

      // [elementos del contenido]

      const centro = document.getElementById("centro");

      // const centroSup = document.getElementById("centro-sup");
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
                  if (letraCorrecta) {

                        if (numeroPuntos < 50) {
                              console.log("palabra tecleada: " + e.key);
                              console.log("palabra correcta: " + palabraLetras[indiceLetra]);
                              if (e.key == palabraLetras[indiceLetra]) {
                                    letraCorrecta = true;
                              } else {
                                    letraCorrecta = false;
                              }                              
                        } else {
                              idHitza.innerHTML = "You're Cool!";
                              idHitzaTekleatu.innerHTML = "";
                              document.removeEventListener("keyup");
                        }
                        
                        if (letraCorrecta) {
                              idHitzaTekleatu.innerHTML += `<span class="acierto">${palabraLetras[indiceLetra]}</span>`;
                              numeroPuntos = numeroPuntos + 1;
                              indiceLetra++;
      
                              if (indiceLetra >= palabraLetras.length) {
                                    palabra_aleatoria();
                                    cuentaPalabras++;
                                    wordNumber.innerHTML = ` word : ${cuentaPalabras}`;
                                    pointsNumber.innerHTML = ` points : ${numeroPuntos}`
                              } 
      
                        } else {
                              idHitzaTekleatu.innerHTML += `<span class="fallo">${palabraLetras[indiceLetra]}</span>`
                              setTimeout(function() {
                                    indiceLetra = 0;
                                    numeroPuntos = 0;
                                    pointsNumber.innerHTML = ` points : ${numeroPuntos}`
                                    letraCorrecta = true;
                                    palabra_aleatoria();
                                }, 2000);
                        }

                  }

            }
            
      });

      // [Funciones]

      function palabra_aleatoria() {
            var max = listaHitzak.length - 1;
            var ind = Math.round(Math.random() * (max - 0) + 0);
            palabraNueva = listaHitzak[ind];
            idHitza.innerHTML = palabraNueva;
            idHitzaTekleatu.innerHTML = "";
            indiceLetra = 0;
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