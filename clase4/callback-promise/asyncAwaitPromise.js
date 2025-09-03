console.log('Inicio del programa')

/** PROMISE */
//retornar lo que todavia no tengo
const powAsyncPromise = (base, exponente) => { //retardo no bloqueante
    return new Promise((resolve, reject) => {
        if(typeof base == 'number' && typeof exponente == 'number') {
            setTimeout(() => resolve(base ** exponente), 2000)
    }else{
        reject('Base o exponente no son numeros')
    }})
}

//cuando la promesa se resuelve, se ejecuta el then
powAsyncPromise(2,2)
.then( resultado => {
    console.log(resultado)
    return powAsyncPromise(resultado,2) //retorno otra promesa
}).then( resultado => {
    console.log(resultado)
    return powAsyncPromise(resultado,2) //retorno otra promesa
}).then( resultado => {
    console.log(resultado)
    return powAsyncPromise(resultado,2) //retorno otra promesa
}).then( resultado => {
    console.log(resultado)
}).catch( error => console.error('Error:', error) )
.finally( () => console.log('Fin de los calculos') ) //se ejecuta siempre

//mas mantenible que los callbacks anidados
//el reject me permite manejar errores


console.log('otras tareas')


powAsyncPromise(2,'y')
.then( resultado => {
    console.log(resultado)
    return powAsyncPromise(resultado,2) //retorno otra promesa
}).catch( error => console.error('Error:', error) )

//el catch captura cualquier error en la cadena de promesas, tenga una o mil
console.log('Fin')


////promesas async await
//sintaxis especial para trabajar con promesas
//solo se puede usar dentro de una funcion async    
//las funciones async devuelven una promesa

async function calcular() {

    try{

        let resultado = await powAsyncPromise(2,2)
        console.log(resultado)
        
        resultado = await powAsyncPromise(resultado,2)
        console.log(resultado)
        
        resultado = await powAsyncPromise(resultado,2)
        console.log(resultado)
        
        resultado = await powAsyncPromise(resultado,2)
        console.log(resultado)
    } catch(error){
        console.error('Error:', error)
    } finally {
        console.log('Fin de los calculos')
    }

}
//si no pusiera el await, resultado tendria la promesa y no el valor resuelto
//await hace que la ejecucion de la funcion async se pause hasta que la promesa se resuelva
//pero no bloquea el hilo principal, otras tareas pueden seguir ejecutandose
//la funcion async devuelve una promesa


calcular() //llamo a la funcion async

//la funcion async devuelve una promesa
//si la funcion async tiene un return, la promesa se resuelve con ese valor
//si la funcion async lanza un error, la promesa se rechaza con ese error
console.log('otras tareas')

/**powAsyncPromise(2,2)
.then( resultado => {
    console.log(resultado)
    return powAsyncPromise(resultado,2) //retorno otra promesa
}).then( resultado => {
    console.log(resultado)
    return powAsyncPromise(resultado,2) //retorno otra promesa
}).then( resultado => {
    console.log(resultado)
    return powAsyncPromise(resultado,2) //retorno otra promesa
}).then( resultado => {
    console.log(resultado)
}).catch( error => console.error('Error:', error) )
.finally( () => console.log('Fin de los calculos') ) //se ejecuta siempre
}
*/
