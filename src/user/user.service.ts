import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/user/user.logger';

interface User {
    name: string
    email: string
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
            user.name.toLowerCase().includes(name.toLowerCase())
        })
    }
}
