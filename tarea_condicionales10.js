// /** Ejercicio 10
//  *
//  * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
//  * de descuento correcto
//  *
//  * Debe recibir como parametros el precio del producto
//  * y el codigo de descuento
//  *
//  * Sugerencia de codigo de descuento DESCUENTO10
//  *
//  * Consideracion: utilizar la estructura if-else
//  *

function calculaDescuento(precio, codigo) {
  let descuento = (precio * 10) / 100;
  if (codigo === "DESCUENTO10") {
    console.log("El descuento fue de: " + " $ " + descuento);
  } else {
    console.log("No aplica descuento");
  }
}

calculaDescuento(1000, "DESCUENTO10");
