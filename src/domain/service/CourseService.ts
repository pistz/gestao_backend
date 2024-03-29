import { CourseRepository } from "../../repositories/CourseRepository";
import { createCourseDTO } from "../dto/Courses/createCourseDTO";
import { Course } from "../entities/Course.entity";
import { ICourseService } from "../interfaces/services/ICourseService";
import { CreateCourseValidation } from "../validation/Course/createCourseValidation";
import { BaseService } from "./base/baseService";

export class CourseService extends BaseService implements ICourseService {

    private courseRepository:CourseRepository;

    constructor(courseRepository:CourseRepository){
        super();
        this.courseRepository = courseRepository;
    }

    async createCourse(course: createCourseDTO): Promise<void> {
        const validator = new CreateCourseValidation();
        const result = validator.validate(course);
        this.isValid(result);

        await this.courseRepository.createCourse(course);

    }

    async getCourse(id: string): Promise<Course> {
        return await this.courseRepository.getCourse(id);
    }

    async getAllCourses(): Promise<Course[]> {
        return await this.courseRepository.getAllCourses();
    }

    async deleteCourse(id: string): Promise<void> {
        await this.courseRepository.deleteCourse(id);
    }

    updateCourse(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}