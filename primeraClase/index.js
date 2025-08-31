
//Documentacion js / ECMNAS 
var a = 35
let b = 25
const c = a + b
console.log("Hola node.js")
console.log(c)

//let y const son de ECMAS 6, son variables de bloque
//var es una variable global, se puede usar en todo el codigo

//Tipado en JS/ESX (debil porque necesitaba ser rapido)

var nombre = "Juan"
console.log(nombre, typeof nombre)

//undefined es el tipo de dato que no tiene valor asignado
/**
 * es decir, si nombre no hubiera sido asignado a un valor,
 * el tipo de dato seria undefined
 */

nombre = -1253.5
console.log(nombre, typeof nombre) //cambie el tipo de dato a number


//Comparacion entre constructores de funciones en JS5 y ES6

//JS5
//no hace falta poner el tipo de dato solo el nombre de la variable
/*function sumar(a, b) {
    return a + b
}*/



//funcion anonima arrow function ES6
// como las funciones son un tipo de dato, se pueden asignar a variables
//let es mejor que var
let sumar = function (a, b) {
    return a + b
}

//contracara de esto: si yo pongo 
//sumar = 'Pepe'
//   al ser tipado debil, me tira error al ejecutar

var n1 = 17
var n2 = 5

var n4 = 36, n2 = 4 //se pueden declarar varias variables en una sola linea

//concatenacion de Strings
console.log('La suma de ' + n1 + ' + ' + n2 + ' = ' + sumar(n1, n2));

//Template String (ES6) - `` -> backticks
// esto es una forma de concatenar strings mas legible
console.log(`La suma de ${n1} + ${n2} = ${sumar(n1, n2)}`);



console.log(sumar, typeof sumar)


const dobleDe = a => a * 2 //funcion flecha (arrow function) de una sola linea
// si tiene una sola linea, no hace falta poner llaves ni return

const toUpper = str => {
    let tipo = typeof str
    if (tipo == 'string') {
        return str.toUpperCase()

    }else{
        return  `error: el valor de entrada '${str}' debe ser de tipo string y es del tipo ${tipo}`
    }
    
}


console.log(toUpper('hola'));
console.log(toUpper(25));
console.log(toUpper(true));


//Clases en ES6
//primera letra mayuscula, camelCase
class Timer{
    //constructor es un metodo especial que se ejecuta al crear una instancia de la clase
    constructor(cont){
        this.contador = cont //los atributos se crean implicitos o explicitos
    }

    getContador(){
        return this.contador
    }

    setTimer(ms){
        setInterval(() => {
           // console.log('Timer!');
          // console.log(++this.contador); //this hace referencia al objeto actual
        }, ms)
    }
}

const timer = new Timer(50)
const timer2 = new Timer(100)

const timer3 = new Timer(150)

//console.log(timer.getContador());
timer.setTimer(1000) //llama al metodo setTimer que imprime "Timer!" cada segundo

//console.log(timer2.getContador());
timer2.setTimer(3000) //llama al metodo setTimer que imprime "Timer!" cada segundo

//console.log(timer3.getContador());
timer3.setTimer(10000) //llama al metodo setTimer que imprime "Timer!" cada segundo
