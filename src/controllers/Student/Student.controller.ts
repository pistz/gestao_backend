import { Request, Response } from "express";
import { StudentRepository } from "../../repositories/StudentRepository";
import { StudentService } from "../../service/StudentService";
import { createStudentsDTO } from "../../domain/dto/Students/createStudentsDTO";

export class StudentController {

    async createStudent(request:Request, response:Response){
        const studentRepository = new StudentRepository();
        const studentService = new StudentService(studentRepository);

        const newStudent:createStudentsDTO = request.body;

        try {
            await studentService.createStudent(newStudent);
            response.status(201).json({ success: true, data: "Student Created" })
        } catch (error) {
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }

    async getStudentById(request:Request, response:Response){
        const studentRepository = new StudentRepository();
        const studentService = new StudentService(studentRepository);

        const studentId:number = Number(request.params.id);
        try {
            const student = await studentService.getStudent(studentId);
            response.json(student)
        } catch (error) {
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }

    async getStudentByEmail(request:Request, response:Response){
        const studentRepository = new StudentRepository();
        const studentService = new StudentService(studentRepository);

        const studentEmail:string = request.params.email;

        try {
            const student = await studentService.getStudentByEmail(studentEmail);
            response.json(student);
        } catch (error) {
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }

    async getAllStudents(request:Request, response:Response){
        const studentRepository = new StudentRepository();
        const studentService = new StudentService(studentRepository);

        try {
            const students = await studentService.getAllStudents();
            response.json(students);
        } catch (error) {
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }

    async updateStudent(reques:Request, response:Response){

    }
}