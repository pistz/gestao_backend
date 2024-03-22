import { FastifyInstance } from "fastify";
import { UserUseCase } from "../../useCases/User.useCase";
import { createUserDTO } from "../../domain/dto/Users/creatUserDTO";

export async function userRoutes(fastify:FastifyInstance){
    const userUseCase = new UserUseCase();

    fastify.post<{Body : createUserDTO}>('/api/v1', async (req, reply) =>{
        const dataBody:createUserDTO = req.body;
        try {
            const data = await userUseCase.createUser(dataBody);
            return reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    })
}