import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/User.routes';
import { schoolRouter } from './routes/School.routes';
import { courseRouter } from './routes/Course.routes';
import { studentRouter } from './routes/Student.routes';
import { attendanceListRouter } from './routes/AttendanceLists.routes';
import { enrollmentRouter } from './routes/CourseEnrollment.routes';
import { classAttendanceRouter } from './routes/ClassAttendance.routes';

const frontEnd:string = String(process.env.FRONT_END_HOST);

const allowedOrigins = [frontEnd];

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


const corsOptions = {
  origin: allowedOrigins
};
app.use(cors(corsOptions));

app.get("/api/v1", (_req, res) => res.send("API Gestao de Frequencia Online"));

app.use(userRouter);
app.use(schoolRouter);
app.use(courseRouter);
app.use(studentRouter);
app.use(attendanceListRouter);
app.use(enrollmentRouter);
app.use(classAttendanceRouter)

export { app };