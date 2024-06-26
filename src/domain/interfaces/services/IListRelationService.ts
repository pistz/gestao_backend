import { ListRelation } from "../../entities/ListRelation.entity";

export interface IListRelationService {
    
    getAllListsRelations(): Promise<ListRelation[]>;
    getListRelationIds(attendanceListId:string, studentId:number):Promise<ListRelation[]>
    getListRelation(id:string):Promise<ListRelation>
    createListRelation(attendanceListId:string, studentId:number):Promise<void>
    getStudentsToList(attendanceListId:string):Promise<ListRelation[]>
}