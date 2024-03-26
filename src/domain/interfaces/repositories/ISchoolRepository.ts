
import { createSchoolDTO } from "../../dto/Schools/createSchoolDTO";
import { School } from "../../entities/School.entity";


export interface ISchoolRepository {

    get(id:string):Promise<School>;

    getAll():Promise<School[]>;

    createSchool(createSchool:createSchoolDTO):Promise<void>
}