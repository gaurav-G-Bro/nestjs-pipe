import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Request, Response, NextFunction} from "express";

function GlobalMiddleware(req:Request, res:Response, next:NextFunction){
  console.log("I am Global middleware");
  next();

}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(GlobalMiddleware);
  await app.listen(3000);
}
bootstrap();
