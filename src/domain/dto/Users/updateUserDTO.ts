import { typeRole } from "../../entities/valueObjects/Role";

export interface updateUserDTO{
    id:string,
    userFirstName:string,
    userLastName:string,
    email:string,
    password:string,
    schoolId:string,
    role:typeRole,
}