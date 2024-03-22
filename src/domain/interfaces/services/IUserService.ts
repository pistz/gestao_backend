import { createUserDTO } from "../../dto/Users/creatUserDTO";
import { User } from "../../entities/User.entity";

export interface IUserService {
    createUser(user:createUserDTO):Promise<User>
}