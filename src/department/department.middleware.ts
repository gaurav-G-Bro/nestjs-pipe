import { NestMiddleware, Injectable } from "@nestjs/common";
import {Request, Response, NextFunction} from "express";

@Injectable()
export class DepartmentMiddleware implements NestMiddleware {
    use(req:Request, res:Response, next:NextFunction){
        console.log("I am from the department middleware");
        next();
    }
}
