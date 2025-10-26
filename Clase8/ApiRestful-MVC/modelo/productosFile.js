import fs from 'fs'

class ModeloFile {
  #nombreArchivo = ''

  constructor() {
    this.#nombreArchivo = 'productos.json'
  }

  #leerArchivo = async nombre => {
    let productos = []
    try {
      productos = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
      return productos
    }
    catch {}

    return productos
  }

  #escribirArchivo = async (nombre, productos) => {
    await fs.promises.writeFile(nombre, JSON.stringify(productos, null, '\t'))
  }

  obtenerProductos = async () => await this.#leerArchivo(this.#nombreArchivo)

  obtenerProducto = async id => {
      const productos = await this.#leerArchivo(this.#nombreArchivo)
      const producto = productos.find(p => p.id == id)
      return producto || {}
  }

  guardarProducto = async producto => {
      const productos = await this.#leerArchivo(this.#nombreArchivo)
      producto.id = String(parseInt(productos[productos.length-1]?.id || 0) + 1) // ?. optional chaining
      productos.push(producto)
      await this.#escribirArchivo(this.#nombreArchivo, productos)

      return producto
  }

  actualizarProducto = async (id, producto) => {
    producto.id = id

    const productos = await this.#leerArchivo(this.#nombreArchivo)
    const index = productos.findIndex(p => p.id == id)
    const productoAnt = productos[index]
    const productoAct = {...productoAnt, ...producto}

    productos.splice(index,1,productoAct)
    await this.#escribirArchivo(this.#nombreArchivo, productos)

    return productoAct
  }

  borrarProducto = async id => {
    const productos = await this.#leerArchivo(this.#nombreArchivo)
    const index = productos.findIndex(p => p.id == id)
    const producto = productos.splice(index,1)[0]
    await this.#escribirArchivo(this.#nombreArchivo, productos)

    return producto
  }
}

export default ModeloFile