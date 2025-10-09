import modelo from '../model/productos.js'

// Pasarela al modelo (acá podrías agregar validaciones, reglas de negocio, etc.)
const obtenerProductos = (id) => {
  return modelo.obtenerProductos(id)
}

const guardarProducto = (producto) => {
  return modelo.guardarProducto(producto)
}

const actualizarProducto = (id, producto) => {
  return modelo.actualizarProducto(id, producto)
}

const borrarProducto = (id) => {
  return modelo.borrarProducto(id)
}

export default {
  obtenerProductos,
  guardarProducto,
  actualizarProducto,
  borrarProducto,
}
