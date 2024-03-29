
import { StudentRepository } from "../../repositories/StudentRepository";
import { createStudentsDTO } from "../dto/Students/createStudentsDTO";
import { updateStudentDTO } from "../dto/Students/updateStudentDTO";
import { CourseRelation } from "../entities/CourseRelation.entity";
import { ListRelation } from "../entities/ListRelation.entity";
import { Student } from "../entities/Student.entity";
import { IStudentService } from "../interfaces/services/IStudentService";
import { CreateStudentValidation } from "../validation/Student/createStudentValidation";
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
        const existingStudent = await this.studentRepository.getStudent(Number(student.id));
    
        const updatedCourseRelations: CourseRelation[] = existingStudent.courses.filter(cr => 
            student.courseIds?.includes(cr.courseId)
        );
    
        const updatedListRelations: ListRelation[] = existingStudent.lists.filter(lr => 
            student.listIds?.includes(lr.attendanceListId)
        );
    
        student.courseIds?.forEach(courseId => {
            if (!updatedCourseRelations.some(cr => cr.courseId === courseId)) {
                updatedCourseRelations.push({
                    id: '', // This should be generated or fetched if necessary.
                    studentId: existingStudent.id,
                    courseId: courseId
                });
            }
        });
    
        student.listIds?.forEach(listId => {
            if (!updatedListRelations.some(lr => lr.attendanceListId === listId)) {
                updatedListRelations.push({
                    id: '', // This should be generated or fetched if necessary.
                    studentId: existingStudent.id,
                    attendanceListId: listId
                });
            }
        });
    
        const updatedFields: Student = {
            id: existingStudent.id,
            firstName: student.firstName ?? existingStudent.firstName,
            lastName: student.lastName ?? existingStudent.lastName,
            email: student.email ?? existingStudent.email,
            courses: updatedCourseRelations,
            lists: updatedListRelations
        };
    
        if (student.firstName && student.firstName !== existingStudent.firstName) {
            updatedFields.firstName = student.firstName;
        }
        if (student.lastName && student.lastName !== existingStudent.lastName) {
            updatedFields.lastName = student.lastName;
        }
        if (student.email && student.email !== existingStudent.email) {
            updatedFields.email = student.email;
        }
    
        await this.studentRepository.updateStudent(updatedFields);
    }
    

}