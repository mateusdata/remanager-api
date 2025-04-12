import { Injectable } from '@nestjs/common';
import { CreateUsers2Dto } from './dto/create-users2.dto';
import { UpdateUsers2Dto } from './dto/update-users2.dto';

@Injectable()
export class Users2Service {
  create(createUsers2Dto: CreateUsers2Dto) {
    return 'This action adds a new users2';
  }

  findAll() {
    return `This action returns all users2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} users2`;
  }

  update(id: number, updateUsers2Dto: UpdateUsers2Dto) {
    return `This action updates a #${id} users2`;
  }

  remove(id: number) {
    return `This action removes a #${id} users2`;
  }
}
