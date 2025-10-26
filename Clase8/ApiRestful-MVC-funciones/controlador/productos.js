import servicio from '../servicio/productos.js'

const obtenerProductos = (req,res) => {
    const { id } = req.params
    const productos = servicio.obtenerProductos(id)
    res.json(productos)
}

const guardarProducto = (req,res) => {
    const producto = req.body
    const productoGuardado = servicio.guardarProducto(producto)
    res.json(productoGuardado)
    //res.redirect('/')
}

const actualizarProducto = (req,res) => {
    const { id } = req.params
    const producto = req.body
    const productoActualizado = servicio.actualizarProducto(id,producto)
    res.json(productoActualizado)
}

const borrarProducto = (req,res) => {
    const { id } = req.params
    const productoEliminado = servicio.borrarProducto(id)
    res.json(productoEliminado)
}


export default {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}
