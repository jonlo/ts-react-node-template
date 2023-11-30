
import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

//Validate a set of rules
export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const errorsMsg = errors.array().map((err) => err.msg);
    return res.status(400).send(errorsMsg.join(', '));
};