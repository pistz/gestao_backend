
import { createSchoolDTO } from "../../dto/Schools/createSchoolDTO";
import { School } from "../../entities/School.entity";


export interface ISchoolRepository {
    get(id:string):Promise<void | null>;

    getAll():Promise<School[]>;

    createSchool(createSchool:createSchoolDTO):Promise<void>
}