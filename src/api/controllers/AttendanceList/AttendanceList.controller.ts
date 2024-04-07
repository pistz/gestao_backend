import { Request, Response } from "express";
import { AttendanceListRepository } from "../../../repositories/AttendanceListRepository";
import { AttendanceListService } from "../../../domain/service/AttendanceListService";
import { createListDTO } from "../../../domain/dto/Lists/createListDTO";

export class AttendanceListController {

    async createAttendanceList(request:Request, response:Response){
        const attendanceListRepository = new AttendanceListRepository();
        const attendanceListService = new AttendanceListService(attendanceListRepository);

        const newList:createListDTO = request.body;

        try {
            await attendanceListService.createList(newList);
            response.status(201).json({ success:true, message: "List Created"})
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async getAttendanceList(request:Request, response:Response){
        const attendanceListRepository = new AttendanceListRepository();
        const attendanceListService = new AttendanceListService(attendanceListRepository);

        const listId = request.params.id;

        try {
            const list = await attendanceListService.getList(listId);
            response.json(list);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async getAllAttendancesLists(request:Request, response:Response){
        const attendanceListRepository = new AttendanceListRepository();
        const attendanceListService = new AttendanceListService(attendanceListRepository);

        try {
            const lists = await attendanceListService.getAllLists();
            response.json(lists);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async deleteAttendanceList(request:Request, response:Response){
        const attendanceListRepository = new AttendanceListRepository();
        const attendanceListService = new AttendanceListService(attendanceListRepository);

        const listId = request.params.id;

        try {
            await attendanceListService.deleteList(listId);
            response.json({success: true, message: 'List Deleted'});
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

}