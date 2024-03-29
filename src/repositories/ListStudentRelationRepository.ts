import { ListRelation } from "../domain/entities/ListRelation.entity";
import { IListRelation } from "../domain/interfaces/repositories/IListRelationRepository";
import { prisma } from "../utils/prismaClient/PrismaClient";

export class ListRelationRepository implements IListRelation{

    async getListRelationId(attendanceListId: string, studentId: string): Promise<ListRelation> {
        const relationId = await prisma.attendanceListStudent.findUniqueOrThrow({
            where:{
                id:
                studentId,
                attendanceListId,
            }
        })
        await prisma.$disconnect();
        return relationId;
    }
    async getListRelation(id: string): Promise<ListRelation> {
        const relations = await prisma.attendanceListStudent.findUniqueOrThrow({
            where:{id}
        })

        await prisma.$disconnect();
        return relations;
    }

}