import { createUserDTO } from "../domain/dto/Users/createUserDTO";
import { updateUserDTO } from "../domain/dto/Users/updateUserDTO";
import { User } from "../domain/entities/User.entity";
import { Role, typeRole } from "../domain/entities/valueObjects/Role";
import { IUserRepository } from "../domain/interfaces/repositories/IUserRepository";
import { prisma } from "../utils/prismaClient/PrismaClient";
import {User as UserPrisma, Role as RolePrisma} from '@prisma/client'

export class UserRepository implements IUserRepository {

    async loginUser(email:string, password:string): Promise<boolean> {
        const result = await prisma.user.findUniqueOrThrow({
            where:{
                email:email,
                password:password
            }
        })

        await prisma.$disconnect();
        return result ? true : false;
    }

    async get(id: string): Promise<User> {
        const result = await prisma.user.findUniqueOrThrow({
            where:{
                id
            }
        })
        await prisma.$disconnect();
        return <User>{id:result.id, userFirstName:result.userFirstName, userLastName:result.userLastName, email:result.email, role:result.role};
    }

    async getByEmail(email: string): Promise<User> {
        const result = await prisma.user.findUniqueOrThrow({
            where:{
                email
            }
        })
        await prisma.$disconnect();
        return <User>{id:result.id, userFirstName:result.userFirstName, userLastName:result.userLastName, email:result.email, role:result.role, password:result.password};
    }

    async getAll(): Promise<User[]> {
        const result = await prisma.user.findMany()
        await prisma.$disconnect();

        return result.map((userList) => <User>{id:userList.id, userFirstName:userList.userFirstName, userLastName:userList.userLastName, email:userList.email, role:userList.role});
    }

    updateUser(user: updateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async deleteUser(userId: string): Promise<void> {
        await prisma.user.delete({
            where:{
                id:userId
            }
        }) 
    }

    async createUser(createUser: createUserDTO): Promise<User> {
        const result = await prisma.user.create({
            data:{
                userFirstName:createUser.userFirstName,
                userLastName:createUser.userLastName,
                email:createUser.email,
                password:createUser.password,
                schoolId:createUser.schoolId,
                role:createUser.role
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
            role: user.role
        }
    }

}