import express, { Application } from 'express';
import exphbs from "express-handlebars";
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import indexRouter from './Routes/index.Routes';
import apiRouter from './Routes/api.Routes';

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
        this.app.set("views", path.join(__dirname, "views"));
        this.app.engine(".hbs", exphbs({
            layoutsDir: path.join(this.app.get("views"), "layouts"),
            partialsDir: path.join(this.app.get("views"), "partials"),
            defaultLayout: "main",
            extname: ".hbs"
        }));
        this.app.set('view engine', '.hbs');
    }

    private Middleware(): void {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private Routers(): void {
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(indexRouter);
        this.app.use('/api', apiRouter)
    }

    async Run() {
        await this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor Corriendo en el Puerto ${this.app.get('port')}`)
        });
    }
}