class ModeloMem {
  #productos = []

  constructor() {
    this.#productos = [
      {
        id: "2",
        nombre: "Monitor Samsung 24''",
        precio: 120000,
        stock: 20
      },
      {
        id: "3",
        nombre: "Teclado Mecánico Redragon",
        precio: 35000,
        stock: 35
      },
      {
        id: "4",
        nombre: "Mouse Gamer Logitech G502",
        precio: 42000,
        stock: 18
      },
      {
        id: "5",
        nombre: "Disco SSD Kingston 1TB",
        precio: 95000,
        stock: 25
      }
    ];
  }

  obtenerProductos = async () => this.#productos

  obtenerProducto = async id => {
      const producto = this.#productos.find(p => p.id == id)
      return producto || {}
  }

  guardarProducto = async producto => {
      producto.id = String(parseInt(this.#productos[this.#productos.length-1]?.id || 0) + 1) // ?. optional chaining
      this.#productos.push(producto)
      return producto
  }

  actualizarProducto = async (id, producto) => {
    producto.id = id

    const index = this.#productos.findIndex(p => p.id == id)
    const productoAnt = this.#productos[index]
    const productoAct = {...productoAnt, ...producto}

    this.#productos.splice(index,1,productoAct)

    return productoAct
  }

  borrarProducto = async id => {
    const index = this.#productos.findIndex(p => p.id == id)
    const producto = this.#productos.splice(index,1)[0]

    return producto
  }
}

export default ModeloMem