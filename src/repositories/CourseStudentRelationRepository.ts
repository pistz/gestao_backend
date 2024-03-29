import { Course } from "../domain/entities/Course.entity";
import { CourseRelation } from "../domain/entities/CourseRelation.entity";
import { ICourseRelation } from "../domain/interfaces/repositories/ICourseRelationRepository";
import { prisma } from "../utils/prismaClient/PrismaClient";
import { CourseRepository } from "./CourseRepository";

export class CourseRelationRepository implements ICourseRelation{

    async getCourseRelationId(courseId: string, studentId: number): Promise<CourseRelation> {
        const relationId = await prisma.courseStudent.findUniqueOrThrow({
            where:{
                id:
                courseId,
                studentId
            }
        })
        await prisma.$disconnect();
        return relationId;
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