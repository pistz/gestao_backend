import express from 'express';
import asyncify from 'express-asyncify';
import { CourseController } from '../controllers/Course/Course.controller';


const courseController = new CourseController();
export const courseRouter = asyncify(express.Router());

courseRouter
    .route('/api/v1/course')
    .get(courseController.getAllCourses)
    .post(courseController.createCourse);

courseRouter
    .route('/api/v1/course/:id')
    .get(courseController.getCourse)
    .delete(courseController.deleteCourse);
