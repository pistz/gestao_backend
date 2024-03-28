import { typeRole } from "../../entities/valueObjects/Role";

export interface createUserDTO{
    userFirstName:string,
    userLastName:string,
    email:string,
    password:string,
    schoolId:string,
    role:typeRole,
}