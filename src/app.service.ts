import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'API do sistema de gestão de verificação de veículos',
      version: '1.0',
      details: 'Bem-vindo ao sistema!',
    };
  }
}
