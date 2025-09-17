import express from 'express'


const callbackDefault = (req, res) => {
    const {method:metodo, url:ruta} = req  //object destructuring alias
    res.status(404).send(`La ruta ${metodo} ${ruta} no está implementada`)
}

//todas las peticiones pasaran x esta funcion
const middlewareGeneral = (req, res, next) => {
        const {url, method } = req  //object destructuring alias


    console.log('------- LOG -------')
    console.log('url:' , url)
    console.log('method:', method )
    console.log('------- LOG -------')


    next() //pasa el control al siguiente servicio
}

const middlewareParticular = (req, res, next) => {
        const {url, method } = req  //object destructuring alias


    console.log('------- LOG MIDDLEWARE PARTICULAR -------')

    next() //pasa el control al siguiente servicio
}


//expressjs.com
// Express es un framework minimalista de Node.js que facilita crear servidores HTTP.
// Inicializamos la aplicación de Express
const app = express()


app.use(middlewareGeneral)

app.use(express.static('public')) //configuro la carpeta donde van a estar los recursos staticos


//estoy ejecutando directamente express y creando un servidor (app)
//creo algo mas que un servidor pero de todo se encarga express

// app es nuestra "aplicación servidor".
// Express encapsula un servidor HTTP nativo y le agrega helpers y middlewares.



// Callback activado solo para la ruta GET '/mensaje'
// Definimos una ruta simple que responde con un texto
app.get('/mensaje', (req, res) => {
 res.send('Hola soy un servidor express en nodejs')
})

app.get('/fyh', middlewareParticular, (req, res) => {
  res.send(`<h2 style="color:green;">La fecha y hora actual es ${new Date().toLocaleString()}</h2>`)
})


app.use(callbackDefault)

// app.listen arranca el servidor en el puerto indicado
// Es equivalente al server.listen() que usamos con http nativo
const PORT = 8080
const server = app.listen(PORT, () => console.log(`servidor express escuchando en http://localhost:${PORT}`))

server.on('error', error => console.log(`error en el servidor express: ${error.message}`))