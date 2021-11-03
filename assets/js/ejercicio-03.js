var kelvin = 273.15;
var Fahrenheit = 32;

var celsius = parseInt(prompt("Ingrese temperatura Celsius"));

var tempKelvin = celsius + 273.15;
var fahrenheit = (celsius * 1.8) + 32;

document.write("La cantidad de: " + celsius + " grados celsius ingresada corresponde a: " + fahrenheit + " grados Fahrenheit y a: " + tempKelvin + " grados Kelvin");