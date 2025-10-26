//import modelo from '../modelo/productosMem.js'
import modelo from '../modelo/productosFile.js'


const obtenerProductos = id => {
    if(id) {
      const producto = modelo.obtenerProducto(id)
      return producto
    }
    else {
      const productos = modelo.obtenerProductos()
      return productos
    }
}

const guardarProducto = producto => {
    const productoGuardado = modelo.guardarProducto(producto)
    return productoGuardado
}

const actualizarProducto = (id, producto) => {
  const productoActualizado = modelo.actualizarProducto(id, producto)
  return productoActualizado
}

const borrarProducto = id => {
  const productoEliminado = modelo.borrarProducto(id)
  return productoEliminado
}


export default {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}
