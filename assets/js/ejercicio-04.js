var cantDias = parseInt(prompt("Ingrese cantidad de dias"));

var anios = Math.floor(cantDias / 365);
var semanas = Math.floor((cantDias % 365) / 7);
var dias = (cantDias % 365) % 7;

document.write("El número de días ingresado corresponde a: " + anios + " años, " + semanas + " semanas y " + dias + " días");