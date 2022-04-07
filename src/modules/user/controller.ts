import { Request, Response } from "express";
import { UserModel, } from "./schema";



export const saveUser = async (req: Request, res: Response) => {
    try {
        const newUser = new UserModel({ ...req.body });
        await newUser.save()
        return res.send(newUser);
    } catch (error) {
        console.log('error-> ',error);
        res.statusCode = 500;
        return res.send({ "msg": "Error on saved user." })
    }
};