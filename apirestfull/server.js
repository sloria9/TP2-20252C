import express from 'express'

const app = express()

const productos = [
  {
    nombre: "Notebook Lenovo ThinkPad E14",
    precio: 950000,
    stock: 12
  },
  {
    nombre: "Monitor Samsung 24'' Full HD",
    precio: 180000,
    stock: 25
  },
  {
    nombre: "Teclado Mecánico Redragon Kumara",
    precio: 45000,
    stock: 40
  },
  {
    nombre: "Mouse Logitech G502 Hero",
    precio: 60000,
    stock: 30
  },
  {
    nombre: "Disco SSD Kingston 1TB NVMe",
    precio: 120000,
    stock: 15
  }
]


//ruta de prueba
app.get('/ping', (req, res) => {
  res.send('Hola Sofi, tu servidor Express está funcionando 🚀')
})

//rutas api restful productos
//getAll
app.get('/api/productos', (req, res) => {
    res.json(productos)
})


const PORT = 8080
app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`))

Server.on('Error', error => console.log(`error en el servidor express: ${error.message}`))