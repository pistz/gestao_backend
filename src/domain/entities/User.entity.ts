import { typeRole } from "./valueObjects/Role";
import { School } from "./School.entity";

export interface User{
    id:string,
    userFirstName:string,
    userLastName:string,
    email:string,
    password:string,
    role:typeRole,
    school:School
}