import { NextFunction, Request, Response } from "express";
import { ValidationError } from "express-validation";




export const wrapValidationHelper = (err: any, req: Request, res: Response, next: NextFunction) => {    

    if (err instanceof ValidationError) {
        console.log('asdasd');
        
        let messages: string[] = [];
        let finalMessage = '';
        if (err.details.body) {
            messages = err.details.body?.map(e => e.message);
        }
        if (err.details.query) {
            messages = err.details.query?.map(e => e.message);
        }
        messages?.forEach(element => {
            finalMessage += element;
        });
        return res.status(500).send({'msg':finalMessage})
    }
    return res.status(500).json(err)
};