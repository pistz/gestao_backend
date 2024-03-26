import { Request, Response } from "express";
import { CourseRepository } from "../../repositories/CourseRepository";
import { CourseService } from "../../service/CourseService";
import { createCourseDTO } from "../../domain/dto/Courses/createCourseDTO";

export class CourseController {

    async createCourse(request:Request, response:Response){
        const courseRepository = new CourseRepository();
        const courseService = new CourseService(courseRepository);

        const newCourse:createCourseDTO = request.body;

        try {
            await courseService.createCourse(newCourse);
            response.status(201).json({ success: true, data: "Course Created" })
        } catch (error) {
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }

    async getCourse(request:Request, response:Response){
        const courseRepository = new CourseRepository();
        const courseService = new CourseService(courseRepository);

        const courseId = request.params.id;

        try {
            const course = await courseService.getCourse(courseId);
            response.json(course)
        } catch (error) {
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }

    async getAllCourses(request:Request, response:Response){
        const courseRepository = new CourseRepository();
        const courseService = new CourseService(courseRepository);

        try {
            const courses = await courseService.getAllCourses();
            response.json(courses);
        } catch (error) {
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }

    async deleteCourse(request:Request, response:Response){
        const courseRepository = new CourseRepository();
        const courseService = new CourseService(courseRepository);

        const courseId = request.params.id;

        try {
            await courseService.deleteCourse(courseId);
            response.status(200).json({ success: true, data: "Course deleted" })
        } catch (error) {
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }

    }
}