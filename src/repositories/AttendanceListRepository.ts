import { createListDTO } from "../domain/dto/Lists/createListDTO";
import { AttendanceList } from "../domain/entities/AttendanceList.entity";
import { IAttendanceListRepository } from "../domain/interfaces/repositories/IAttendanceListRepository";
import { prisma } from "../utils/prismaClient/PrismaClient";

export class AttendanceListRepository implements IAttendanceListRepository{

    async createList(list: createListDTO): Promise<void> {
        await prisma.attendanceList.create({
            data:{
                attendanceDate:list.attendanceDate,
                courseId:list.courseId
            }
        })
        await prisma.$disconnect();
    }   

    async getList(id: string): Promise<AttendanceList> {
        const list = await prisma.attendanceList.findUniqueOrThrow({
            where:{id},
            include:{students:true}
        })
        await prisma.$disconnect();
        return <AttendanceList>{
            id:list.id,
            attendanceDate:list.attendanceDate,
            courseId:list.courseId,
            students:list.students
        };
    }

    async getAllLists(): Promise<AttendanceList[]> {
        const listsData = await prisma.attendanceList.findMany({
            include:{
                students:true
            }
        });

        const lists:AttendanceList[] = listsData.map(listData =>({
            id: listData.id,
            attendanceDate: listData.attendanceDate,
            courseId: listData.courseId,
            students: listData.students,
        })) 
        await prisma.$disconnect();
        return lists;
    }

}