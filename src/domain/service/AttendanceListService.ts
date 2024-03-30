import { AttendanceListRepository } from "../../repositories/AttendanceListRepository";
import { createListDTO } from "../dto/Lists/createListDTO";
import { AttendanceList } from "../entities/AttendanceList.entity";
import { IAttendanceListService } from "../interfaces/services/IAttendanceListService";
import { CreateAttendanceListValidation } from "../validation/AttendanceList/createAttendanceListValidation";
import { BaseService } from "./base/baseService";

export class AttendanceListService extends BaseService implements IAttendanceListService{

    private attendanceListRepository:AttendanceListRepository;

    constructor(attendanceListRepository:AttendanceListRepository){
        super();
        this.attendanceListRepository = attendanceListRepository;
    }

    async createList(list: createListDTO): Promise<void> {
        const validator = new CreateAttendanceListValidation();
        const result = validator.validate(list);
        this.isValid(result)

        await this.attendanceListRepository.createList(list);
    }

    async getList(id: string): Promise<AttendanceList> {
        return await this.attendanceListRepository.getList(id);
    }

    async getAllLists(): Promise<AttendanceList[]> {
        return await this.attendanceListRepository.getAllLists();
    }

}