import { Request, Response } from 'express';
import { SchoolRepository } from "../../repositories/SchoolRepository";
import { SchoolService } from "../../service/SchoolService";
import { createSchoolDTO } from "../../domain/dto/Schools/createSchoolDTO";

export class SchoolController {

    async createSchool (request:Request, response:Response){
        const schoolRepository = new SchoolRepository();
        const schoolService = new SchoolService(schoolRepository);

        const newSchool:createSchoolDTO = request.body;

        try {
            const result = await schoolService.createSchool(newSchool);
            response.status(201).json({ success: true, data: result });
        } catch (err) {
            console.error(err);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}