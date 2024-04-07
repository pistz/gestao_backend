import express from 'express';
import asyncify from 'express-asyncify';
import { ListRelationController } from '../controllers/ListRelation/ListRelation.controller';

const listRelationController = new ListRelationController();
export const classAttendanceRouter = asyncify(express.Router());


classAttendanceRouter
    .route('/api/v1/attend')
    .post(listRelationController.attendToClass)
    .get(listRelationController.studentsAttendingToClass)

classAttendanceRouter
    .route('/api/v1/attend/:id')
    .get(listRelationController.getListRelation);

classAttendanceRouter
    .route('/api/v1/attendId')
    .get(listRelationController.getListRelationIds);

classAttendanceRouter
    .route('/api/v1/listRelation')
    .get(listRelationController.getAllListRelations);