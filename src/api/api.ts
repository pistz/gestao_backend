import Fastify from 'fastify';
import cors, { FastifyCorsOptions } from '@fastify/cors'
import { userRoutes } from './routes/User.routes';

const allowedOrigins = ['http://localhost:5173'];

const options:FastifyCorsOptions = {
    origin:allowedOrigins
};

const api = Fastify();

api.register(cors, options);

//TODO- rotas
api.get("/", async (_request, reply)=>{
    return reply.send({message:"gestao de frequencia online"});
});
api.get("/api/v1", (_request, reply)=> reply.send("API Gestao de Frequencia Online"));

api.register(userRoutes, {
    prefix:'/users',
});




export {api};