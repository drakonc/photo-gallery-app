import { Router } from 'express';
import { ApiControllers } from '../Controllers/api.Controller';
import multer from '../libs/multer';

class ApiRouter {

    public router = Router();
    private apiController = new ApiControllers();

    constructor() {
        this.config();
    }

    private config() {
        this.router.route('/photos')
            .get(this.apiController.getPhotos)
            .post(multer.single('image'), this.apiController.createPhoto);

        this.router.route('/photos/:id')
            .get(this.apiController.getPhoto)
            .delete(this.apiController.deletePhoto)
            .put(this.apiController.updatePhoto);
    }

}

const apiRouters = new ApiRouter();
export default apiRouters.router;