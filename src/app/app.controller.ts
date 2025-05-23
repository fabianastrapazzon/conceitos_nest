import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('home') // /home
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Método da soliciação -> Leitura (Read)
  @Get('hello') // /home/hello
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('exemplo')
  exemplo() {
    return 'Exemplo de rota';
  }
}
