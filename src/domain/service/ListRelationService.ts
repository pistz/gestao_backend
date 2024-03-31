import { ListRelationRepository } from "../../repositories/ListStudentRelationRepository";
import { ListRelation } from "../entities/ListRelation.entity";
import { IListRelationService } from "../interfaces/services/IListRelationService";
import { BaseService } from "./base/baseService";


export class ListRelationService extends BaseService implements IListRelationService{

    private listRelationRepository:ListRelationRepository;

    constructor(listRelationRepository:ListRelationRepository){
        super();
        this.listRelationRepository = listRelationRepository;
    }

    async getStudentsToList(attendanceListId: string): Promise<ListRelation[]> {
        const studentList = await this.listRelationRepository.getStudentsToList(attendanceListId);
        return studentList;
    }
    
    async createListRelation(attendanceListId: string, studentId: number): Promise<void> {
        await this.listRelationRepository.createListRelation(attendanceListId, studentId);
    }

    async getListRelationIds(attendanceListId: string, studentId: number): Promise<ListRelation[]> {
        const listRelationId = await this.listRelationRepository.getListRelationIds(attendanceListId, studentId);
        return listRelationId;
    }

    async getListRelation(id: string): Promise<ListRelation> {
        const listRelation = await this.listRelationRepository.getListRelation(id);
        return listRelation;
    }

}