import express from 'express';
import asyncify from 'express-asyncify';
import { CourseRelationToStudentController } from '../controllers/CourseRelation/CourseRelation.controller';

const enrollStudentToCourse = new CourseRelationToStudentController();
export const enrollmentRouter = asyncify(express.Router());


enrollmentRouter
    .route('/api/v1/enrollment')
    .post(enrollStudentToCourse.enrollStudentToCourse)
    .get(enrollStudentToCourse.getCourseRelationIds)

enrollmentRouter
    .route('/api/v1/enrollment/:id')
    .get(enrollStudentToCourse.getSingleCourseRelation)
    .delete(enrollStudentToCourse.removeStudentToCourse);

enrollmentRouter
    .route('/api/v1/courseRelation')
    .get(enrollStudentToCourse.getAllCourseRelations)