import { ListRelation } from "../domain/entities/ListRelation.entity";
import { IListRelationRepository } from "../domain/interfaces/repositories/IListRelationRepository";
import { prisma } from "../utils/prismaClient/PrismaClient";

export class ListRelationRepository implements IListRelationRepository{

    async getStudentsToList(attendanceListId: string): Promise<ListRelation[]> {
        const studentList = await prisma.attendanceListStudent.findMany({
            where:{attendanceListId}
        });
        await prisma.$disconnect();
        return [...studentList] as ListRelation[];
    }

    async createListRelation(attendanceListId: string, studentId: number): Promise<void> {
        await prisma.attendanceListStudent.create({
            data:{
                attendanceListId,
                studentId
            }
        });
        await prisma.$disconnect();
    }

    async getListRelationIds(attendanceListId: string, studentId: number): Promise<ListRelation[]> {

        const relationId = await prisma.attendanceListStudent.findMany({
            where:{
                    attendanceListId,
                    studentId
            }
        })
        await prisma.$disconnect();
        return [...relationId] as ListRelation[];
    }
    
    async getListRelation(id: string): Promise<ListRelation> {
        const relations = await prisma.attendanceListStudent.findUniqueOrThrow({
            where:{id},
            include:{attendanceList:{
                include:{Course:true}
            }}
        })

        await prisma.$disconnect();
        return relations;
    }



}