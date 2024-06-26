import { createSchoolDTO } from "../../dto/Schools/createSchoolDTO";
import { School } from "../../entities/School.entity";

export interface ISchoolService {
    createSchool(school:createSchoolDTO):Promise<void>

    getSchool(id:string):Promise<School>

    getAllSchools():Promise<School[]>
}