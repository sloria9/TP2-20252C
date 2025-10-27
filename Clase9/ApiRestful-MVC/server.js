import express from 'express'
import RouterProductos from './router/productos.js';

class Server {
    #port = null
    #routerProductos = null

    constructor(port) {
        this.#port = port
        this.#routerProductos = new RouterProductos().config()
    }

    start() {
        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({extends: true}))

        // Servicio de recursos estáticos (recursos del frontend)
        app.use(express.static('public'))

        /* ----------------------------------- */
        /*        API RESTful: productos       */
        /* ----------------------------------- */
        app.use('/api/productos', this.#routerProductos)

        const server = app.listen(this.#port, () => console.log(`Servidor express escuchando en http://localhost:${this.#port}`))
        server.on('error', error => console.log(`Error en servidor: ${error.message}`))
    }
}

export default Server

