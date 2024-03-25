// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let num1 = parseInt(prompt("Introduzca el primer número"));
let num2 = parseInt(prompt("Introduzca el segundo número"));
if (num1 > num2) {
  alert("El " + num1 + " es el número más grande");
} else {
  alert("El " + num2 + " es el número más grande");
}
