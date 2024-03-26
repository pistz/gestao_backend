import express from 'express';
import asyncify from 'express-asyncify';
import { SchoolController } from '../../controllers/School/School.controller';

const schoolController = new SchoolController();
export const schoolRouter = asyncify(express.Router());

schoolRouter
    .route('/api/v1/school/:id')
    .get(schoolController.getSchool);

schoolRouter
    .route('/api/v1/school')
    .get(schoolController.getAllSchools)
    .post(schoolController.createSchool);

