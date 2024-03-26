import { createCourseDTO } from "../../dto/Courses/createCourseDTO"
import { Course } from "../../entities/Course.entity"

export interface ICourseService {
    
    createCourse(course:createCourseDTO):Promise<void>

    getCourse(id:string):Promise<Course>

    getAllCourses():Promise<Course[]>

    deleteCourse(id:string):Promise<void>

    updateCourse(id:string):Promise<void>
}