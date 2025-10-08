import express from 'express'

const productos = [
  {
    id: "2",
    nombre: "Monitor Samsung 24''",
    precio: 120000,
    stock: 20
  },
  {
    id: "3",
    nombre: "Teclado Mecánico Redragon",
    precio: 35000,
    stock: 35
  },
  {
    id: "4",
    nombre: "Mouse Gamer Logitech G502",
    precio: 42000,
    stock: 18
  },
  {
    id: "5",
    nombre: "Disco SSD Kingston 1TB",
    precio: 95000,
    stock: 25
  }
];


const app = express()

app.use(express.json())



// ---- ruta de prueba ----
app.get('/ping', (req,res) => {
    res.send('pong')
})

/* ----------------------------------- */
/*        API RESTful: productos       */
/* ----------------------------------- */

// GET ALL
app.get('/api/productos', (req,res) => {
    res.json(productos)
})

// GET por id
app.get('/api/productos/:id', (req,res) => {
    //const { id } = req.query        // query params
    const { id } = req.params         // route params
    console.log(id)

    const producto = productos.find(p => p.id == id)
    console.log(producto)

    res.json(producto || {})  // || -> short circuit operator
})

// POST
app.post('/api/productos', (req,res) => {
    const producto = req.body
    console.log(producto)

    producto.id = String(parseInt(productos[productos.length-1]?.id || 0) + 1) // ?. optional chaining
    productos.push(producto)

    res.json(producto)
})

// PUT

// DELETE



const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

