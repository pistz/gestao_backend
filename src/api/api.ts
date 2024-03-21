import express, {Request, Response} from 'express';
import cors from 'cors';
import exp from 'constants';

const allowedOrigins = ['http://localhost:5173'];

const options: cors.CorsOptions = {
    origin:allowedOrigins
};

const api = express();

api.use(cors(options));

api.use(express.json);

//TODO- rotas

api.get("/api/v1", (req:Request, res:Response)=> res.send("API Gestao de Frequencia Online"));

export {api};