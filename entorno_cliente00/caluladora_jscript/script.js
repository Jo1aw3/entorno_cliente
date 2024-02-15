document.addEventListener('DOMContentLoaded', function() {

console.log("el index se enlaza correctamente con el codigo");
const inputNum01 = document.getElementById("numero01");
const inputNum02 = document.getElementById("numero02");
const inputOpera = document.getElementById("operador");
const btnCalcula = document.getElementById("calcular");
const txtResultado = document.getElementById("resultado");

btnCalcula.addEventListener('click', calcular);
function calcular() {
    const valorNum01 = parseFloat(inputNum01.value);
    const valorNum02 = parseFloat(inputNum02.value);
    const valorOpera = inputOpera.value;

    if ((valorOpera == "+" || valorOpera == "-" || valorOpera == "*" || valorOpera == "/") && !isNaN(valorNum01) && !isNaN(valorNum02)) {
        let resultado;
        switch(valorOpera) {
            case "+":
                resultado = valorNum01 + valorNum02;
                break;
            case "-":
                resultado = valorNum01 - valorNum02
                break;
            case "*":
                resultado = valorNum01 * valorNum02
                break;
            case "/":
                resultado = valorNum01 / valorNum02
                break;
        }
        txtResultado.innerText = resultado;
    } else {
        txtResultado.innerText = "Calculo imposible";
    }
}  

});