import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    // Get User
    @Get()
    getUsers() {
        return [
            {id: 1, name: "Pema"},
            {id: 2, name: "Wangchuk"},
        ]
    }
}
