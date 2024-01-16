/** Ejercicio 2
 *
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 *
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 *
 * Consideraciones: utilizar la estructura if-else
 *
 */
let calif1 = 8;
let calif2 = 5;
let calif3 = 9;
let calif4 = 5;

let resultadoPromedio = (calif1 + calif2 + calif3 + calif4) / 4;

respuesta = resultadoPromedio >= 7 ? `Aprobaado` : `Reprobado`;
console.log(respuesta);
