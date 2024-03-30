import { Request, Response } from "express";
import { ListRelationRepository } from "../../../repositories/ListStudentRelationRepository";
import { ListRelationService } from "../../../domain/service/ListRelationService";

export class ListRelationController {

    async attendToClass(request:Request, response:Response){
        const listRelationRepository = new ListRelationRepository();
        const listRelationService = new ListRelationService(listRelationRepository);

        const studentId:number = Number(request.body.studentId);
        const attendanceListId:string = request.body.attendanceListId;

        try {
            await listRelationService.createListRelation(attendanceListId, studentId);
            response.status(201).json({success: true, message: "Student is present"})
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error with attendance' });
        }
    }

    async studentsAttendingToClass(request:Request, response:Response){
        const listRelationRepository = new ListRelationRepository();
        const listRelationService = new ListRelationService(listRelationRepository);

        const attendanceListId:string = request.body.attendanceListId;
        
        try {
            const listOfStudents = await listRelationService.getStudentsToList(attendanceListId);
            response.json(listOfStudents);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error with List' });
        }
    }

    async getListRelation(request:Request, response:Response){
        const listRelationRepository = new ListRelationRepository();
        const listRelationService = new ListRelationService(listRelationRepository);

        const listRelationId:string = request.params.id;

        try {
            const listRelation = await listRelationService.getListRelation(listRelationId);
            response.json(listRelation);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error with List' });
        }
    }

    async getListRelationIds(request:Request, response:Response){
        const listRelationRepository = new ListRelationRepository();
        const listRelationService = new ListRelationService(listRelationRepository);

        const attendanceListId:string = request.body.attendanceListId;
        const studentId:number = Number(request.body.studentId);

        try {
            const listRelationId = await listRelationService.getListRelationIds(attendanceListId, studentId);
            response.json(listRelationId);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error with List' });
        }

    }
}