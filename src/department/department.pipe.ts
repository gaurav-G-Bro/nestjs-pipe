import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { DepartmentDto } from "./departmentDTO";


@Injectable()
export class DepartmentPipe implements PipeTransform {
    async transform(value : any, metadata : ArgumentMetadata){

        const obj = plainToInstance(DepartmentDto, value);
        const errors = await validate(obj);

        if(errors.length > 0){
            throw new BadRequestException("validation failed "+  JSON.stringify(errors));
        }
        return value;
    }
}
