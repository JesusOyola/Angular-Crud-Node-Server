"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_1 = require("../controllers/producto");
const router = (0, express_1.Router)();
router.get('/', producto_1.getProducts);
router.get('/:id', producto_1.getProduct);
router.delete('/:id', producto_1.deleteProduct);
router.post('/', producto_1.postProduct);
router.put('/:id', producto_1.updateProduct);
exports.default = router;
/*  Al hacer el export default cuando lo llame en archivo server.ts le puedo cambiar el nombre y usarlo con ese nombre. En este caso lo exporto con el nombre router y lo importo con el nombre routesProducto. */ 
