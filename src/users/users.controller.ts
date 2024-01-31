import { Controller, Body, Get, Post, Param } from "@nestjs/common";
import { UsersDto } from "./usersDTO";
import { UsersPipe } from "./users.pipe";


const USER = [];
@Controller("/user")

export class UsersController {
    @Post("/add")
    addUser(@Body(new UsersPipe()) body : UsersDto){
        USER.push(body);
        console.log(USER);
        return "User added";
    }

    @Get("/get")
    getUser(){
        return USER;
    }

    @Get("/getsingle/:id")
    getSingle(@Param("id") id : UsersDto){
        console.log(typeof id);
        return USER.find((user)=> +user.id == +id);
    }
}


