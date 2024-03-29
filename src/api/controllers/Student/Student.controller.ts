import { Request, Response } from "express";
import { StudentRepository } from "../../../repositories/StudentRepository";
import { createStudentsDTO } from "../../../domain/dto/Students/createStudentsDTO";
import { updateStudentDTO } from "../../../domain/dto/Students/updateStudentDTO";
import { StudentService } from "../../../domain/service/StudentService";

export class StudentController {

    async createStudent(request:Request, response:Response){
        const studentRepository = new StudentRepository();
        const studentService = new StudentService(studentRepository);

        const newStudent:createStudentsDTO = request.body;

        try {
            await studentService.createStudent(newStudent);
            response.status(201).json({ success: true, message: "Student Created" })
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
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
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async getAllStudents(request:Request, response:Response){
        const studentRepository = new StudentRepository();
        const studentService = new StudentService(studentRepository);

        try {
            const students = await studentService.getAllStudents();
            response.json(students);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async updateStudent(request:Request, response:Response){
        const studentRepository = new StudentRepository();
        const studentService = new StudentService(studentRepository);

        const { firstName, lastName, email, courseIds, listIds }:updateStudentDTO = request.body;
        const id = Number(request.params.id);

        const updatedStudent:updateStudentDTO = {id, firstName, lastName,email,courseIds,listIds}

        try {
            await studentService.updateStudent(updatedStudent)
            response.status(201).json({ success: true, message: "Student Updated"})
        }catch (error){
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async deleteStudent(request:Request, response:Response){
        const studentRepository = new StudentRepository();
        const studentService = new StudentService(studentRepository);

        const deletedStudent = Number(request.params.id);

        try {
            await studentService.deleteStudent(deletedStudent);
            response.status(200).json({ success:true, message: "Student Deleted"});
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
}