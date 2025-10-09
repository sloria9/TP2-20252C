import express from 'express'
import controlador  from '../controller/producto.js'

const router = express.Router()

//unificar getall y getById
router.get('{/:id}', controlador.obtenerProductos)

// POST
router.post('/', controlador.guardarProducto)

// PUT - actualizacion de informacion PARCIAL
router.put('/:id', controlador.actualizarProducto)

// DELETE
router.delete('/:id', controlador.borrarProducto)

export default router