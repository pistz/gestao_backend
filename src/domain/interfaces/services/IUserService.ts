import { createUserDTO } from "../../dto/Users/createUserDTO";
import { User } from "../../entities/User.entity";

export interface IUserService {
    createUser(user:createUserDTO):Promise<User>
}