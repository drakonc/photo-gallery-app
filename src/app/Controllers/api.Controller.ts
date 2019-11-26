import { Request, Response } from 'express';
import Photo from '../Models/Photo';
import fs from 'fs-extra';
import path from 'path';

export class ApiControllers {


    public async getPhotos(req: Request, res: Response): Promise<Response> {
        const photos = await Photo.find();
        return res.status(200).json(photos);
    }

    public async getPhoto(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const photo = await Photo.findById(id);
        return res.status(200).json(photo)

    }

    public async createPhoto(req: Request, res: Response): Promise<Response> {
        const { titulo, descripcion } = req.body;
        const newPhoto = {
            titulo: titulo,
            descripcion: descripcion,
            imagenPath: req.file.path
        }

        const photo = new Photo(newPhoto);
        await photo.save();
        return res.status(200).json(
            {
                message: 'Photo Guardada Correctamente',
                photo
            }
        );
    }

    public async updatePhoto(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { titulo, descripcion } = req.body;
        const upphoto = await Photo.findByIdAndUpdate(id, { titulo, descripcion }, { new: true });
        return res.status(200).json(
            {
                message: 'Photo Actualizada Correctamente',
                upphoto
            }
        );
    }

    public async deletePhoto(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const photo = await Photo.findByIdAndRemove(id);
        if (photo) {
            await fs.unlink(path.resolve(photo.imagenPath))
        }
        return res.status(200).json(
            {
                message: 'Photo Eliminada Correctamente',
                photo
            }
        );
    }
}