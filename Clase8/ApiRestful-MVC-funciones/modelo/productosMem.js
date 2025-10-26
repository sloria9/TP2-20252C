const productos = [
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


const obtenerProductos = () => productos

const obtenerProducto = id => {
    const producto = productos.find(p => p.id == id)
    return producto || {}
}

const guardarProducto = producto => {
    producto.id = String(parseInt(productos[productos.length-1]?.id || 0) + 1) // ?. optional chaining
    productos.push(producto)
    return producto
}

const actualizarProducto = (id, producto) => {
  producto.id = id

  const index = productos.findIndex(p => p.id == id)
  const productoAnt = productos[index]
  const productoAct = {...productoAnt, ...producto}

  productos.splice(index,1,productoAct)

  return productoAct
}

const borrarProducto = id => {
  const index = productos.findIndex(p => p.id == id)
  const producto = productos.splice(index,1)[0]

  return producto
}


export default {
    obtenerProductos,
    obtenerProducto,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}
