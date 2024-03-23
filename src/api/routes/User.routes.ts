import express from 'express';
import asyncify from 'express-asyncify';
import { UserController } from '../../controllers/User/User.controller';

const userController = new UserController();
export const userRouter = asyncify(express.Router());

userRouter
    .route('/api/v1/users')
    .post(userController.createUser);