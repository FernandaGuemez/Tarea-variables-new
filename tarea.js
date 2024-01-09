// Ejercicio para esta sesion

//Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
// Pueden variar entre las palabras reservadas var, let y const
//  -number
//  -string
//  -boolean


let numeroEdad = 33;
var anioDeNacimiento = 1990;
var numeroDeSobrinos = 4;
let numeroCalle = 43
let codigoPostal = 90310
let numeroTelefonico = 9999507421;
let numeroDeHermanos = 2;
var aniosEscalando = 10;
var cantidadDePlantas = 30;
let numerodeMascostas = 1;
var animalFavorito = "gato";
var deporteFavorito = "Escalada";
let nombreMama = "Matilde";
let apellidoPapa = "Guemez";
let apellidoMaterno = "Medina";
var ciudadDeNacimiento = "Merida";
let mesDeNacimiento = "septiembre";
let nombreAmigaFavorita = "Ina";
let comidaFavorita = "albondigas";
let musicoMasEscuchado = "fkj"
let tengoMascota = true;
var tengoSobrinos = true;
var tengoHijos = false;
let vehiculoPropio = true;
let tienesHermanas = false;
var estoyCasada = false;
var eresHijaUnica = false;
var tienesPerro = false;
var comesVerduras = true;
let hablasFrances = false;


// Declarar variables numericas y realizar las operaciones aritmeticas basicas
//      -suma
//      -resta
//      -multiplicacion
//      -division

let numero1 = 100;
let numero2 = 200;
let numero3 = 300;

let sumaTarea = numero1 + numero2 + numero3;

let restaTarea = numero2 - numero1

let multiplicacionTarea = numero1 * numero1

let divisionTarea = numero3 / numero1


// * Declarar variables que concatenen cadenas de texto
//      -5 mensajes diferentes en pantalla, sin limite de palabras.
 

// let saborDulce = "azucar"
// let aromaRico = "flores"
// let contenidoArcoiris = "muchos colores"
// console.log("La formula de las chicassuperpoderosas es:" + " " + saborDulce + " " + aromaRico + " " + "y" + " " + contenidoArcoiris);


// let estadoDeAnimo = "Feliz"
// let celebracionAnual = "navidad"
// let pensamiento = "prospero"
// let  celebracionAnual2 = "año nuevo"
// console.log( estadoDeAnimo + " " + celebracionAnual+ " " + "y un" + " " + pensamiento + " " + celebracionAnual2);


// let usuario = "Maria";
// let segundoNombre = "Fernanda";
// let apellidoUsuario = "Guemez";
// let apellidoMama = "Medina";
// console.log( usuario + " " + segundoNombre + " " + apellidoUsuario + " " + apellidoMama);

// console.log( "Mi comida favorita es:" + " " + comidaFavorita + " " + "y mi cantante favorito es:" + " " + musicoMasEscuchado);

// console.log( "Mi mama se llama" + " " + nombreMama + " " + "y mi mejor amiga se llama" + " " + nombreAmigaFavorita);

// * Declarar 5 variables y convertirlas a otro tipo de dato

let anioString = String (anioDeNacimiento); // de numero a string

let fechaNacimiento = "100990";   // de string a numero
let fechaNumber = Number (fechaNacimiento);

let  animalbooleano = Boolean (animalFavorito); // a booleano

let edadMascota = 2;
let edadMascotaString = String (edadMascota);

let numFavorito = "7";
let numFavNumber = Number (numFavorito)
// *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
// * Imprimir los resultados en pantalla con un console.log()




//////////////////////////////////////////////////////////////////////////
//FUNCIONES

// Ejercicios 
 
// Declara una funcion para cada problema planteado
 
//  * calcular el perimetro de un circulo

function perimetroCirculo(pi, d){
    console.log("El perimetro de un circulo es:" + pi * d)
} 

//  * calcular el area de un rectangulo
function areaRectangulo(b, a){
    console.log("El area de un rectangulo es: " + b * a)
}

//  * calcular el cuadrado de un numero
 function cuadradoNumero(x){
    console.log("El cuadrado del numero " + x + " es:" + (x * x))
 }

//  * calcular la conversion de grados celsius a farenheit
function celsiusAFarenheit(c){
    console.log(c + "°C" + " a Fahrenheit es: " + ((c * 9/5) + 32) + " °F" )
}

//  * calcular el valor del voltaje dadas la resistencia y la corriente
function voltajeCalculo(c, r){
    console.log("La formula para calcular el voltaje es corriente c por resistencia r: " + (c * r))
}
//  * calcular el volumen de una esfera
function volumenEsfera(r, pi){
    console.log("El volumen de una esfera es:" + (4/3) * ((pi)*(r*r*r)))
}
 
//  * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
//  * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 



////////////////////////////////////////////////////////////////////


/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

