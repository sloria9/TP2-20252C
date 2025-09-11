import http from 'http'
import fs from 'fs'
import { readFile } from 'fs/promises';


//http es un objeto que estamos importando
//tiene metodos, en este caso vamos a usar el create server


//crea el servicio
//le paso un cb que se ejecuta cuando recibo una peticion


const server = http.createServer((req, res) =>{
    /**res.writeHead(200, {'content-type' : 'text/html'} )
    res.end('<h2>Hola soy un servidor Http</h2>')**/
    //console.log('req url:', req.url)
   // console.log('req method:',req.method)

   res.writeHead(200, {'content-type' : 'text/html'} )
   //const page = await fs.promises.readFile('/public/index.html')
    res.end(page)


    //res.end(`<h2>La fecha y hora actual es ${new Date().toLocaleString()}</h2>`)


})




//disponibilizo el server
const PORT = 8080   
server.listen(PORT, () => console.log(`Servidor HTTP escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`error en servidor:  ${error.message}`))