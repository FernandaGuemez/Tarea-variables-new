/** Ejercicio 4
 *
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 *
 * Debe recibir como parametro un numero, cual sea
 *
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 *
 *
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function numeroDivisible(numero) {
  if (numero % 8 === 0 && numero % 7 === 0) {
    console.log(numero + " es divisible entre 7 y 8");
  } else {
    console.log(numero + " no es divisible entre 7 y 8");
  }
}
// numeroDivisible(56);

const numeroDivisible2 = (numero) => {
  respuesta =
    numero % 8 === 0 && numero % 7 === 0 ? `es divisible` : `no es divisible`;

  console.log(respuesta);
};

numeroDivisible2(63);
