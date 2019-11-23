import { Router } from 'express';
import { ApiControllers } from '../Controllers/api.Controller';

class ApiRouter {

    public router = Router();
    private apiController = new ApiControllers();

    constructor() {
        this.config();
    }

    private config() {
        this.router.get('/', this.apiController.index);
    }

}

const apiRouters = new ApiRouter();
export default apiRouters.router;