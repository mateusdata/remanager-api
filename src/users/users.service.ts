import { UpdateUsersDto } from './dto/update-users-dto';
import { CreateUsersDto } from './dto/create-users-dto';
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from 'src/prisma/prisma.service';
import { log } from 'console';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createUsersDto: CreateUsersDto) {

    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: createUsersDto.email
      }
    });

    if (existingUser) {
      throw new ConflictException("Usuario já esta cadastrado");
    }

    const users = await this.prisma.user.create({
      data: createUsersDto
    })
    return users
  }

  async findAll() {
    return this.prisma.user.findMany()
  }

  async findOne(id: number) {
    const users = await this.prisma.user.findUnique({
      where:{
        id: id
      }
    });
    
    if(!users){
      throw new NotFoundException()
    }
    return users
  }

  async update(id: number, updateUsersDto: UpdateUsersDto) {

    return `O usuario com id ${id} foi atualizado`
  }

  async remove(id: number) {
    return `O usuario com id ${id} foi apagado`
  }
}