import express from 'express'

//expressjs.com
// Express es un framework minimalista de Node.js que facilita crear servidores HTTP.
// Inicializamos la aplicación de Express
const app = express()
//estoy ejecutando directamente express y creando un servidor (app)
//creo algo mas que un servidor pero de todo se encarga express

// app es nuestra "aplicación servidor".
// Express encapsula un servidor HTTP nativo y le agrega helpers y middlewares.



// Callback activado solo para la ruta GET '/mensaje'
// Definimos una ruta simple que responde con un texto
app.get('/mensaje', (req, res) => {
 res.send('Hola soy un servidor express en nodejs')
})


// app.listen arranca el servidor en el puerto indicado
// Es equivalente al server.listen() que usamos con http nativo
const PORT = 8080
const server = app.listen(PORT, () => console.log(`servidor express escuchando en http://localhost:${PORT}`))

server.on('error', error => console.log(`error en el servidor express: ${error.message}`))