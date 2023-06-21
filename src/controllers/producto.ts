import { Request, Response } from "express"

export const getProducts = (req: Request, res: Response) => {
  res.json({
    msg: "Get Products",
  })
}

export const getProduct = (req: Request, res: Response) => {
  const { id } = req.params

  res.json({
    msg: "Get Product",
    /*  id: req.params.id */
    /* id: id */
    id,
  })
}

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.params

  res.json({
    msg: "Delete Product",
    /*  id: req.params.id */
    /* id: id */
    id,
  })
}

export const postProduct = (req: Request, res: Response) => {
  const { body } = req
  console.log(body) //Si no se parsea el body en el server.ts me devuelve undefined.

  res.json({
    msg: "Post Product",
    /* body: req.body */
    /* body: body */
    body,
  })
}

export const updateProduct = (req: Request, res: Response) => {
  const { body } = req
  const { id } = req.params
  //console.log(body) //Si no se parsea el body en el server.ts me devuelve undefined.

  res.json({
    msg: "Update Product",

    /*  id: req.params.id */
    /* id: id */
    id,
    /* body: req.body */
    /* body: body */
    body,
  })
}
