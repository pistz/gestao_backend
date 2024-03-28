import { School } from "../../entities/School.entity";
import { typeRole } from "../../entities/valueObjects/Role";

export interface createUserDTO{
    userFirstName:string,
    userLastName:string,
    email:string,
    password:string,
    schoolId:School,
    role:typeRole,
}