import { User as UserPrisma} from "@prisma/client";
import { typeRole } from "./valueObjects/Role";


export interface User extends UserPrisma {
    role:typeRole
}