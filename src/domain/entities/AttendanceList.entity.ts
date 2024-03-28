import { Course } from "./Course.entity"
import { Student } from "./Student.entity"

export interface AttendanceList {
    id:string,
    attendanceDate:Date
    courseId:Course,
    studentId:Student
}