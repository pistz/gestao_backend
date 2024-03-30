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
    
    async createListRelation(attendanceListId: string, studentId: number): Promise<void> {
        await this.listRelationRepository.createListRelation(attendanceListId, studentId);
    }

    async getListRelationId(attendanceListId: string, studentId: number): Promise<string> {
        const listRelationId = await this.listRelationRepository.getListRelationId(attendanceListId, studentId);
        return listRelationId;
    }

    async getListRelation(id: string): Promise<ListRelation> {
        const listRelation = await this.listRelationRepository.getListRelation(id);
        return listRelation;
    }

}