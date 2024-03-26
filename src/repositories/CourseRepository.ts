import { createCourseDTO } from "../domain/dto/Courses/createCourseDTO";
import { Course } from "../domain/entities/Course.entity";
import { ICourseRepository } from "../domain/interfaces/repositories/ICourseRepository";
import { prisma } from "../utils/prismaClient/PrismaClient";

export class CourseRepository implements ICourseRepository{

    async createCourse(course: createCourseDTO): Promise<void> {
        await prisma.course.create({
            data:{
                    name:course.name,
                    startingYear:course.startingYear,
                    schoolId:course.schoolId,
            }
        })
        await prisma.$disconnect();
    }
    
    getCourse(id: string): Promise<Course> {
        throw new Error("Method not implemented.");
    }
    getAllCourses(): Promise<Course[]> {
        throw new Error("Method not implemented.");
    }
    deleteCourse(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateCourse(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}