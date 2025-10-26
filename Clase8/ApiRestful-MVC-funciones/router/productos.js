import express from 'express'

import controlador from '../controlador/productos.js'

const router = express.Router()

router.get('{/:id}', controlador.obtenerProductos)
router.post('/', controlador.guardarProducto)
router.put('/:id', controlador.actualizarProducto)
router.delete('/:id', controlador.borrarProducto)

export default router