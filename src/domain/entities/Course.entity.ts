import { School } from "./School.entity";

export interface Course{
    id:string,
    name:string,
    startingYear:number,
    school:School,
}