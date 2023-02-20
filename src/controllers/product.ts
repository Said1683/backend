import { Request, RequestHandler, Response } from 'express';
import { Datos } from '../models/product';

export const getProducts = async (req: Request, res: Response) => {

    const listProducts = await Datos.findAll();

    res.json(listProducts)
}

// Guardarmos en nuevo registro en la base de datos
export const newregistrer = async (req: Request, res: Response) => {
    const { id, UserID, UserName, Date, PunchIn, PunchOut } = req.body;
    res.json('req.body')
    await Datos.create({
        UserID, UserName, Date, PunchIn, PunchOut
    })
}
// eliminamos registro en la base de datos
export const deleteRegitrer = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Datos.findByPk(id);

    if (!product) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    } else {
        await product.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito!'
        })
    }
}
// actualizamos registro en la base de datos
export const updateRegistrer = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    console.log(body);
    const product = await Datos.findByPk(id);
    console.log(product)

    if (product) {
        await product.update(body);
        res.json({
            msg: 'El producto fue actualizado con exito'
        })
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }
}


export const getDatos = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Datos.findByPk(id);

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }
}



export const updateRegistresr: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    console.log(data)
    await Datos.update({ ...req.body }, { where: { id } });
    const updatedTodos = await Datos.findByPk(id);
    return res
        .status(200)
        .json({ message: "Todo updated successfully", data: updatedTodos });
};
