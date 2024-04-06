import { CourseRelation } from "../domain/entities/CourseRelation.entity";
import { ICourseRelationRepository } from "../domain/interfaces/repositories/ICourseRelationRepository";
import { prisma } from "../utils/prismaClient/PrismaClient";

export class CourseRelationRepository implements ICourseRelationRepository{

    async createCourseRelation(courseId: string, studentId: number): Promise<void> {
        await prisma.courseStudent.create({
            data:{
                courseId,
                studentId
            }
        })
        await prisma.$disconnect();
    }

    async getCourseRelationIds(courseId: string, studentId: number): Promise<CourseRelation[]> {
        const relations = await prisma.courseStudent.findMany({
            where:{
                courseId,
                studentId
            }
        })
        await prisma.$disconnect();
        return [...relations] as CourseRelation[];
    }

    async getCourseRelation(id: string): Promise<CourseRelation> {
        const relation = await prisma.courseStudent.findUniqueOrThrow({
            where:{id}
        })
        await prisma.$disconnect();
        return relation;
    }

    async deleteCourseRelation(id: string): Promise<void> {
        await prisma.courseStudent.delete({
            where:{id}
        })
        await prisma.$disconnect();
    }

    async getAllCourseRelations(): Promise<CourseRelation[]> {
        const courseRelations = await prisma.courseStudent.findMany({
            include:{
                student:true,
                course:true,
            }
        });
        await prisma.$disconnect();
        
        return [...courseRelations] as CourseRelation[];
    }

}