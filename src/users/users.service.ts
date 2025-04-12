import { UpdateUsersDto } from './dto/update-users-dto';
import { CreateUsersDto } from './dto/create-users-dto';
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  async create(createUsersDto: CreateUsersDto) {
    return "Usuario criado com sucesso!"
  }

  async findAll() {
    return "Todos os usuarios foram retornados"
  }

  async findOne(id: number) {
    return `O usuario com id ${id} foi retornado`
  }

  async update(id: number, updateUsersDto: UpdateUsersDto) {

    return `O usuario com id ${id} foi atualizado`
  }

  async remove(id: number) {
    return `O usuario com id ${id} foi apagado`
  }
}