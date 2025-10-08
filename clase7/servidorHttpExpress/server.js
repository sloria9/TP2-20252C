//https://www.npmjs.com/package/express
//https://github.com/expressjs/express
//https://expressjs.com/
//https://expressjs.com/es/
//https://expressjs.com/es/5x/api.html
//https://expressjs.com/es/4x/api.html

import express from 'express'


const callbackDefault = (req,res) => {
    const {method:metodo, url:ruta} = req        // Object destructuring con alias
    //https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Status
    res.status(404).send(`La ruta ${metodo} ${ruta} no está implementada`)    
}

const middlewareGeneral = (req,res,next) => {
    const { url, method } = req

    console.log('---------- LOG ------------')
    console.log('url:', url)
    console.log('method:', method)
    console.log(Date.now(), new Date().toLocaleString())
    console.log('---------------------------')

    next()
    //res.send('Te respondí YO! (middlewareGeneral)')
}


const middlewareParticular = (req,res,next) => {
    console.log('**** middlewareParticular ****')

    console.log('req.query:', req.query)

    const { auth } = req.query
    if(auth == '1234') next()
    else res.send('No estás autorizado a ver la fecha y hora')

    //res.send('Te respondí YO! (middlewareParticular)')
}


//https://refactoring.guru/es/design-patterns/chain-of-responsibility
const app = express()

app.use(middlewareGeneral)

app.use(express.static('public'))       // middleware para servir los recursos estáticos desde la carpeta public

app.get('/mensaje', (req, res) => {
    res.send('<h1>Hola soy un servidor express en NodeJS</h1>')
})

app.get('/fyh', middlewareParticular, (req,res) => {
    res.send(`<h2 style="color:green;">La fecha y hora actual es ${new Date().toLocaleString()}</h2>`)    
})

app.use(callbackDefault)


const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor Http express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor express: ${error.message}`))

