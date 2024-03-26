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
            await schoolService.createSchool(newSchool);
            response.status(201).json({ success: true, data: "School Created" });
        } catch (err) {
            console.error(err);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }

    async getSchool(request:Request, response:Response){
        const schoolRepository = new SchoolRepository();
        const schoolService = new SchoolService(schoolRepository);

        const id = request.params.id;
        try {
            const school = await schoolService.getSchool(id);
            response.json(school);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async getAllSchools(request:Request, response:Response){
        const schoolRepository = new SchoolRepository();
        const schoolService = new SchoolService(schoolRepository);

        try {
            const schools = await schoolService.getAllSchools();
            response.json(schools);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

}