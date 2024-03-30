import { createStudentsDTO } from "../domain/dto/Students/createStudentsDTO";
import { updateStudentDTO } from "../domain/dto/Students/updateStudentDTO";
import { Student } from "../domain/entities/Student.entity";
import { IStudentRepository } from "../domain/interfaces/repositories/IStudentRepository";
import { prisma } from "../utils/prismaClient/PrismaClient";

export class StudentRepository implements IStudentRepository{

    async createStudent(student: createStudentsDTO): Promise<void> {
        await prisma.student.create({
            data: {
                firstName: student.firstName,
                lastName: student.lastName,
                email: student.email,
                courses: {
                    create: student.courseIds?.map((courseId) => ({ // Assumindo que courseIds é uma lista de IDs de cursos
                        course: { connect: { id: courseId } }
                    }))
                },
                lists: {
                    create: student.listIds?.map(listId => ({ // Assumindo que listIds é uma lista de IDs de listas de presença
                        attendanceList: { connect: { id: listId } }
                    }))
                }
            }
        })
        await prisma.$disconnect();
    }

    async getStudent(id: number): Promise<Student> {
        const studentData = await prisma.student.findUniqueOrThrow({
            where: { id },
            include: {
                courses: true,
                lists: true
            }
        });

        const student: Student = {
            id: studentData.id,
            firstName: studentData.firstName,
            lastName: studentData.lastName,
            email: studentData.email,
            courses: studentData.courses,
            lists: studentData.lists
        };

        await prisma.$disconnect();
        return student as Student;
    }

    async getAllStudents(): Promise<Student[]> {
        const studentsData = await prisma.student.findMany({
            include: {
                courses: true,
                lists: true
            }
        });
        
        const students: Student[] = studentsData.map(studentData => ({
            id: studentData.id,
            firstName: studentData.firstName,
            lastName: studentData.lastName,
            email: studentData.email,
            courses: studentData.courses,
            lists: studentData.lists
        }));

        await prisma.$disconnect();
        return students;
    }

    async getStudentByEmail(email: string): Promise<Student> {
        const studentData = await prisma.student.findUniqueOrThrow({
            where:{email},
            include:{
                courses:true,
                lists:true,
            }
        })

        const student: Student = {
            id: studentData.id,
            firstName: studentData.firstName,
            lastName: studentData.lastName,
            email: studentData.email,
            courses: studentData.courses,
            lists: studentData.lists
        };
        await prisma.$disconnect();
        return student;
    }

    async deleteStudent(id: number): Promise<void> {
        await prisma.student.delete({
            where:{id}
        });
        await prisma.$disconnect();
    }

    async updateStudent(student: updateStudentDTO): Promise<void> {

        const existingStudent = await prisma.student.findUnique({
            where: { id: student.id },
            include: {
                courses: true,
                lists: true
            }
        });

        if(!existingStudent){
            throw Error("Not Found")
        }
    
        const updateData: any = {
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email
        };
    
        await prisma.student.update({
            where: { id: student.id },
            data: updateData
        });
    }
    

}
