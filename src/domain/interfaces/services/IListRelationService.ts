import { ListRelation } from "../../entities/ListRelation.entity";

export interface IListRelationService {
    getListRelationId(attendanceListId:string, studentId:number):Promise<string>
    getListRelation(id:string):Promise<ListRelation>
    createListRelation(attendanceListId:string, studentId:number):Promise<void>
}