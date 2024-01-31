import {Module, NestModule, MiddlewareConsumer} from "@nestjs/common";
import {UsersController} from "./users.controller";
import { UsersMiddleware } from "./users.middleware";
import { UsersPipe } from "./users.pipe";
import { UsersDto } from "./usersDTO";

@Module({
    imports : [],
    controllers : [UsersController],
    providers : [UsersMiddleware, UsersPipe, UsersDto],
    exports : []
})

export class UsersModule implements NestModule{ 
    configure(consumer : MiddlewareConsumer){
        consumer.apply(UsersMiddleware).forRoutes("/user");
    }
}
