import express from 'express'
import routerProductos from './router/productos.js';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extends: true}))

// Servicio de recursos estáticos (recursos del frontend)
app.use(express.static('public'))

/* ----------------------------------- */
/*        API RESTful: productos       */
/* ----------------------------------- */
app.use('/api/productos', routerProductos)


const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

