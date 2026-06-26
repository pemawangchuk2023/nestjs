import { Post,Body, Controller, Get, Param, Query, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
     constructor(private readonly userService: UserService) {}  
    // Get User
    @Get()
    getUsers(@Query('name') name: string) {
        
    const users =  [
        {id: 1, name: "Pema"},
        {id: 2, name: "Wangchuk"},
    ]
    
    if(name) {
        return users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()))
    }
    return users;
    }

    @Get(":id")
    getUserById(@Param("id") id: string) {
        return this.userService.findOneUser(Number(id));   
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return {data: createUserDto, message: "User created successfully"}
    }

    @Put(":id")
    updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return {
            data: {id, ...updateUserDto},
            message: "User updated successfully"
        }
    }
    @Delete(":id") 
    deleteUser(@Param("id") id: string) {
        return this.userService.deleteUser(Number(id))
    }
    
}
