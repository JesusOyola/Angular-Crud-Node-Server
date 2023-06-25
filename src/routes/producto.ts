import { Router } from "express";
import { deleteProduct, getProduct, getProducts, postProduct, updateProduct } from "../controllers/producto";
import validateToken from "./validate-token";

const router = Router();


router.get('/',validateToken,getProducts);
router.get('/:id',getProduct);
router.delete('/:id',deleteProduct);
router.post('/',postProduct);
router.put('/:id',updateProduct);



export default router;

/*  Al hacer el export default cuando lo llame en archivo server.ts le puedo cambiar el nombre y usarlo con ese nombre. En este caso lo exporto con el nombre router y lo importo con el nombre routesProducto. */