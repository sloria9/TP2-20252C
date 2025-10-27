//import ModeloMem from '../modelo/DAOs/productosMem.js'
//import ModeloFile from '../modelo/DAOs/productosFile.js'

import config from '../config.js'
import ModelFactory from '../modelo/DAOs/productosFactory.js'
import { validar } from './validaciones/producto.js'


class Servicio {
  #modelo = null
  constructor() {
    //this.#modelo = new ModeloMem()
    //this.#modelo = new ModeloFile()
    //this.#modelo =  config.MODO_PERSISTENCIA == 'MEM'? new ModeloMem() : new ModeloFile()
    this.#modelo = ModelFactory.get(config.MODO_PERSISTENCIA)
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
      const res =  validar(producto)
      if(res.result) {
        const productoGuardado = await this.#modelo.guardarProducto(producto)
        return productoGuardado
      }
      else {
        //console.log(res.error)
        throw new Error(res.error.details[0].message)
      }
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
