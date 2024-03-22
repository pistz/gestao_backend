import { createUserDTO } from "../../dto/Users/creatUserDTO";
import { User } from "../../entities/User.entity";

export interface IUserRepository {
    get(id:string):Promise<void | null>;

    getByEmail(email:string):Promise<User|null>;

    getAll():Promise<User[]>;

    createUser(createUser:createUserDTO):Promise<User>
}