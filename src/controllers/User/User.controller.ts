import { UserService } from "../../service/UserService";
import { UserRepository } from "../../repositories/UserRepository";
import { createUserDTO } from "../../domain/dto/Users/createUserDTO";
import { Request, Response } from 'express';

export class UserController {

    async createUser (request:Request, response:Response){
        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);

        const newUser:createUserDTO = request.body;

        try {
            const result = await userService.createUser(newUser);
            response.status(201).json({ success: true, data: result });
        } catch (err) {
            console.error(err);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}