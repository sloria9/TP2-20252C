const productos = [ { id: "2", nombre: "Monitor Samsung 24''", precio: 120000, stock: 20 },
     { id: "3", nombre: "Teclado Mecánico Redragon", precio: 35000, stock: 35 },
     { id: "4", nombre: "Mouse Gamer Logitech G502", precio: 42000, stock: 18 },
     { id: "5", nombre: "Disco SSD Kingston 1TB", precio: 95000, stock: 25 } ];

// READ all / by id
const obtenerProductos = (id) => {
  if (!id) return productos
  return productos.find((p) => p.id == id) || null
}

// CREATE
const guardarProducto = (producto) => {
  const nuevo = { ...producto, id: nextId() }
  productos.push(nuevo)
  return nuevo
}

// UPDATE (merge parcial)
const actualizarProducto = (id, cambios) => {
  const idx = productos.findIndex((p) => p.id == id)
  if (idx === -1) return null

  const previo = productos[idx]
  const actualizado = { ...previo, ...cambios, id: previo.id } // no pisar id
  productos.splice(idx, 1, actualizado)
  return actualizado
}

// DELETE
const borrarProducto = (id) => {
  const idx = productos.findIndex((p) => p.id == id)
  if (idx === -1) return null
  const [borrado] = productos.splice(idx, 1)
  return borrado
}

export default {
  obtenerProductos,
  guardarProducto,
  actualizarProducto,
  borrarProducto,
}