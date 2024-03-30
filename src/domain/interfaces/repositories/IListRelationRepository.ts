import { ListRelation } from "../../entities/ListRelation.entity";

export interface IListRelationRepository {

    getListRelationId(attendanceListId:string, studentId:number):Promise<string>
    getListRelation(id:string):Promise<ListRelation>
    createListRelation(attendanceListId:string, studentId:number):Promise<void>
}