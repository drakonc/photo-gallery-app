import { Request, Response } from 'express';

export class IndexControllers {

    public index(req: Request, res: Response) {
        res.status(200).render('index');
    }
}