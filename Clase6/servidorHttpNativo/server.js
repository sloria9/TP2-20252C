import http from 'http'
import fs from 'fs'


const server = http.createServer(async (req,res) => {
    //console.log(req)
    //console.log('req.url:', req.url)
    //console.log('req.method:', req.method)

    //const url = req.url
    //const method = req.method

    //const { url, method } = req     // Object destructuring
    //const { url:url, method:method } = req     // Object destructuring con alias
    //console.log(url, method)

    const { url:ruta, method:metodo } = req     // Object destructuring con alias
    console.log(ruta, metodo)

    if(metodo == 'GET') {
        if(ruta == '/') {
            //res.writeHead(200, { 'content-type' : 'text/html; charset=utf-8' })
            //res.end('<h1>Ruta Raíz</h1>')
            try {
                const page = await fs.promises.readFile('public/index.html')
                //console.log(page)
                res.writeHead(200, { 'content-type' : 'text/html' })
                res.end(page)
            }
            catch(error) {
                res.writeHead(404, { 'content-type' : 'text/plain' })
                res.end(error.message)
            }
        }
        else if(ruta == '/mensaje') {
            res.writeHead(200, { 'content-type' : 'text/html' })
            res.end('<h1>Hola soy un servidor Http</h1>')
        }
        else if(ruta == '/fyh') {
            res.writeHead(200, { 'content-type' : 'text/html' })
            res.end(`<h2 style="color:green;">La fecha y hora actual es ${new Date().toLocaleString()}</h2>`)
        }
        else {
            res.writeHead(404, { 'content-type' : 'text/plain' })
            res.end(`Ruta GET ${ruta} no fue encontrada`)
        }
    }
    else {
        res.writeHead(500, { 'content-type' : 'text/plain' })
        res.end(`La ruta ${metodo} ${ruta} no está implementada`)
    }
})


const PORT = 8080
server.listen(PORT, () => console.log(`Servidor Http escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))