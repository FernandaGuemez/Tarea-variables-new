//  *
//  * Desarrolla un programa que evalue si un numero es primo
//  *
//  * Debe recibir como parametro un numero aleatorio
//  *
//  * Consideraciones: utilizar la estructura if-else
//  *  para saber si es primo devemos saber cuantas divisiones enteras hacia abajo tiene ese numero si son 2 es primo
// * 2 numeros que sean divisbles es el mismo numero y el 1  2

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// i= 0,1,2,3,4..m

let numero = 17;
let contadorPrimos = 0;
for (let i = 7; i <= numero; i++) {
  //for (declaro variable que va a iterar i=2; luego es la condicion que te va a decir cuantas veces va a iterar i<= numeros; numero de pasos que va a sumar o restar  i++ o i--)
  if (numero % i === 0) {
    contadorPrimos++;
  }
}
if (contadorPrimos === 2) {
  console.log(numero + " si es # primo");
} else console.log(numero + " no es # primo");

//
//lo que está dentro de {} llaves es el inicio y final de la funcion
// lo que está dentro de () parentesis son los parametros de la funcion
// los [] corchetes solo sirven para los elementos de los arrays
