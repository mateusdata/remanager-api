import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Users2Service } from './users2.service';
import { CreateUsers2Dto } from './dto/create-users2.dto';
import { UpdateUsers2Dto } from './dto/update-users2.dto';

@Controller('users2')
export class Users2Controller {
  constructor(private readonly users2Service: Users2Service) {}

  @Post()
  create(@Body() createUsers2Dto: CreateUsers2Dto) {
    return this.users2Service.create(createUsers2Dto);
  }

  @Get()
  findAll() {
    return this.users2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.users2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsers2Dto: UpdateUsers2Dto) {
    return this.users2Service.update(+id, updateUsers2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.users2Service.remove(+id);
  }
}
