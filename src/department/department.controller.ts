import { Controller, Get, Body, Post } from "@nestjs/common";
import {DepartmentDto} from "./departmentDTO";
import { DepartmentPipe } from "./department.pipe";

@Controller("/department")
export class DepartmentController {
    @Get("/get")
    getDepartment(){
        return "I am from department section.";
    }

    @Post("/add")
    addDepartment(@Body(new DepartmentPipe()) body: DepartmentDto){
        return body;
    }
}

