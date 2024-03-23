import express from 'express';
import asyncify from 'express-asyncify';
import { UserController } from '../../controllers/User/User.controller';

const userController = new UserController();
export const userRouter = asyncify(express.Router());

userRouter
    .route('/api/v1/users')
    .get(userController.getAllUsers)
    .post(userController.createUser);

userRouter
    .route('/api/v1/users/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser);

userRouter
    .route('/api/v1/login')
    .get(userController.loginUser);