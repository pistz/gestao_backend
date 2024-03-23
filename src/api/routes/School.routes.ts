import express from 'express';
import asyncify from 'express-asyncify';
import { SchoolController } from '../../controllers/School/School.controller';

const schoolController = new SchoolController();
export const schoolRouter = asyncify(express.Router());

schoolRouter
    .route('/api/v1/school')
    .post(schoolController.createSchool);