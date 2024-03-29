import { createListDTO } from "../../dto/Lists/createListDTO"
import { AttendanceList } from "../../entities/AttendanceList.entity"

export interface IAttendanceListService {
    
    createList(list:createListDTO):Promise<void>

    getList(id:string):Promise<AttendanceList>

    getAllLists():Promise<AttendanceList[]>
}