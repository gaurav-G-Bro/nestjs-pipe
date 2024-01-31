import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersDto {
    id : number;
    name : string;
    age : number;
}
