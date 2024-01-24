/** Ejercicio 9
 *
 * Escribir en codigo un programa conversor de divisas
 *
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 *
 * 1. A dolares estadounidenses
 * 2. A euros
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 *
 * Consideracion: estructura switch
 *
 */

function convertidor(cantidad, conversion) {
  const tipoDeCambioDolares = 0.059;
  const tipoDeCambioEuros = 0.054;
  const tipoDeCambioYenes = 8.67;
  const tipoDeCambioLibra = 0.06;
  const tipoDeCambioFranco = 0.051;

  let resultado;

  switch (conversion) {
    case 1:
      resultado = cantidad * tipoDeCambioDolares;
      break;
    case 2:
      resultado = cantidad * tipoDeCambioEuros;
      break;
    case 3:
      resultado = cantidad * tipoDeCambioYenes;
      break;
    case 4:
      resultado = cantidad * tipoDeCambioLibra;
      break;
    case 5:
      resultado = cantidad * tipoDeCambioFranco;
      break;
    default:
      console.log("opcion incorrecta");
      return;
  }
  return resultado;
}

const resultadoConversion = convertidor(30, 5);

console.log(`Resultado de la conversión: ${resultadoConversion}`);
