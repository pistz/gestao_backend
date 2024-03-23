import { createUserDTO } from "../domain/dto/Users/createUserDTO";
import { User } from "../domain/entities/User.entity";
import { IUserRepository } from "../domain/interfaces/repositories/IUser";
import { IUserService } from "../domain/interfaces/services/IUserService";
import { CreateUserValidation } from "../domain/validation/User/createUserValidation";
import { BaseService } from "./base/baseService";
import bcryptjs from "bcryptjs";

export class UserService extends BaseService implements IUserService {
    
    private userRepository:IUserRepository;
    private key:number = Number(process.env.SECRET_KEY);

    constructor(userRepository:IUserRepository){
        super();
        this.userRepository = userRepository;
    }

    async createUser(user: createUserDTO): Promise<User> {
        const validator = new CreateUserValidation();
        const result = validator.validate(user);
        this.isValid(result);

        const newPassword = await bcryptjs.hash(user.password, this.key)
        user.password = newPassword;

        return await this.userRepository.createUser(user);
    }

}