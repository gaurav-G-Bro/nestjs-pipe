import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DepartmentController } from "./department.controller";
import { DepartmentDto } from "./departmentDTO";
import {DepartmentPipe} from "./department.pipe";
import {DepartmentMiddleware} from "./department.middleware";

@Module({
    imports : [],
    controllers : [DepartmentController],
    providers : [DepartmentDto, DepartmentPipe],
    exports : []
})

export class DepartmentModule implements NestModule{ 
    configure(consumer : MiddlewareConsumer){
        consumer.apply(DepartmentMiddleware).forRoutes("/department");
    }
}
