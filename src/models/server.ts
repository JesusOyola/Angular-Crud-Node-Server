import express, { Application, Request, Response } from "express";
import cors from 'cors';
import routesProducto from "../routes/producto";
import db from "../db/connection";



class Server {
  private app: Application
  private port: number

  constructor() {
    this.app = express();
    this.port = parseInt((process as any).env.PORT) || 3001;
    this.listen();
    this.midlewares();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Aplicacción corriendo en el puerto ${this.port}`)
    })
  }

  routes() {
    this.app.get("/", (req: Request, res: Response) => {
        res.json({
            msg: "API Working"
        })
    })
    this.app.use('/api/productos', routesProducto)
  }

  midlewares(){
    /* Parseamos el body, para que lo pueda leer */ 
    this.app.use(express.json());
    
    //cors
    this.app.use(cors());

  }

  async dbConnect(){
    try {
      await db.authenticate();
    console.log("BASE DE DATOS CONECTADA")
    } catch (error) {
      console.log("Error al intentar conectarse a la base de datos")
      console.log(error)
    }
   
  }
}

export default Server
