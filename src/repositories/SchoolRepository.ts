import { createSchoolDTO } from "../domain/dto/Schools/createSchoolDTO";
import { School } from "../domain/entities/School.entity";
import { ISchoolRepository } from "../domain/interfaces/repositories/ISchoolRepository";
import { prisma } from "../utils/prismaClient/PrismaClient";

export class SchoolRepository implements ISchoolRepository{

    async get(id: string): Promise<School> {
        const result = await prisma.school.findUniqueOrThrow({
            where:{
                id
            },
            include:{courses:true}
        })
        await prisma.$disconnect();
        return result as School;
    }

    async getAll(): Promise<School[]> {
        const result = await prisma.school.findMany({
            include:{courses:true}
        });
        await prisma.$disconnect();
        return result.map((schools) => <School>{id:schools.id, schoolName:schools.schoolName});
    }

    async createSchool(createSchool: createSchoolDTO): Promise<void> {
        await prisma.school.create({
            data:{
                schoolName:createSchool.schoolName
            }
        })
        await prisma.$disconnect();
    }

}