/** Ejercicio 6
 *
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 *
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 *
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 *
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 *
 * Consideraciones: utilizar la estructura switch
 */

/*
1.- palabra reservada switch
2. abrmos un parentesis para colocar parametro
3. abrir llaves que delimiten
*/

// El switch es como un selector de opciones

function calculadora(operacion, n1, n2) {
  switch (operacion.toLowerCase()) {
    case "suma":
      console.log(operacion + (n1 + n2));
      break;
    case "resta":
      console.log(operacion + " " + (n1 - n2));
      break;
    case "multiplicacion":
      console.log(operacion + n1 * n2);
      break;
    case "division":
      console.log(operacion + n1 / n2);
      break;
    default:
      console.log("La operacion y numeros elegidos no existen");
  }
}

calculadora("resta", 2, 25);
// default se agrega al final cuando el usuario ingresa un case que no está en la lista de casos, hace que arroje un mensaje. siempre va a estar incluido al final

//PRACTICANDO

//Vamos a crear una función simple que concatene dos nombres y devuelva un saludo:
/*
function nombres(nombre1, nombre2) {
  return `Hola, ${nombre1} y ${nombre2}`;
}

const saludofinal = nombres("fer", "gio");

console.log(saludofinal);
*/
