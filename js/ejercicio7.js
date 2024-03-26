// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = parseInt(prompt("Introduzca el primer número"));
let num2 = parseInt(prompt("Introduzca el segundo número"));
let num3 = parseInt(prompt("Introduzca el tercer número"));
if (num1 > num2 && num1 > num3) {
  alert("El " + num1 + " es el número más grande");
} else if (num2 > num1 && num2 > num3) {
  alert("El " + num2 + " es el número más grande");
} else {
  alert("El " + num3 + " es el número más grande");
}
