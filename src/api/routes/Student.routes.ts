import express from 'express';
import asyncify from 'express-asyncify';
import { StudentController } from '../../controllers/Student/Student.controller';

const studentController = new StudentController();
export const studentRouter = asyncify(express.Router());

studentRouter
    .route('/api/v1/students')
    .get(studentController.getAllStudents)
    .post(studentController.createStudent);

studentRouter
    .route('/api/v1/students/:id')
    .get(studentController.getStudentById);

studentRouter
    .route('/api/v1/students/:email')
    .get(studentController.getStudentByEmail);