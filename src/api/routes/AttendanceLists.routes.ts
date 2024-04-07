import express from 'express';
import asyncify from 'express-asyncify';
import { AttendanceListController } from '../controllers/AttendanceList/AttendanceList.controller';

const attendanceListController = new AttendanceListController();
export const attendanceListRouter = asyncify(express.Router());


attendanceListRouter
    .route('/api/v1/lists')
    .get(attendanceListController.getAllAttendancesLists)
    .post(attendanceListController.createAttendanceList);

attendanceListRouter
    .route('/api/v1/lists/:id')
    .get(attendanceListController.getAttendanceList)
    .delete(attendanceListController.deleteAttendanceList);

