import { Request, Response } from 'express';
import Photo from '../Models/Photo';

export class ApiControllers {

    public getPhotos(req: Request, res: Response): Response {
        return res.status(200).send('Bienbenido A la Api');
    }

    public async createPhoto(req: Request, res: Response) {
        const { titulo, descripcion } = req.body;
        const newPhoto = {
            titulo: titulo,
            descripcion: descripcion,
            imagenPath: req.file.path
        }

        const photo = new Photo(newPhoto);
        console.log(photo)
        await photo.save();

        return res.status(200).json({ photo: photo })

    }
}