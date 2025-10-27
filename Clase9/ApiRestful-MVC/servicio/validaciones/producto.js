//https://www.npmjs.com/package/joi
//https://joi.dev/
//https://joi.dev/api/?v=17.13.3

import Joi from "joi"

export const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().alphanum().required(),
        precio: Joi.number().min(0).max(1000000).required(),
        stock: Joi.number().integer().min(0).max(999).required()
    })

    const { error } = productoSchema.validate(producto)
    if(error) {
        return { result: false, error }
    }
    return { result: true }
}

