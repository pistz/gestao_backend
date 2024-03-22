import cors, { FastifyCorsOptions } from '@fastify/cors'
import Fastify from 'fastify';

const allowedOrigins = ['http://localhost:5173'];

const options:FastifyCorsOptions = {
    origin:allowedOrigins
};

const api = Fastify();

api.register(cors, options);


//TODO- rotas
api.get("/", async (_request, reply)=>{
    return reply.send({message:"gestao frequencia"});
});

api.get("/api/v1", (_request, reply)=> reply.send("API Gestao de Frequencia Online"));

export {api};