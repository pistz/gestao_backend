import { createUserDTO } from "../../dto/Users/createUserDTO";
import { updateUserDTO } from "../../dto/Users/updateUserDTO";
import { User } from "../../entities/User.entity";

export interface IUserService {
    get(id:string):Promise<User>;

    getByEmail(email:string):Promise<User>;

    getAll():Promise<User[]>;

    loginUser(email:string, password:string):Promise<boolean>

    createUser(user:createUserDTO):Promise<User>

    updateUser(user:updateUserDTO):Promise<void>

    deleteUser(userId:string):Promise<void>

}