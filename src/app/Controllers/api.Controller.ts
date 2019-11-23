import { Request, Response } from 'express';

export class ApiControllers {

    public index(req: Request, res: Response) {
        res.status(200).json({ message: 'Bienbenido A la Api' });
    }
}