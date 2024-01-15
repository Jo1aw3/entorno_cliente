var randomNum = 0;

document.getElementById("gen_num").addEventListener("click", function() {
    randomNum = getRandomNum(1, 15);
    console.log(randomNum);
    mostrarAlerta("se ha generado un numero aleatoriamente");
    return randomNum;
});

function mostrarAlerta(respuesta) {
                alert(respuesta);
}
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var inputNumero = document.getElementById("mi_numero").value;
var valorInputNumero = inputNumero;

function comprobar() {
    
    if (valorInputNumero == randomNum) {
        console.log("el numero es correcto");
    } else {
        console.log(randomNum, valorInputNumero);
        console.log("el numero no es correcto");
    }
}