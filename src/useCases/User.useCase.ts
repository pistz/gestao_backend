import { createUserDTO } from "../domain/dto/Users/creatUserDTO";
import { User } from "../domain/entities/User.entity";
import { IUserService } from "../domain/interfaces/services/IUserService";

export class UserUseCase implements IUserService {
    createUser(user: createUserDTO): Promise<User> {
        throw new Error("Method not implemented.");
    }

}