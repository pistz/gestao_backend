import { createUserDTO } from "../domain/dto/Users/createUserDTO";
import { User } from "../domain/entities/User.entity";
import { Role } from "../domain/entities/valueObjects/Role";
import { IUserRepository } from "../domain/interfaces/repositories/IUser";
import { prisma } from "../prismaClient/PrismaClient";
import {User as UserPrisma, Role as RolePrisma} from '@prisma/client'

export class UserRepository implements IUserRepository {
    get(id: string): Promise<void | null> {
        throw new Error("Method not implemented.");
    }
    getByEmail(email: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async createUser(createUser: createUserDTO): Promise<User> {
        const result = await prisma.user.create({
            data:{
                userFirstName:createUser.userFirstName,
                userLastName:createUser.userLastName,
                email:createUser.email,
                password:createUser.password,
                schoolId:createUser.schoolId,
                role:RolePrisma[createUser.role.toString() as keyof typeof RolePrisma]
            }
        })
        return this.buildUser(result);
    }

    private buildUser(user:UserPrisma):User{
        return <User><unknown>{
            id: user.id,
            email: user.email,
            userFirstName: user.userFirstName,
            userLastName: user.userLastName,
            password: user.password,
            school: user.schoolId,
            role: Role[user.role as keyof typeof Role]
        }
    }

}