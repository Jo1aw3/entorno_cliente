// const colEmail = document.getElementById("emailTable");
// const colPass = document.getElementById("firstnameTable");
// const colLast = document.getElementById("lastnameTable");
// const colDate = document.getElementById("dateTable");
// const colSubj = document.getElementById("subjectTable");


// Obtener la URL actual
var url = new URL(window.location.href);

// Obtener los parámetros de la URL como un objeto
var params = Object.fromEntries(url.searchParams.entries());

// colEmail.innerHTML = params.ncorreo;
// colPass.innerHTML = params.firstname;
// colLast.innerHTML = params.lastname;
// colDate.innerHTML = params.fnacimi;
// colSubj.innerHTML = params.Curso;

$("#emailTable").text(params.ncorreo);
$("#firstnameTable").text(params.firstname);
$("#lastnameTable").text(params.lastname);
$("#dateTable").text(params.fnacimi);
$("#subjectTable").text(params.Curso);

// Imprimir los valores
console.log(params);
