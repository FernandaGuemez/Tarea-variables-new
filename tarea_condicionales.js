/** Ejercicio 1
 *
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 *
 * Debe recibir como parametro la edad
 *
 * Consideraciones: utilizar la estructura if-else
 */

let edad = 5;
//Condiciones if
if (edad > 18) {
  console.log("Tienes edad suficiente para votar");
} else {
  //es la negacion del if
  console.log("No tiene edad para votar, porque tienes " + edad);
}

function edadVotar(edad) {
  if (edad > 18) {
    console.log("Tienes edad suficiente para votar");
  } else {
    //es la negacion del if
    console.log("No tiene edad para votar");
  }
}
edadVotar(5);

const edadVotarFlecha = (edad) => {
  if (edad > 18) {
    console.log("Tienes edad suficiente para votar");
  } else {
    //es la negacion del if
    console.log("No tiene edad para votar");
  }
};
edadVotarFlecha(20);

// Condiciones ternarias: tiene 3 partes de una condicion
// condicion ? true : false;
let edad1 = 21;
let resultado1;

resultado1 =
  edad1 >= 21
    ? `Si tienes edad para votar en USA porque tienes ${edad1}`
    : `No tienes edad para votar porque tienes ${edad1}`;
console.log(resultado1);

function iNombrada(edad1) {
  resultado1 =
    edad1 >= 21
      ? `Si tienes edad para votar en USA porque tienes ${edad1}`
      : `No tienes edad para votar en USA porque tienes ${edad1}`;
  console.log(resultado1);
}
iNombrada(7);

const iFlecha = (edad1) => {
  resultado1 =
    edad1 >= 21
      ? `Si tienes edad para votar en USA porque tienes ${edad1}`
      : `No tienes edad para votar en USA porque tienes ${edad1}`;
  console.log(resultado1);
};

iFlecha(1);
