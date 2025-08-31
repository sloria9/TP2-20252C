console.log('Inicio del programa')


/**CODIGO SINCRONICO 
 * 
const powSync =(base, exponente) => {
    for(let i=0; i<3e9; i++) {} //simula una tarea pesada - bloqueante
    return base ** exponente
}

/** ejemplo de codigo sincornico 
 * el codigo se ejecuta de arriba hacia abajo
 * y cada linea espera a que la anterior termine

let resultado = powSync (2,2)
console.log(resultado)
resultado = powSync (resultado,2)
console.log(resultado)

resultado = powSync (resultado,2)
console.log(resultado)

resultado = powSync (resultado,2)
console.log(resultado)

resultado = powSync (resultado,2)
*/

/** ASYNC CON CALLBACK */

//el argumento callback se va a ejecutar 
//funcion que declaro, paso como parametro de otra funcion
//y se ejecuta dentro de esa funcion

const powAsyncCallback =(base, exponente, callback) => { //retardo no bloqueante
    setTimeout(() => {
        callback(base ** exponente)
    }, 2000)
}

// Uso encadenado con callbacks anidados
powAsyncCallback(2, 2, (resultado1) => {
    console.log('Resultado 1:', resultado1);

    powAsyncCallback(resultado1, 2, (resultado2) => {
        console.log('Resultado 2:', resultado2);

        powAsyncCallback(resultado2, 2, (resultado3) => {
            console.log('Resultado 3:', resultado3);

            powAsyncCallback(resultado3, 2, (resultado4) => {
                console.log('Resultado 4:', resultado4);
            });
        });
    });
});
//este ejemplo es dificil de leer y mantener, por eso se usan las promesas
// las promesas permiten encadenar de manera mas sencilla las operaciones asincronas

console.log('otras tareas')

console.log('Fin')
