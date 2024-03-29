import { ListRelation } from "./ListRelation.entity"

export interface AttendanceList {
    id:string,
    attendanceDate:string
    courseId:string,
    students:ListRelation[]
}