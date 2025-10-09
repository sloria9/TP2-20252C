import express from 'express'
import router from './router/productos.js';

const app = express()
app.use(express.json())


/* ----------------------------------- */
/*        API RESTful: productos       */
/* ----------------------------------- */
app.use('/api/productos', router)
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

