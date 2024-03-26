// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero = parseInt(prompt("Introduce un número:"));
let divisores = [];
if (numero % 2 === 0) {
  divisores.push(2);
}
if (numero % 3 === 0) {
  divisores.push(3);
}
if (numero % 5 === 0) {
  divisores.push(5);
}
if (numero % 7 === 0) {
  divisores.push(7);
}
if (divisores.length === 0) {
  alert(numero + " no es divisible por 2, 3, 5 o 7.");
} else {
  alert(numero + " es divisible por " + divisores.join(", "));
}

// COMENCÉ A ESCRIBIR COMO EN EL EJERCICIO 10 TODAS LAS COMBINACIONES POSIBLES PERO ERAN MUCHAS, ERGO, CHAT GPT ME DA UN SOLUCION QUE NO ES LA QUE CORRESPONDE. NO ME PEGUEN. SOY LIMITADITO.