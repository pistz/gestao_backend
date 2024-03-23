import { createSchoolDTO } from "../domain/dto/Schools/createSchoolDTO";
import { School } from "../domain/entities/School.entity";
import { ISchoolService } from "../domain/interfaces/services/ISchoolService";
import { CreateSchoolValidation } from "../domain/validation/School/createSchoolValidation";
import { SchoolRepository } from "../repositories/SchoolRepository";
import { BaseService } from "./base/baseService";

export class SchoolService extends BaseService implements ISchoolService{

    private schoolRepository:SchoolRepository;

    constructor(schoolRespository:SchoolRepository){
        super();
        this.schoolRepository = schoolRespository;
    }

    async createSchool(school: createSchoolDTO): Promise<void> {
        const validator = new CreateSchoolValidation();
        const result = validator.validate(school);
        this.isValid(result);

        return await this.schoolRepository.createSchool(school);
    }

}