import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/User.routes';
import { schoolRouter } from './routes/School.routes';
import { courseRouter } from './routes/Course.routes';
import { studentRouter } from './routes/Student.routes';
import { attendanceListRouter } from './routes/AttendanceLists.routes';
import { enrollmentRouter } from './routes/CourseEnrollment.routes';
import { classAttendanceRouter } from './routes/ClassAttendance.routes';

const serverHost:string = String(process.env.FRONT_END_HOST);

const allowedOrigins = ['http://localhost:5173', serverHost];

const app = express();
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Set up CORS options
const corsOptions = {
  origin: allowedOrigins
};
app.use(cors(corsOptions));

app.get("/api/v1", (_req, res) => res.send("API Gestao de Frequencia Online"));

// TODO - routes

app.use(userRouter);
app.use(schoolRouter);
app.use(courseRouter);
app.use(studentRouter);
app.use(attendanceListRouter);
app.use(enrollmentRouter);
app.use(classAttendanceRouter)

export { app };