import { Router } from 'express';
import { IndexControllers } from '../Controllers/index.Controller';

class IndexRouter {

    public router = Router();
    private indexController = new IndexControllers();

    constructor() {
        this.config();
    }

    private config() {
        this.router.get('/', this.indexController.index);
    }

}

const indexRouters = new IndexRouter();
export default indexRouters.router;