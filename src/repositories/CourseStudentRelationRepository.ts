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

    async getCourseRelationId(courseId: string, studentId: number): Promise<string> {
        const relationId = await prisma.courseStudent.findUniqueOrThrow({
            where:{
                id:
                courseId,
                studentId
            }
        })
        await prisma.$disconnect();
        return relationId.id;
    }

    async getCourseRelation(id: string): Promise<CourseRelation> {
        const relations = await prisma.courseStudent.findUniqueOrThrow({
            where:{id}
        })
        await prisma.$disconnect();
        return relations;
    }

    async deleteCourseRelation(id: string): Promise<void> {
        await prisma.courseStudent.delete({
            where:{id}
        })
        await prisma.$disconnect();
    }

}