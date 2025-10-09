import servicio from '../servicio/producto.js'


//funciones
//se comunica con el servicio, la logica esta ahi
const obtenerProductos = ((req,res) => {
    const { id } = req.params
    const response = servicio.obtenerProductos(id)
    res.json(response)
})

const guardarProducto = ((req,res) => {
    const producto = req.body
    const response = servicio.guardarProducto(producto)
    res.json(response)
})


const actualizarProducto = ((req,res) => {
    const { id } = req.params 
    const producto = req.body
    const response = servicio.actualizarProducto(id, producto)

  res.json(response)
})

const borrarProducto = ((req, res) => {
    const {id} = req.params
    const response = servicio.borrarProducto(id)
    res.json(response)
})

export default{
    obtenerProductos, guardarProducto, actualizarProducto, borrarProducto
}