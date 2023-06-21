"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        msg: "Get Products",
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "Get Product",
        /*  id: req.params.id */
        /* id: id */
        id,
    });
};
exports.getProduct = getProduct;
const deleteProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "Delete Product",
        /*  id: req.params.id */
        /* id: id */
        id,
    });
};
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => {
    const { body } = req;
    console.log(body); //Si no se parsea el body en el server.ts me devuelve undefined.
    res.json({
        msg: "Post Product",
        /* body: req.body */
        /* body: body */
        body,
    });
};
exports.postProduct = postProduct;
const updateProduct = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    //console.log(body) //Si no se parsea el body en el server.ts me devuelve undefined.
    res.json({
        msg: "Update Product",
        /*  id: req.params.id */
        /* id: id */
        id,
        /* body: req.body */
        /* body: body */
        body,
    });
};
exports.updateProduct = updateProduct;
