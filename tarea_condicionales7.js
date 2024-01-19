/** Ejercicio 7
 *
 * Realizar un programa que reciba como parametro una categoria de peliculas
 *
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 *
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 *
 * Consideraciones: utilizar la estructura switch
 */

function dameCategorias(categoria) {
  switch (categoria.toLowerCase()) {
    case "accion":
      console.log(categoria + " " + "matrix");
      break;
    case "drama":
      console.log(categoria + " " + "the room");
      break;
    case "comedia":
      console.log(categoria + " " + "legalmente rubia");
      break;
    case "romance":
      console.log(categoria + " " + "diario de una pasion");
      break;
    case "suspenso":
      console.log(categoria + " " + "la bruja");
      break;
    case "terror":
      console.log(categoria + " " + "saw");
    default:
      console.log("La categoria no existe");
  }
}
dameCategorias("kdrama");
