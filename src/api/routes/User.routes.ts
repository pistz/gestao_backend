import { FastifyInstance } from "fastify";
import { UserService } from "../../service/UserService";
import { createUserDTO } from "../../domain/dto/Users/creatUserDTO";
import { UserRepository } from "../../repositories/UserRepository";

export async function userRoutes(fastify:FastifyInstance){
    const userRepository = new UserRepository()
    const userUseCase = new UserService(userRepository);

    fastify.post<{Body : createUserDTO}>('/', async (req, reply) =>{
        const dataBody:createUserDTO = req.body;
        try {
            const data = await userUseCase.createUser(dataBody);
            return reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    })
}