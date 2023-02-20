import express, { Application } from 'express';
import cors from 'cors';
import routesProduct from '../routes/product';
import routesUser from '../routes/user';
import routesUploadExcel from '../routes/uploadExcel';
import { Datos } from './product';
import { User } from './user';

class Server {
    private app: Application;
    private port: string;
    //Inicialización del server y la coneccion a la bases de datos
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();

    }
    //Escuchando el puerto definido (port:3000)
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server corriendo en el puerto ' + this.port);
        })
    }
    //Rutas del API
    routes() {
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
        this.app.use('/api/upload', routesUploadExcel);
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors()); 
    }
    //conexion a la base de datos
    async dbConnect() { 
        try {
            await Datos.sync({ force: true });
            await User.sync();
        } catch (error) {
            console.error('No se puede conectar a la base de datos:', error);
        }
    }
}

export default Server;