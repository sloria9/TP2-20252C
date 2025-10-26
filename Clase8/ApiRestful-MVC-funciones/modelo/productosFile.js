import fs from 'fs'

const nombreArchivo = 'productos.json'

const leerArchivo = nombre => {
  let productos = []
  try {
    productos = JSON.parse(fs.readFileSync(nombre, 'utf-8'))
    return productos
  }
  catch {}

  return productos
}

const escribirArchivo = (nombre, productos) => {
  fs.writeFileSync(nombre, JSON.stringify(productos, null, '\t'))
}

const obtenerProductos = () => leerArchivo(nombreArchivo)

const obtenerProducto = id => {
    const productos = leerArchivo(nombreArchivo)
    const producto = productos.find(p => p.id == id)
    return producto || {}
}

const guardarProducto = producto => {
    const productos = leerArchivo(nombreArchivo)
    producto.id = String(parseInt(productos[productos.length-1]?.id || 0) + 1) // ?. optional chaining
    productos.push(producto)
    escribirArchivo(nombreArchivo, productos)

    return producto
}

const actualizarProducto = (id, producto) => {
  producto.id = id

  const productos = leerArchivo(nombreArchivo)
  const index = productos.findIndex(p => p.id == id)
  const productoAnt = productos[index]
  const productoAct = {...productoAnt, ...producto}

  productos.splice(index,1,productoAct)
  escribirArchivo(nombreArchivo, productos)

  return productoAct
}

const borrarProducto = id => {
  const productos = leerArchivo(nombreArchivo)
  const index = productos.findIndex(p => p.id == id)
  const producto = productos.splice(index,1)[0]
  escribirArchivo(nombreArchivo, productos)

  return producto
}


export default {
    obtenerProductos,
    obtenerProducto,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}
