import ModeloMem from '../modelo/productosMem.js'
import ModeloFile from '../modelo/productosFile.js'

import config from '../config.js'

class Servicio {
  #modelo = null
  constructor() {
    //this.#modelo = new ModeloMem()
    //this.#modelo = new ModeloFile()
    this.#modelo =  config.MODO_PERSISTENCIA == 'MEM'? new ModeloMem() : new ModeloFile()
  }

  obtenerProductos = async id => {
      if(id) {
        const producto = await this.#modelo.obtenerProducto(id)
        return producto
      }
      else {
        const productos = await this.#modelo.obtenerProductos()
        return productos
      }
  }

  guardarProducto = async producto => {
      const productoGuardado = await this.#modelo.guardarProducto(producto)
      return productoGuardado
  }

  actualizarProducto = async (id, producto) => {
    const productoActualizado = await this.#modelo.actualizarProducto(id, producto)
    return productoActualizado
  }

  borrarProducto = async id => {
    const productoEliminado = await this.#modelo.borrarProducto(id)
    return productoEliminado
  }
}

export default Servicio
