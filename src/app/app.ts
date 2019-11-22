import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

export class Aplication {

    private app: Application;
    private port?: number | string;

    constructor(port?: number | string) {
        this.port = port;
        this.app = express();
        this.Settings();
        this.Middleware();
        this.Routers();
    }

    private Settings(): void {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private Middleware(): void {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private Routers(): void { }

    async Run() {
        await this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor Corriendo en el Puerto ${this.app.get('port')}`)
        });
    }
}