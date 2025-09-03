import fs from 'fs'

console.log('Inicio del programa')

//asincronica el wrapper de promesas
//promesa que envuelve a la funcion de callback
//la promesa se resuelve o rechaza segun el callback
//el resolve y reject son funciones que se pasan al callback
//y se llaman segun el resultado de la operacion asincronica
function readFilepromise(file){
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (error, datos) => {
        if(error) reject(error)
       else resolve(datos)
        })
    })
}

function writeFilepromise(file, datos){
    return new Promise((resolve, reject) => {
        fs.writeFile(file, datos, (error, datos) => {
        if(error) reject(error)
       else resolve()
        })
    })
}




async function readWriteFileASyncPromiseWrapper() {
    try {

        let datos = await readFilepromise('../datos.txt')
        console.log('Read antes:', datos)
            
        await writeFilepromise('../datos.txt', new Date().toLocaleString())
        console.log('Wr ok')
        
        datos = await readFilepromise('../datos.txt')
        console.log('Read después:', datos) 
    } catch (error) {
        console.error('Error el lectura/escritura:', error.message)
    }   
}

readWriteFileASyncPromiseWrapper();
console.log('otras tareas')

console.log('Fin')
