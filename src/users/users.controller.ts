import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUsersDto } from './dto/create-users-dto';
import { UpdateUsersDto } from './dto/update-users-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() createUsersDto: CreateUsersDto) {
    return this.userService.create(createUsersDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @Put(":id")
  async update(@Param(":id") id: string, @Body() updateUsersDto: UpdateUsersDto) {
    return this.userService.update(+id, updateUsersDto)
  }
}