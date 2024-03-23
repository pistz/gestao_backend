import { createUserDTO } from "../../dto/Users/createUserDTO";
import { updateUserDTO } from "../../dto/Users/updateUserDTO";
import { User } from "../../entities/User.entity";

export interface IUserRepository {

    get(id:string):Promise<User | null>;

    getByEmail(email:string):Promise<User|null>;

    getAll():Promise<User[]>;

    loginUser(email:string, password:string):Promise<boolean>

    createUser(createUser:createUserDTO):Promise<User>

    updateUser(user:updateUserDTO):Promise<void>

    deleteUser(userId:string):Promise<void>
}