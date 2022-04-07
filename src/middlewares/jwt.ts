import { NextFunction, Request, Response } from "express";


export const jwtMiddleware = ( req:Request,res:Response, next:NextFunction )=>{
    try {
        const token = req.headers['authorization']
        if(token){
            next(); 
        }
        return res.status(401).json({'msg':'No token'});
    } catch (error) {
        return res.status(500).json({'msg':'Error X'});
    }
};