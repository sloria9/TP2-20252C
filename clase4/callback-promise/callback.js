console.log('Inicio del programa')


/**
 * Esta funcion realiza la lectura y escritura de un archivo de forma asincronica
 * utilizando callbacks para manejar las operaciones.
 * 
 * Se utiliza el modulo 'fs' de Node.js para las operaciones de archivo.
 * 
 * La funcion lee el contenido del archivo 'datos.txt', imprime su contenido,
 * escribe la fecha y hora actual en el mismo archivo, y luego vuelve a leer
 * el archivo para imprimir el nuevo contenido.
 * 
 * Se manejan los errores de lectura y escritura mediante bloques try/catch
 * y se imprimen mensajes de error en la consola si ocurren.
 */
function readWriteFileASync() {
    try {
      fs.readFile('.•/datos.txt', 'utf-8', (error, datos) => {
        if(error) throw new Error('Error en lectura asincrónica: ${error message}')
        console. log('Read antes:', datos)
            
            fs.writeFile('../datos.txt', new Date().toLocaleString(), (error) => {
                if(error) throw new Error(`Error en escritura asincrónica: ${error.message}`)
                console.log('Wr ok')

                fs.readFile('../datos.txt', 'utf-8', (error, datos) => {
                if(error) throw new Error(`Error en lectura asincrónica: ${error.message}`)
                console.log('Read después:', datos)
                })
            })
        })
    }

    /**
     * al estar anidado de esta forma permite que 
     * cada operacion espere a la anterior
     */
    catch (error) {
      console.error('Error capturado en bloque try/catch:', error.message)
    }   
}


readWriteFileASync();
console.log('otras tareas')

console.log('Fin')
