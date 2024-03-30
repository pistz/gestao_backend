import { ListRelation } from "../domain/entities/ListRelation.entity";
import { IListRelationRepository } from "../domain/interfaces/repositories/IListRelationRepository";
import { prisma } from "../utils/prismaClient/PrismaClient";

export class ListRelationRepository implements IListRelationRepository{

    async createListRelation(attendanceListId: string, studentId: number): Promise<void> {
        await prisma.attendanceListStudent.create({
            data:{
                attendanceListId,
                studentId
            }
        })
    }

    async getListRelationId(attendanceListId: string, studentId: number): Promise<string> {

        const relationId = await prisma.attendanceListStudent.findUniqueOrThrow({
            where:{
                id:
                    attendanceListId,
                    studentId
            }
        })
        await prisma.$disconnect();
        return relationId.id;
    }
    async getListRelation(id: string): Promise<ListRelation> {
        const relations = await prisma.attendanceListStudent.findUniqueOrThrow({
            where:{id}
        })

        await prisma.$disconnect();
        return relations;
    }

}