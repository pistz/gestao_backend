import { createListDTO } from "../../dto/Lists/createListDTO";
import { AttendanceList } from "../../entities/AttendanceList.entity";

export interface IAttendanceListRepository{

    createList(list:createListDTO):Promise<void>

    getList(id:string):Promise<AttendanceList>

    getAllLists():Promise<AttendanceList[]>

    deleteList(id:string):Promise<void>
}