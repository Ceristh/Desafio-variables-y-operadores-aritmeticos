var num = parseInt(prompt("Ingrese la cantidad de números que desea sumar y promediar"));
var numero;
var suma = 0;

for (i = 1; i < num; i++) {
    numero = parseFloat(prompt("Ingrese el número " + i ));
    suma = suma + numero;
}

var promedio = suma / num;

document.write("La suma de los números ingresados es de: " + suma + " y el promedio de los números es de " + promedio + ".");