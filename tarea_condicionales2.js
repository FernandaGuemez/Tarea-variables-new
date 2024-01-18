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

// condicion ternaria flecha

const resultadoFlecha = (calif1, calif2, calif3, calif4) => {
  let resultadoPromedio = (calif1 + calif2 + calif3 + calif4) / 4;

  respuesta = resultadoPromedio >= 7 ? `Aprobaado` : `Reprobado`;
  console.log(respuesta);
};

resultadoFlecha(5, 5, 10, 10);

// funcion nombrada

function resultadoNombrado(calif1, calif2, calif3, calif4) {
  let resultadoPromedio2 = (calif1 + calif2 + calif3 + calif4) / 4;
  if (resultadoPromedio2 >= 7) {
    console.log(
      "Aprobaste en la funcion nombrada usando if, con un promedio de: " +
        resultadoPromedio2
    );
  } else {
    console.log("Reprobaste en la funcion nombrada usando else");
  }
}
resultadoNombrado(6, 7, 7, 6);
