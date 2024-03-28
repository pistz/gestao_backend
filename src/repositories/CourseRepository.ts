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
    
    async getCourse(id: string): Promise<Course> {
        const result = await prisma.course.findUniqueOrThrow({
            where:{id},
            include:{school:true}
        })
        await prisma.$disconnect();
        return <Course>{id:result.id,
            name:result.name, 
            startingYear:result.startingYear, 
            school:{
                id:result.school.id, 
                schoolName:result.school.schoolName
            }
        }
    }

    async getAllCourses(): Promise<Course[]> {
        const result = await prisma.course.findMany({
            include:{school:true}
        });
        await prisma.$disconnect();
        return [...result] as Course[];
    }

    async deleteCourse(id: string): Promise<void> {
        await prisma.course.delete({
            where:{id}
        })
        await prisma.$disconnect();
    }

    updateCourse(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}