//* obtengo los elementos. con Js
// const colEmail = document.getElementById("emailTable");
// const colPass = document.getElementById("firstnameTable");
// const colLast = document.getElementById("lastnameTable");
// const colDate = document.getElementById("dateTable");
// const colSubj = document.getElementById("subjectTable");

//* Obtener la URL actual. con Js
var url = new URL(window.location.href);

//* Obtener los parámetros de la URL como un objeto. con Js
var params = Object.fromEntries(url.searchParams.entries());

//* relleno la tabla. con Js
// colEmail.innerHTML = params.ncorreo;
// colPass.innerHTML = params.firstname;
// colLast.innerHTML = params.lastname;
// colDate.innerHTML = params.fnacimi;
// colSubj.innerHTML = params.Curso;

//* relleno la tabla. con JQuery
$("#emailTable").text(params.ncorreo);
$("#firstnameTable").text(params.firstname);
$("#lastnameTable").text(params.lastname);
$("#dateTable").text(params.fnacimi);
$("#subjectTable").text(params.Curso);

//* imprimo los valores. con Js
console.log(params);
