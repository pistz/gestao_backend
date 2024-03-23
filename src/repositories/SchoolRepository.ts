import { createSchoolDTO } from "../domain/dto/Schools/createSchoolDTO";
import { School } from "../domain/entities/School.entity";
import { ISchoolRepository } from "../domain/interfaces/repositories/ISchool";
import { prisma } from "../prismaClient/PrismaClient";

export class SchoolRepository implements ISchoolRepository{
    get(id: string): Promise<void | null> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<School[]> {
        throw new Error("Method not implemented.");
    }
    async createSchool(createSchool: createSchoolDTO): Promise<void> {
        const result = await prisma.school.create({
            data:{
                schoolName:createSchool.schoolName
            }
        })
    }

}