/** Ejercicio 5
 *
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 *
 * Debe recibir como parametro un numero aleatorio
 *
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 *
 * Consideracion - Utilizar la estructura if-else
 */

function numeroAleatorio(num) {
  if (num % 4 === 0 || num % 9 === 0) {
    console.log(num + " verdadero");
  } else {
    console.log(num + " falso");
  }
}
numeroAleatorio(100);

// atajo  en VSC de la funcion flecha es: caf
//el nombre de la funcion no se puede repetir, pero lo que está dentro de la funcion como son variables, parametros, siempre y cuando estén dentro del scoop o dentro de la funcion porque solo vive ahi.

const numeroAleatorio2 = (num) => {
  respuesta = num % 4 === 0 || num % 9 === 0 ? `verdadero` : `falso`;
  console.log("El numero aleatorio2 es " + respuesta);
};

numeroAleatorio2(200);
