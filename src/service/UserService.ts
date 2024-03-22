import { createUserDTO } from "../domain/dto/Users/creatUserDTO";
import { User } from "../domain/entities/User.entity";
import { IUserRepository } from "../domain/interfaces/repositories/IUser";
import { IUserService } from "../domain/interfaces/services/IUserService";
import { CreateUserValidation } from "../domain/validation/User/createUserValidation";
import { BaseService } from "./base/baseService";

export class UserService extends BaseService implements IUserService {

    private userRepository:IUserRepository;

    constructor(userRepository:IUserRepository){
        super();
        this.userRepository = userRepository;
    }

    async createUser(user: createUserDTO): Promise<User> {
        const validator = new CreateUserValidation();
        const result = validator.validate(user);
        this.isValid(result);

        return await this.userRepository.createUser(user);
    }

}