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

//unificar getall y getById
app.get('/api/productos{/:id}', (req,res) => {
    //const { id } = req.query        // query params
    const { id } = req.params         // route params
    console.log(id)

    const producto = productos.find(p => p.id == id)
    console.log(producto)

    res.json(producto || {})  // || -> short circuit operator
})

// PUT - actualizacion de informacion
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//app.put('/api/productos/:id', (req,res) => {
   // const { id } = req.params // route params (id pasado)
    //const producto = req.body //recupero los cambios (json enviado)     

    //const indexProducto = productos.findIndex( p => p.id == id) //cuando encuentra producto con ese id devuelve true y recupera el index

  //metodo splice
  //productos.splice(indexProducto, 1, producto)

  //res.send(producto)
//})


// PUT - actualizacion de informacion PARCIAL
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
app.put('/api/productos/:id', (req,res) => {
    const { id } = req.params // route params (id pasado)
    const producto = req.body //recupero los cambios (json enviado)     

    const indexProducto = productos.findIndex( p => p.id == id) //cuando encuentra producto con ese id devuelve true y recupera el index
  const productoAnt = productos[indexProducto]

  const productoActual = {  ...productoAnt, ...producto  } //spread operator me duplico el producto original y lo guardo en una variable
  //OBJECT MERGE
  
  //metodo splice
  productos.splice(indexProducto, 1, productoActual)

  res.json(productoActual)
})


// DELETE
app.delete('/api/productos/:id', (req, res) => {
  const {id} = req.params
  const indexProducto = productos.findIndex( p => p.id == id) 

    const productoAnt = productos[indexProducto]

  const borrado = productos.splice(indexProducto, 1)[0] //splice retorna siempre lo borrado

  res.json(borrado)

})


const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

