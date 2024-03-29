
import { createUserDTO } from "../dto/Users/createUserDTO";
import { updateUserDTO } from "../dto/Users/updateUserDTO";
import { User } from "../entities/User.entity";
import { IUserRepository } from "../interfaces/repositories/IUserRepository";
import { IUserService } from "../interfaces/services/IUserService";
import { CreateUserValidation } from "../validation/User/createUserValidation";
import { BaseService } from "./base/baseService";
import bcryptjs from "bcryptjs";

export class UserService extends BaseService implements IUserService {
    
    private userRepository:IUserRepository;
    private key:number = Number(process.env.SECRET_KEY);

    constructor(userRepository:IUserRepository){
        super();
        this.userRepository = userRepository;
    }

    async getByEmail(email: string): Promise<User> {
        const result = await this.userRepository.getByEmail(email);
        return result as User
    }

    //this method returns a boolean - it should return a token for more security - also it should return more info for frontend use.
    async loginUser(email:string, password:string): Promise<boolean> {
        const foundUser = await this.getByEmail(email);
        if(!foundUser){
            throw Error("no user")
        }
        const truePassword = await bcryptjs.compare(password, foundUser.password);
        if(!truePassword){
            throw Error("no pass")
        }
        return true;
    }

    async get(id: string): Promise<User> {
        const result = await this.userRepository.get(id);
        return result ? result : {} as User
    }

    async getAll(): Promise<User[]> {
        const result = await this.userRepository.getAll();
        return result ? [...result] : {} as User[]
    }
    updateUser(user: updateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteUser(userId: string): Promise<void> {
        const result = await this.userRepository.deleteUser(userId);
        return result;
    }

    async createUser(user: createUserDTO): Promise<void> {
        const validator = new CreateUserValidation();
        const result = validator.validate(user);
        this.isValid(result);

        const newPassword = await bcryptjs.hash(user.password, this.key)
        user.password = newPassword;

        await this.userRepository.createUser(user);
    }

}