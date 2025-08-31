//const fs = require('fs'); //commonJs
//importa el modulo file system - es como importar una libreria en java o python
import fs from 'fs'; //ESModules //importacion moderna


console.log('Inicio del programa'); //ejecutar bajo node

//sentencias asincronicas

console.log('otras tareas...');

//levantar un archivo (el datos)
//leer o escribir el fileSystem en forma sincronica
//sincronico: bloquea el hilo de ejecucion hasta que termina la tarea


//js es multiparadigma, puedo trabajar con funciones clases o ambas
function readWriteFileSync() {
    //fs es un objeto que tiene metodos para trabajar con archivos
    const datos = fs.readFileSync('../datos.txt', 'utf-8'); //lectura del archivo
    //utf-8 es el formato de codificacion del archivo
    console.log('Read:' ,datos);
    fs.writeFileSync('./datos.txt', `${datos} - Modificado`); //escritura del archivo
    console.log('Archivo modificado:', datos);
}


readWriteFileSync();

//esto es sincronico porque tiene que esperar a que termine la lectura del archivo para poder escribir en el


/**
 * Manejo de temporizadores y timers dentro de node
 * 
setTimeout(() => {
    console.log('Tarea asincronica finalizada');
},5000) //se ejecuta despues de 5 segundos (luego de otrastareas)


const idTimer = setInterval(() => {
    console.log('Timer!!', new Date().toLocaleTimeString());
},3000)

setTimeout(() => {
    clearInterval(idTimer);
    console.log('Se detuvo el timer')
}, 15000)
*/