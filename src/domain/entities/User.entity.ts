import { School } from "./School.entity";
import { Role } from "./valueObjects/Role";

export interface User {
    id:string,
    userFirstName:string,
    userLastName:string,
    email:string,
    password:string,
    school:School,
    role:Role,
}