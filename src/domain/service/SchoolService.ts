
import { SchoolRepository } from "../../repositories/SchoolRepository";
import { createSchoolDTO } from "../dto/Schools/createSchoolDTO";
import { School } from "../entities/School.entity";
import { ISchoolService } from "../interfaces/services/ISchoolService";
import { CreateSchoolValidation } from "../validation/School/createSchoolValidation";
import { BaseService } from "./base/baseService";

export class SchoolService extends BaseService implements ISchoolService{

    private schoolRepository:SchoolRepository;

    constructor(schoolRespository:SchoolRepository){
        super();
        this.schoolRepository = schoolRespository;
    }

    async getAllSchools(): Promise<School[]> {
        return await this.schoolRepository.getAll();
    }

    async getSchool(id: string): Promise<School> {
        return await this.schoolRepository.get(id); 
    }

    async createSchool(school: createSchoolDTO): Promise<void> {
        const validator = new CreateSchoolValidation();
        const result = validator.validate(school);
        this.isValid(result);

        await this.schoolRepository.createSchool(school);
    }

}