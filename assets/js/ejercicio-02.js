var numero1 = prompt("Ingrese primer numero mayor a cero");
var numero2 = prompt("Ingrese segundo numero mayor a cero");

do {
    if (numero1 <= 0){
        numero1 = prompt("Ingrese primer numero mayor a cero");
    } else if (numero2 <= 0)
        numero2 = prompt("Ingrese segundo numero mayor a cero");
} while (numero1 <= 0 && numero2 <= 0);

var suma = parseInt(numero1) + parseInt(numero2);
var resta = parseInt(numero1) - parseInt(numero2);
var multiplicacion = parseInt(numero1) * parseInt(numero2);
var division = parseInt(numero1) / parseInt(numero2);
var modulo = parseInt(numero1) % parseInt(numero2);

document.write("El resultado de la suma es: " + suma + "<br>");
document.write("El resultado de la resta es: " + resta + "<br>");
document.write("El resultado de la multiplicacion es: " + multiplicacion + "<br>");
document.write("El resultado de la division es: " + division + "<br>");
document.write("El resultado del resto es: " + modulo + "<br>");