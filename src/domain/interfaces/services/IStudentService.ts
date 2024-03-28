import { createStudentsDTO } from "../../dto/Students/createStudentsDTO";
import { updateStudentDTO } from "../../dto/Students/updateStudentDTO";
import { Student } from "../../entities/Student.entity";

export interface IStudentService{

    createStudent(student:createStudentsDTO):Promise<void>

    getStudent(id:number):Promise<Student>

    getAllStudents():Promise<Student[]>

    getStudentByEmail(email:string):Promise<Student>

    deleteStudent(id:number):Promise<void>

    updateStudent(student:updateStudentDTO):Promise<void>

}