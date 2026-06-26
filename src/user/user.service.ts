import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { LoggerService } from 'src/user/user.logger';

export interface User {
    name: string
    email?: string
    id: number
}

@Injectable()
export class UserService {
    constructor(private readonly logger: LoggerService) {}

    private users: User[] = [
        {id: 1, name: "Pema", email: "p@gmail.com"},
         {id: 2, name: "Pema", email: "p@gmail.com"}
    ]

     findAllUsers(name: string = "") {                                                                                                            
       this.logger.log("Finding all the users")                                                                                                 
       return this.users.filter((user) => {                                                                                                     
          return user.name.toLowerCase().includes(name.toLowerCase())                                                                           
       })                                                                                                                                       
   }
    findOneUser(id: number) {
        const user = this.users.find((user) => user.id === id)
        if(!user) {
            throw new NotFoundException(`User with id ${id} not found`)
        }
        return user;
    }
    createUser(dto:CreateUserDto) {
        const newUser: User = {
            id: this.users.length + 1,
            ...dto,
        }
        this.users.push(newUser)
        return newUser
    }
    updateUser(id: number, dto: UpdateUserDto) {
        const user = this.findOneUser(id);
        Object.assign(user, dto)
        return user
    }

    deleteUser(id: number) {
        const user = this.findOneUser(id)
        this.users = this.users.filter((user) => user.id !== id);

        return {
            message: "User deleted successfully",
            deletedUser: user
        }
    }
}
