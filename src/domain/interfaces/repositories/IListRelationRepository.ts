import { ListRelation } from "../../entities/ListRelation.entity";

export interface IListRelation {
    getListRelationId(attendanceListId:string, studentId:string):Promise<ListRelation>
    getListRelation(id:string):Promise<ListRelation>
}