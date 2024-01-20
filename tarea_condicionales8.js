/* Ejercicio 8
 *
 * Crear una interfaz de un cajero ATM
 *
 * Debe recibirse como parametro alguna de las siguientes opciones
 *
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 *
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

function realizarAccion(opcion) {
  if (opcion === 1) {
    console.log("retirar dinero");
  } else if (opcion === 2) {
    console.log("hacer transferencia");
  } else if (opcion === 3) {
    console.log("deposito");
  } else if (opcion === 4) {
    console.log("pago de servicios");
  } else {
    console.log("Opcion no valida, escoja de nuevo");
  }
}

realizarAccion(1);
