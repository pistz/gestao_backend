import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/User.routes';
import { schoolRouter } from './routes/School.routes';

const allowedOrigins = ['http://localhost:5173'];

const app = express();
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Set up CORS options
const corsOptions = {
  origin: allowedOrigins
};

app.use(cors(corsOptions));

// TODO - routes
app.get("/api/v1", (_req, res) => res.send("API Gestao de Frequencia Online"));

// Use the userRoutes with the specified prefix
app.use(userRouter);
app.use(schoolRouter);

export { app };