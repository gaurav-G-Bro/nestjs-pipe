import { NestMiddleware, Injectable } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class UsersMiddleware implements NestMiddleware {
    use(req : Request, res : Response, next : NextFunction){
        console.log("Private middleware 1");
        next();
    }
}
