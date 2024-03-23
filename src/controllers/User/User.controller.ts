import { UserService } from "../../service/UserService";
import { UserRepository } from "../../repositories/UserRepository";
import { createUserDTO } from "../../domain/dto/Users/createUserDTO";
import { Request, Response } from 'express';

export class UserController {

    async loginUser(request:Request, response:Response){
        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);

        const email = request.body.email
        const password = request.body.password;

        try {
            const logged = await userService.loginUser(email, password)
            response.json(logged);
        } catch (error) {
            response.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    }

    async getUser (request:Request, response:Response){
        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);

        const id = request.params.id;

        try {
            const user = await userService.get(id);
            response.json(user);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }

    }

    async getAllUsers (request:Request, response:Response){
        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);

        try {
            const users = await userService.getAll();
            response.json(users);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async createUser (request:Request, response:Response){
        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);

        const newUser:createUserDTO = request.body;

        try {
            const result = await userService.createUser(newUser);
            response.status(201).json({ success: true, data: result });
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async deleteUser (request:Request, response:Response){
        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);

        const id = request.params.id;

        try {
            await userService.deleteUser(id);
            response.status(200).json({ success: true, message: "Usuário apagado"  });
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
}