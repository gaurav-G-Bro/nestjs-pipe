
import {IsString, IsInt} from "class-validator";

export class DepartmentDto {
    @IsInt()
    id : number;

    @IsString()
    department : string;
}
