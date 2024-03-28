import { createStudentsDTO } from "../domain/dto/Students/createStudentsDTO";
import { updateStudentDTO } from "../domain/dto/Students/updateStudentDTO";
import { Student } from "../domain/entities/Student.entity";
import { IStudentService } from "../domain/interfaces/services/IStudentService";
import { CreateStudentValidation } from "../domain/validation/Student/createStudentValidation";
import { StudentRepository } from "../repositories/StudentRepository";
import { BaseService } from "./base/baseService";

export class StudentService extends BaseService implements IStudentService{

    private studentRepository:StudentRepository;

    constructor(studentRepository:StudentRepository){
        super();
        this.studentRepository = studentRepository;
    }

    async createStudent(student: createStudentsDTO): Promise<void> {
        const validator = new CreateStudentValidation();
        const result = validator.validate(student);
        this.isValid(result);

        await this.studentRepository.createStudent(student);
    }

    async getStudent(id: number): Promise<Student> {
        return await this.studentRepository.getStudent(id);
    }

    async getAllStudents(): Promise<Student[]> {
        return await this.studentRepository.getAllStudents();
    }

    async getStudentByEmail(email: string): Promise<Student> {
        return await this.studentRepository.getStudentByEmail(email);
    }

    async deleteStudent(id: number): Promise<void> {
        await this.studentRepository.deleteStudent(id);
    }

    async updateStudent(student: updateStudentDTO): Promise<void> {
        await this.studentRepository.updateStudent(student);
    }

}