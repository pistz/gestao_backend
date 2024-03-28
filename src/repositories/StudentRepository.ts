import { createStudentsDTO } from "../domain/dto/Students/createStudentsDTO";
import { updateStudentDTO } from "../domain/dto/Students/updateStudentDTO";
import { Student } from "../domain/entities/Student.entity";
import { IStudentRepository } from "../domain/interfaces/repositories/IStudentRepository";
import { prisma } from "../utils/prismaClient/PrismaClient";

export class StudentRepository implements IStudentRepository{

    async createStudent(student: createStudentsDTO): Promise<void> {
        await prisma.students.create({
            data:{
                firstName:student.firstName,
                lastName:student.lastName,
                email:student.email,
                schoolId:student.schoolId,
            }
        })
        await prisma.$disconnect();
    }

    async getStudent(id: number): Promise<Student> {
        const student = await prisma.students.findUniqueOrThrow({
            where:{id},
            include:{school:true, courses:true, attendances:true}
        })
        await prisma.$disconnect();
        return student as Student
    }

    async getAllStudents(): Promise<Student[]> {
        const students = await prisma.students.findMany();
        await prisma.$disconnect();
        return [...students] as Student[]
    }

    async getStudentByEmail(email: string): Promise<Student> {
        const student = await prisma.students.findUniqueOrThrow({
            where:{email}
        })
        await prisma.$disconnect();
        return <Student>{id:student.id, firstName:student.firstName, lastName:student.lastName, email:student.email, schoolId:student.schoolId}
    }

    async deleteStudent(id: number): Promise<void> {
        await prisma.students.delete({
            where:{id}
        });
        await prisma.$disconnect();
    }

    async updateStudent(student: updateStudentDTO): Promise<void> {
        await prisma.students.update({
            where:{id:student.id},
            data:{
                firstName:student.firstName,
                lastName:student.lastName,
                email:student.lastName,
                courses:{}
            }
        })
    }

}